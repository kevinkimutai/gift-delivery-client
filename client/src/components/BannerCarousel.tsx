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
  "https://img.freepik.com/free-psd/online-shopping-concept-banner-template_23-2148559463.jpg?w=2000",
  "https://img.freepik.com/free-psd/e-commerce-banner-template_23-2149006697.jpg?w=2000",
];

const imagesLeft = [
  "https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?w=2000",
  "https://img.freepik.com/premium-psd/online-shopping-store-concept-mobile-phone-with-3d-shopping-cart-shopping-bag-like-icon_106244-2052.jpg",
];

const BannerCarousel = () => {
  return (
    <div className="relative flex mx-4 sm:mx-10 my-4  overflow-hidden ">
      <MainBannersLeft images={imagesRight} />
      <MainBannersRight images={imagesLeft} />
    </div>
  );
};

export default BannerCarousel;
