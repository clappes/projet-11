import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tags/Tag';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';
import Error from '../../components/Error/Error';
import Accordion from '../../components/Accordion/Accordion';



function Accommodation() {

  const params = useParams();
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("../../../datas/logements.json")
    .then(response => response.json())
    .then(json => setLogements(json))
  }, []);
  const pickedAppart = logements.find(({ id }) => id === params.id)
  if(!pickedAppart) {
    return <Error />
  }
  const slidesPic = pickedAppart && pickedAppart.pictures;
  const tags = pickedAppart && pickedAppart.tags;
  const equipments = pickedAppart && pickedAppart.equipments;
  const listEquipments = pickedAppart && equipments.map((item,index) => (
    <li key={index}>
				{item}
		</li>
  ))



  return (
    pickedAppart && (
      <>
        <Carrousel slides={slidesPic} />
        <section className='info'>
          <article className='info__title'>
            <h1>{pickedAppart.title}</h1>
            <p>{pickedAppart.location}</p>
          </article>
          <article className='info__tags'>
            <div className="tags">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </article>
          <article className='info__host'>
            <div className='info__host__rate'>
              <Rate score={pickedAppart.rating} />
            </div>
            <div className='info__host__rate' >
              <Host hostName={pickedAppart.host.name}  hostPic={pickedAppart.host.picture} />
            </div>
          </article>
        </section>
        <section className='accordionContainer'>
          <Accordion collapseTitle="Description" collapseText={pickedAppart.description} />
          <Accordion collapseTitle="Équipements" collapseText={listEquipments}/>
        </section>
      </>
    )
  );
}

export default Accommodation;