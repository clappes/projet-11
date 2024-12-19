import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Banner from '../../components/Banner/Banner';
import Card from '../../components/Cards/Card';

function Home() {

  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("datas/logements.json")
    .then(response => response.json())
    .then(json => setLogements(json))
  }, []);
  

  return (
    <>
      <Banner />
      <section className='card-board'>
        {logements.map(logement => 
          <Link key={logement.id} className="link-cards" to={`/logement/${logement.id}`}>
            <Card logement={logement} />
          </Link>
        )}
      </section>
      
    </>
  );
}

export default Home;