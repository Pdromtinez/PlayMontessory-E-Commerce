import React from "react";
import Imgaboutus from "../../assets/imgAboutUs/imgaboutus.png";
import "../AboutUs/AboutUs.css";

function AboutUs() {
  return (
    <div className="container">
      <div className="labelForm">About Us</div>
      <div className="ab-us">
        <img className="imgaboutus" src={Imgaboutus} alt="About Us" />
      </div>
      <div className="text-play">
        <p>
          PlayMontessori is the result of the passion of six individuals
          committed to Montessori pedagogy from childhood.
        
        <br></br>
        
          In the image that appears at the beginning, you can see us as children
          when we discovered the power of play and imagination.
       
        <br></br>
       
          Montessori pedagogy has inspired us to create this ecommerce platform.
        
            We believe in learning through exploration, autonomy, and respect
            for each child. We offer carefully selected, high-quality Montessori
            toys to promote the comprehensive development of young ones.
         
          <br></br>
          Join us on this educational journey and discover how PlayMontessori
          can enrich your children's childhood while they learn and have fun.
        </p>
        <br></br>
        <h2>PlayMontessori. Grow Learning!</h2>
      </div>
    </div>
  );
}

export default AboutUs;
