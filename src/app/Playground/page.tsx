import React from "react";
import ImageTrail from "../../components/ImageTrail";

const Playground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>

      {/* Image Trail */}
      <div className="absolute w-full h-full top-0 left-0">
        <ImageTrail
          key="unique-key"
          items={[
            "/1.jpg",
            "/2.jpg",
            "/3.jpg",
            "/4.jpg",
            "/5.jpg",
            "/6.jpg",
            "/7.jpg",
            "/8.jpg",
          ]}
          variant={3}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-white text-center px-6">
        <h1 className="cinzel text-4xl font-bold mb-4">
          Move your cursor if you love Camellya
        </h1>
      </div>
    </div>
  );
};

export default Playground;
