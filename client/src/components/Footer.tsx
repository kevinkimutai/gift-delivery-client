import React from "react";
import Image from "../assets/img/gift-logo.png";

function Footer() {
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 bg-white">
        <div
          aria-label="footer"
          className="focus:outline-none border-t border-b border-gray-200 dark:border-gray-700 py-16"
        >
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        Components
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        Templates
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        href="/"
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        Free components
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        Changelog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        href="/"
                        className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="/"
                      >
                        Terms of service
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-6">
                    <a aria-label="Github" href="/">
                      <div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand">
                        <img
                          className="dark:hidden"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1.svg"
                          alt="Github"
                        />
                        <img
                          className="dark:block hidden"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg1dark.svg"
                          alt="Github"
                        />
                      </div>
                    </a>
                    <a aria-label="Twitter" href="/" className="ml-4">
                      <div>
                        <img
                          className="dark:hidden"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2.svg"
                          alt="Twitter"
                        />
                        <img
                          className="dark:block hidden"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_1-svg2dark.svg"
                          alt="Twitter"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="relative w-36">
                    <a
                      className="focus:outline-none"
                      aria-label="home link"
                      href="/"
                    >
                      <img
                        className="dark:hidden w-1/2 object-contain"
                        src={Image}
                        alt="tuk logo"
                      />
                      <img
                        className="dark:block hidden w-1/2 object-contain"
                        src={Image}
                        alt="tuk logo"
                      />
                    </a>
                    <p
                      //tabIndex="0"
                      className="focus:outline-none mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50"
                    >
                      2023 Giftr App.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
