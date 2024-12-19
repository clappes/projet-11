import { useState } from "react"

import chevron from "../../assets/vector-bas.svg"


export default function Accordion(props) {

	const [active, setActive] = useState(false)


	const handleToggle = e => {
		e.preventDefault()
        setActive(!active)
	}

	return (
		<article className={`accordion ${active && "active"}`}>
			<div className="accordion__title" onClick={handleToggle}>
				<h2>{props.collapseTitle}</h2>
				<img src={chevron} alt="Icone chevron" />
			</div>
			<div className="accordion__content">
				<ul>
					<p>{props.collapseText}</p>
				</ul>
			</div>
		</article>
	);
}