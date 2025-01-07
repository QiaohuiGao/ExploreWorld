import React from 'react';


function StartScreen({ onStart }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-base-200">
      <h1 className="text-2xl font-bold mb-6">ExploreFit</h1>
      <h1 className="text-4xl font-bold mb-6">Unlock Your Potential, Explore the World</h1>
      <h1 className='text-2xl mb-10'>
        <p>
            ExploreFit is an AI-powered platform designed to inspire adventure and connect people with the outdoors. By leveraging advanced computer vision models, it assesses your physical fitness through simple motion detection via your camera.
        </p>
        <p>
            Based on your personalized analysis, ExploreFit recommends classic hiking trails, mountain climbing routes, and outdoor activities that align with your capabilities.
        </p>
        <p>
            Break the barriers of information, embrace new possibilities, and discover a world of adventure—ExploreFit makes exploration accessible to everyone, fostering hope and curiosity to explore beyond limits.
        </p>

      </h1>
      
      <button 
        className="btn btn-secondary"
        onClick={onStart}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;