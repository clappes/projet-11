import host from '../../assets/Host.jpg';

export default function Host(props) {
	return (
		<aside className="host">
			<p className="host__name">{props.hostName}</p>
			<div className="host__picture">
				<img src={props.hostPic} alt="Profil de l'hote de séjour" />
			</div>
		</aside>
	);
}