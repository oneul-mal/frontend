import React, { useCallback, useEffect, useState, useRef } from "react";
import styles from "./slider.module.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlideLength = children.length - 1;
  const sliderRef = useRef();

  const nextSlide = useCallback(() => {
    currentSlide >= totalSlideLength
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  }, [currentSlide, totalSlideLength]);

  const prevSlide = useCallback(() => {
    currentSlide <= 0
      ? setCurrentSlide(totalSlideLength)
      : setCurrentSlide(currentSlide - 1);
  }, [currentSlide, totalSlideLength]);

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${
      (100 / children.length) * currentSlide
    }%)`;
  }, [currentSlide, children.length]);

  return (
    <div className={styles.container}>
      <ul
        className={styles.slider}
        style={{ width: `${children.length}00%` }}
        ref={sliderRef}
      >
        {children.map((slide, index) => (
          <li className={styles.slide} key={index}>
            {slide}
          </li>
        ))}
      </ul>
      <button className={styles.prevBtn} onClick={prevSlide}>
        <GrPrevious />
      </button>
      <button className={styles.nextBtn} onClick={nextSlide}>
        <GrNext />
      </button>
    </div>
  );
};

export default Slider;
