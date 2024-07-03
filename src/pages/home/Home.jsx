import React,{useEffect} from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories';
import SpecialDishes from './SpecialDishes';
import Testimonials from './Testimonials';
import OurServices from './OurServices';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  // Watson Assistant Chat bot
  useEffect(() => {
    if (location.pathname !== '/signup') {
      // Watson Assistant Chat Options
      window.watsonAssistantChatOptions = {
        integrationID: "9f2c1019-d0b7-4063-80b0-97b28c927b8a", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "1514d293-4040-45e9-9b06-5ea2e7d40c55", // The ID of your service instance.
        onLoad: async (instance) => { await instance.render(); }
      };
      
      // Create and append the Watson Assistant Chat script
      setTimeout(() => {
        const script = document.createElement('script');
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(script);
      });
    }
  }, [location.pathname]);
  
  return (
    
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
      <OurServices/>
      
    </div>
  )
}

export default Home
