// import React from "react";
// import HomeBanners from "./HomeBanners";

// const BannerCarousel = () => {
//   return (
//     // <section>
//     //   <HomeBanners src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/bd635985118755.5de533b5bd401.jpg" />
//       // </section>

//   );
// };

// export default BannerCarousel;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MainBannersLeft from "./MainBannersLeft";
import MainBannersRight from "./MainBannersRight";

const imagesRight = [
  "https://cdn.shopify.com/s/files/1/0572/4779/3329/files/Schwarzkopf_1024x1024.jpg?v=1627898740",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/412ae427807905.5636b14bb42e9.jpg",
];

const imagesLeft = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53c66b106594355.5f9329c00868b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/dcd645103685569.5f523c7f18e35.jpg",
];

const BannerCarousel = () => {
  return (
    <div className="flex mx-4 sm:mx-10  my-2  w-full ">
      <MainBannersLeft images={imagesRight} />
      <MainBannersRight images={imagesLeft} />
    </div>
  );
};

export default BannerCarousel;
