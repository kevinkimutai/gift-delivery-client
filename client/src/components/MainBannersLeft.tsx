import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type PageProps = { images: string[] };

const MainBannersLeft = ({ images }: PageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  // const variants = {
  //   hidden: { opacity: 0, x: "-100%" },
  //   visible: { opacity: 1, x: "0%" },
  //   exit: { opacity: 0, x: "100%" },
  // };

  return (
    <div className="flex relative w-full h-fit ">
      <motion.img
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt={"carousel"}
        className={"relative h-auto object-contain"}
      />
    </div>
  );
};

export default MainBannersLeft;
