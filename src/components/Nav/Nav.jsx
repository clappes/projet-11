import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar_linkhome">
				Accueil
			</Link>
			<Link to="/about" className="navbar_linkabout">
				A Propos
			</Link>
		</nav>
	);
}