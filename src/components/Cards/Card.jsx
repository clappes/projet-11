import redcard from '../../assets/card-red.jpg'

export default function Card({logement}) {
	const {cover, title} = logement;
	return (
		<article className="card">
			<img src={cover} alt="Aperçu de la location" />
			<div className="card__layer">
				<h2 className="card__layer__title">
                    {title}
                </h2>
			</div>
		</article>
	);
}