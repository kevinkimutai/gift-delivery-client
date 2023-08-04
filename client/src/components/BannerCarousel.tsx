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

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import MainBannersLeft from "./MainBannersLeft";
// import MainBannersRight from "./MainBannersRight";

const imagesRight = [
  "https://ke.jumia.is/cms/2023/W18/HP/Sliders/JAS/KE_Maybelline_OfficialStore_0523_SiS.jpg",
  "https://ke.jumia.is/cms/2023/W18/HP/Sliders/JAS/KE_PRK_OfficialStore_0523_SiS.jpg",
  "https://ke.jumia.is/cms/2023/W18/HP/Sliders/JAS/KE_Nivea_OfficialStore_0523_SiS.jpg",
];

// const imagesLeft = [
//   "https://ke.jumia.is/cms/2023/W18/HP/Sliders/JAS/KE_Maybelline_OfficialStore_0523_SiS.jpg",
//   "https://ke.jumia.is/cms/2023/W18/HP/Sliders/JAS/KE_PRK_OfficialStore_0523_SiS.jpg",
//   "https://ke.jumia.is/cms/2023/W18/HP/Sliders/JAS/KE_Nivea_OfficialStore_0523_SiS.jpg",
// ];

const BannerCarousel = () => {
  return (
    <div className="relative flex mx-4 sm:mx-10 my-4 h-fit  overflow-hidden ">
      <MainBannersLeft images={imagesRight} />
      {/* <MainBannersRight images={imagesLeft} /> */}
    </div>
  );
};

export default BannerCarousel;
