"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import styles from "./Content.module.css";

const servicesData = [
  {
    title: "Pretty",
    description:
      "Elegance and beauty radiate effortlessly, captivating hearts with a graceful charm.",
    videoSrc: "/1.mp4",
  },
  {
    title: "Cute",
    description:
      "Adorable and endearing, bringing smiles with an irresistible charm and warmth.",
    videoSrc: "/2.mp4",
  },
  {
    title: "Funny",
    description:
      "A burst of joy and laughter, turning every moment into a delightful experience.",
    videoSrc: "/3.mp4",
  },
  {
    title: "Attractive",
    description:
      "A magnetic presence that draws attention with confidence, style, and allure.",
    videoSrc: "/4.mp4",
  },
];

const Content = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const services = document.querySelectorAll(`.${styles.service}`);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target as HTMLElement;
          const imgContainer = service.querySelector(
            `.${styles.imgContainer}`
          ) as HTMLElement;

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const newWidth = 30 + 70 * progress;
              gsap.to(imgContainer, {
                width: `${newWidth}%`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const newHeight = 150 + 300 * progress;
              gsap.to(imgContainer, {
                height: `${newHeight}px`,
                duration: 0.1,
                ease: "none",
              });
            },
          });

          observer.unobserve(service);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    services.forEach((service) => observer.observe(service));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cinzel">
      <div className={styles.container}>
        <section className={styles.services}>
          <div className={styles.servicesHeader}>
            <div className="col"></div>
            <div className="col"></div>
          </div>

          {servicesData.map((service, index) => (
            <div key={index} className={styles.service}>
              <div className={styles.serviceInfo}>
                <h1 className={styles.title}>{service.title}</h1>
                <p className={styles.paragraph}>{service.description}</p>
              </div>
              <div className={styles.serviceImg}>
                <div className={styles.imgContainer}>
                  <video className={styles.image} muted loop autoPlay>
                    <source src={service.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Content;
