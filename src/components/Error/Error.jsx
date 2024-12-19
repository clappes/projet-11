import { Link } from "react-router-dom";

export default function Error() {
	return (
		<div className="errorContainer">
          <p className="errorContainer__errorNumber">404</p>
          <p className="errorContainer__errorText">Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="errorContainer__errorLinkHome">
            Retourner sur la page d’accueil
          </Link>
        </div>
	);
}


