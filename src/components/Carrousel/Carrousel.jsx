import { useState } from "react";
import left from "../../assets/vector-left.svg";
import right from "../../assets/vector-right.svg";

export default function Carousel({ slides }) {
    // Index du premie slide à 0
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
		  setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	  };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
    };
    return (
      <section className="carrousel">
        {length > 1 && (
          <img src={left} alt="Flêche de gauche du carrousel" onClick={prevSlide} className="carrousel__leftArrow"/>
        )}
        {length > 1 && (
          <img src={right} alt="Flêche de droite du carrousel" onClick={nextSlide} className="carrousel__rightArrow"/>
        )}
        {slides.map((slide, index) => (
          <div key={index} className="carrousel__slider">
            {index === current && (
              <img src={slide} alt="Images de l'appartement" />
            )}
            {index === current && (
              <span className="carrousel__slider__number">{current + 1}/{length}</span>
            )}
          </div>
        ))}
      </section>
    );

}