import emptyStar from "../../assets/emptyStar.svg";
import fullStar from "../../assets/fullStar.svg";

export default function Rate({score}) {
	const stars = [1,2,3,4,5]
	return (
		<div className="scoreRate">
			{stars.map(nbStar => 
				score >= nbStar ? (
					<img className="star" src={fullStar} alt="full star" />
				) : (
					<img className="star" src={emptyStar} alt="empty star" />
				)
			)}
		</div>
	);
}