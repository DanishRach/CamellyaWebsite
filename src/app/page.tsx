"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./page.css";

const MobileMessage = () => {
  return (
    <div className="mobile-message">
      <h1>Sorry, this website can only be accessed on a PC or laptop.</h1>
    </div>
  );
};

const LandingPage = () => {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(navigator.userAgent));
    };

    checkMobile();
  }, []);

  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(Flip, CustomEase);

    CustomEase.create(
      "hop",
      "M0, 0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1"
    );

    CustomEase.create(
      "hop2",
      "M0, 0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561,1 1,1"
    );

    const splitH2 = new SplitType(".site-info h2", {
      types: "lines",
    });

    splitH2.lines?.forEach((line: HTMLElement) => {
      const text = line.textContent;
      const wrapper = document.createElement("div");
      wrapper.className = "line";
      const span = document.createElement("span");
      span.textContent = text;
      wrapper.appendChild(span);
      line.parentNode?.replaceChild(wrapper, line);
    });

    const mainTl = gsap.timeline();
    const revealerTl = gsap.timeline();
    const scaleTl = gsap.timeline();

    revealerTl
      .to(".r-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "hop",
      })
      .to(
        ".r-2",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "hop",
        },
        "<"
      );

    scaleTl.to(".img:first-child", {
      scale: 1,
      duration: 2,
      ease: "power4.inOut",
    });

    const images = document.querySelectorAll(".img:not(:first-child)");

    images.forEach((img) => {
      scaleTl.to(
        img,
        {
          opacity: 1,
          scale: 1,
          duration: 1.25,
          ease: "power3.out",
        },
        ">-0.5"
      );
    });

    mainTl
      .add(revealerTl)
      .add(scaleTl, "-=1.25")
      .add(() => {
        document
          .querySelectorAll(".img:not(.main)")
          .forEach((img) => img.remove());

        const state = Flip.getState(".main");

        const imagesContainer = document.querySelector(".images");
        imagesContainer?.classList.add("stacked-container");

        document.querySelectorAll(".main").forEach((img, i) => {
          img.classList.add("stacked");
          (img as HTMLElement).style.order = i.toString();
          gsap.set(".img.stacked", {
            clearProps: "transform, top, left",
          });
        });

        Flip.from(state, {
          duration: 2,
          ease: "hop",
          absolute: true,
          stagger: {
            amount: -0.3,
          },
        });
      })
      .to(".word h1, .nav-item p, .line p, .site-info h2, .line span", {
        y: 0,
        duration: 3,
        ease: "hop2",
        stagger: 0.1,
        delay: 1.25,
      })
      .to(".cover-img", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 3,
        ease: "hop",
        delay: -4,
      });
  }, [isMobile]);

  const handleImageClick = (e: React.MouseEvent) => {
    if (isMobile) return;
    e.preventDefault();
    if (isAnimating) return;

    setIsAnimating(true);
    const clickedImage = e.currentTarget as HTMLElement;

    gsap.to(clickedImage, {
      duration: 1.5,
      ease: "power4.inOut",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 1000,
      onComplete: () => {
        router.push("/pages");
      },
    });
  };

  if (isMobile) {
    return <MobileMessage />;
  }

  return (
    <div className="container">
      <div className="revealers">
        <div className="revealer r-1"></div>
        <div className="revealer r-2"></div>
      </div>

      <div className="images">
        <div className="img">
          <img src="/1.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/2.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/3.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/4.jpg" alt="" />
        </div>
        <div className="img">
          <img src="/5.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/6.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/7.jpg" alt="" />
        </div>
        <div className="img main">
          <img src="/8.jpg" alt="" />
        </div>
      </div>

      <div className="hero-content">
        <div className="site-logo">
          <div className="word">
            <h1 className="cinzel">Camellya</h1>
          </div>
        </div>

        <Link href="/content" passHref>
          <div
            className="cover-img"
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
          >
            <img src="/1.jpg" alt="" />
          </div>
        </Link>

        <div className="site-info">
          <div className="row">
            <div className="col">
              <div className="line">
                <p className="cinzel">Featured Views</p>
              </div>
            </div>
            <div className="col">
              <h2 className="cinzel">
              &quot;Hi! I&apos;m Camellya, a Bloom Bearer of the Black Shores. Happy to
                see you again! My beloved... seed of fate.&quot;
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="address">
                <div className="line">
                  <p className="button">
                    Click the image on the right to continue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;