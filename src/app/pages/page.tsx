"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Content from "../content/page";
import Playground from "../Playground/page";
import CircularGallery from "../../components/CircularGallery";
import "./page.css";

const MobileMessage = () => {
  return (
    <div className="mobile-message">
      <h1>Sorry, this website can only be accessed on a PC or laptop.</h1>
    </div>
  );
};

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    };

    checkMobile();
  }, []);

  if (isMobile) {
    return <MobileMessage />;
  }

  return (
    <div>
      <div className="w-full h-screen relative">
        {/* Background Image */}
        <Image
          src="/1.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>

      <div className="items-center justify-center text-center">
        <div>
          <h1 className="text-4xl cinzel mt-20">Why Camellya is the BEST!</h1>
        </div>
        <Content />
      </div>

      <div
        style={{ height: "600px", position: "relative" }}
        className="mb-20 cinzel"
      >
        <CircularGallery bend={1} textColor="#000000" borderRadius={0.05} />
      </div>

      <Playground />
    </div>
  );
};

export default Page;
