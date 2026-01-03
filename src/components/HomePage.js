import React from 'react';

const HomePage = () => {
  return (
    <div className="fixed inset-0 bg-transparent overflow-hidden">
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
          <div className="text-center text-white bg-transparent">
            <span className="whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
              Black Pomeranian
            </span>
            <div className="mt-12 flex justify-center gap-6 bg-transparent">
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
