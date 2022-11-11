import React from 'react'
import '../App.css'
import Lottie from "lottie-react";
import Animation from '../media/105060-news.json';



const About = () => {
  return (
    <div className='a-container'>
      <div id='about' className='background ' />
      <h1 className='text-center'>About Us!</h1>
      <div className="a-wrapper">
        <div className="left">
          <Lottie animationData={Animation} loop={true} />
        </div>
        <div className="right">
          <div className="container">
            <p>NewsJunky is a free platform which select latest and best news from multiple national and international sources and sumamarises them to present in short and brief format. All summarised stories contain only headlines and facts, no opinions, to help you to stay informed of the current affairs. </p>

            <p> The search feature allow the easier access to information as per the inputs and interest. <b> NewsJunky uses powerful APIs which allows to search for recent or old articles, way back till 1851! </b></p>

            <p> Our aim to is provide seemless News experince with no ads, fillers. We hope you enjoy our News as much as we enjoy offering them to you. For any suggestions or inputs you can reach out to us via below details. We'd love to hear from you! </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
