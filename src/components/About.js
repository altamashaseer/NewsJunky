import React from 'react'
import '../App.css'
import Lottie from "lottie-react";
import Animation from '../media/newsapp.json';
import Footer from './Footer';
import { useGlobalContext } from './Context';



const About = () => {
  const { Query } = useGlobalContext();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title = `NewsJunky - ${capitalizeFirstLetter(Query)}`
  return (
    <div >
      <div id='about' className='background' ></div>
      <h1 className='text-center t-margin' id='a-heading' >About Us!</h1>
      <div className="a-wrapper">
        <div className="left">
          <Lottie animationData={Animation} loop={true} />
        </div>
        <div className="right rounded">
          <div className="container">
            <p>NewsJunky is a free platform which select latest and best news from multiple national and international sources and sumamarises them to present in short and brief format. All summarised stories contain only headlines and facts, no opinions, to help you to stay informed of the current affairs. </p>

            <p> The search feature allow the easier access to information as per the inputs and interest. <b> NewsJunky uses powerful APIs which allows to search for recent or old articles, way back till 1851! </b></p>

            <p> Our aim to is provide seemless News experience with no ads, fillers. We hope you enjoy our News as much as we enjoy offering them to you.</p>
            <p>For any suggestions or inputs you can reach out to us via below links. We'd love to hear from you! </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
