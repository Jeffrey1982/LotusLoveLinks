import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';
import FooterComponent from '../Footer/FooterComponent';  // Adjust the path according to your folder structure

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">  
      <div className="flex-1"> 
        <div className="hero-section">
          <h1 className="text-6xl text-lightblue mb-0">Lotus Love Links</h1>
          <div className="landing-buttons mt-16">
            <Link to="/login" className="landing-link">
              <button className="landing-button">Login</button>
            </Link>
            <Link to="/register" className="landing-link">
              <button className="landing-button">Register</button>
            </Link>
          </div>
        </div>

        <div className="trusted-banner py-5">
          <div className="statement-column">Review your matches for free</div>
          <div className="statement-column">Most advanced messaging features</div>
          <div className="statement-column">Advanced security for a more enjoyable experience</div>
          <div className="statement-column">Secure Payments through verified partners!</div>
        </div>

        <div className="Lotus Love Links-story-section py-10 flex justify-center">
          <div className="left-section w-1/2 px-8"> 
            <h2 className="font-bold text-5xl mb-8">Why Choose Lotus Love Links?</h2>
            <div className="story-content">
              <h3 className="text-4xl font-bold mb-4">In the vast expanse of Asia:</h3>
              <p className="mb-8">Where ancient traditions meet modern aspirations, a unique love story unfolds. It begins at Lotus Love Links, where every heart in search of love is not just another profile, but an individual narrative waiting to be written.</p>
              
              <h3 className="text-4xl font-bold mb-4">Experience the Art of Matchmaking:</h3>
              <p className="mb-8">At Lotus Love Links, we believe that finding love is an intimate journey, not a numbers game. That's why our platform focuses deeply on the nuances of personal experiences. We don't just match profiles; we connect hearts, understanding the subtle threads of passion, interests, and dreams that weave people together.</p>
            </div>
          </div>
          
          <div className="right-section w-1/2 px-8">  
            <h3 className="text-4xl font-bold mb-4">Communicate with Ease:</h3>
            <p className="mb-8">Finding your match is just the beginning of your love story. And nothing should stand between those first exhilarating conversations. With our free, user-friendly messaging platform, every "hello" becomes an opportunity, every chat a cherished memory. Dive into conversations without any barriers, because when words flow, love grows.</p>
            
            <h3 className="text-4xl font-bold mb-4">Verified & Trustworthy:</h3>
            <p className="mb-8">We understand that the digital age, while bringing people closer, can sometimes harbor shadows. At Lotus Love Links, trust is paramount. Our dedicated moderators ensure that every profile is genuine, every person real. Because love should be built on trust, not uncertainties.</p>

            <h3 className="text-4xl font-bold mb-4">Bridging Hearts Across Asia:</h3>
            <p className="mb-8">From the bustling streets of Tokyo to the serene beaches of Bali, from the Himalayan foothills to the skyscrapers of Singapore – Lotus Love Links is not just a dating platform, but a mission to unite hearts across Asia. We envision a world where boundaries blur, where love knows no borders, and where every Lotus blooms with passion.</p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
};

export default LandingPage;
