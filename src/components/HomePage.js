import React from 'react';

const HomePage = () => {
  return (
    <div className="fixed inset-0 z-0 bg-transparent overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
          <div className="text-center text-white bg-transparent">
            <span className="home-title-text">
              Black Pomeranian
            </span>
            <div className="mt-12 flex justify-center gap-6 bg-transparent home-links">
              <a href="/about" className="text-lg sm:text-xl text-white hover:underline">About</a>
              <a href="/project" className="text-lg sm:text-xl text-white hover:underline">Project</a>
              <a href="/performance" className="text-lg sm:text-xl text-white hover:underline">Performance</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
