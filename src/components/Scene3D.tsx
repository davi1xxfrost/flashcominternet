
import React from 'react';

const Scene3D = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating 3D Cubes */}
      <div className="absolute top-20 left-10 w-16 h-16 cube-3d">
        <div className="w-full h-full bg-gradient-to-r from-brand-orange to-orange-600 rounded-lg shadow-lg opacity-60"></div>
      </div>
      
      <div className="absolute top-40 right-20 w-12 h-12 cube-3d" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg opacity-50"></div>
      </div>

      <div className="absolute bottom-40 left-20 w-20 h-20 cube-3d" style={{ animationDelay: '4s' }}>
        <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-lg opacity-40"></div>
      </div>

      {/* Floating 3D Spheres */}
      <div className="absolute top-32 right-10 w-24 h-24 sphere-3d opacity-30"></div>
      
      <div className="absolute bottom-20 right-32 w-16 h-16 sphere-3d opacity-25" style={{ animationDelay: '3s' }}></div>

      {/* 3D Geometric Shapes */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
        <div className="floating-3d">
          <div className="w-8 h-32 bg-gradient-to-b from-brand-orange to-transparent rotate-45 opacity-30"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-5">
        <div className="floating-3d" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-40 bg-gradient-to-t from-orange-500 to-transparent -rotate-12 opacity-25"></div>
        </div>
      </div>

      {/* Interactive 3D Grid */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute inset-0 transform rotate-12 scale-150">
          <div className="grid grid-cols-20 grid-rows-20 gap-1 opacity-10">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-brand-orange rounded-full floating-3d"
                style={{
                  animationDelay: `${i * 0.01}s`,
                  animationDuration: `${4 + (i % 3)}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scene3D;
