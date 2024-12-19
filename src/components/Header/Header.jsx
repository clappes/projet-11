import logo from "../../assets/logo.svg";
import Nav from "../Nav/Nav";

export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="headerWrap__fig__logo" src={logo} alt="Logo de l'agence kasa" />
			</figure>
			<Nav className="navbar" />
		</header>
	);
}