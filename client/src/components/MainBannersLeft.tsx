import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type PageProps = { images: string[] };

const MainBannersLeft = ({ images }: PageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: any) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const variants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  };
  return (
    <div className="relative w-1/2 h-[15rem]">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          initial={index === 0 ? "visible" : "hidden"}
          animate={index === currentIndex ? "visible" : "hidden"}
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          className={"absolute object-contain"}
        />
      ))}
    </div>
  );
};

export default MainBannersLeft;
