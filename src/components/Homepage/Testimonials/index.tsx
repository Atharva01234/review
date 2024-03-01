import React from "react";
import "./testimonials.css";
import { Testimony, testimonials } from "../../../utils/testimonials";
// import CarouselWrapper from "../../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../../../hooks/useIsMobile";

interface TestimonialCardProps {
  testimonial: Testimony;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { testimonial } = props;

  return (
    <div className="testimonial">
      <p className="testimonial-text">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="quote-icon quote-left-icon"
          style={{ color: "#b3b6bd", opacity: 0.2 }}
        />
        <span>{testimonial.testimony}</span>
      </p>
      <p className="overview">
        <b>- {testimonial.name}</b>, {testimonial.designation}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const isMobile = useIsMobile()
  const CHUNK_SIZE = isMobile ? 1 : 2;

  const testimonialChunks: Testimony[][] = [];
  for (let i = 0; i < testimonials.length; i += CHUNK_SIZE) {
    testimonialChunks.push(testimonials.slice(i, i + CHUNK_SIZE));
  }
  return (
    <div className="testimonials-root">
      <h3>Client Testimonials</h3>
      <div className="underline"></div>
      <div className="row">
        {/* <CarouselWrapper interval={5000} controls={false}>
          {testimonialChunks.map((testimonials: Testimony[], index) => (
            <div className="testimonials-container" key={'container-'+ index}>
              {testimonials.map((testimonial: Testimony) => (
                <TestimonialCard testimonial={testimonial} key={'testimonial-' + testimonial.name}/>
              ))}
            </div>
          ))}
        </CarouselWrapper> */}
      </div>
    </div>
  );
};

export default Testimonials;
