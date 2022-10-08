import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/spec_logo.webp";
import {
  faDiscord,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div
      name="Contact Us"
      className="w-full px-4 pt-16 bg-black text-white text-center"
    >
      <h1>Register Now</h1>
      <div className="py-4">
        <input
          className="p-3 px-8 rounded-3xl mr-4 min-w-[400px] text-black"
          type="email"
          placeholder="Enter your email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2 mb-8">
        <input className="mr-2 " type="checkbox" />
        <p>Yes, I agree to receive email updates from SPEC.</p>
      </div>
      
<footer className="p-4 sm:p-6">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="https://specnith.com/" className="flex items-center">
            <picture>
              <source srcSet={logo} type="image/webp" />
              <img className="w-16 md:w-32" src={logo} alt="spec_logo" />
            </picture>
                <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Electrothon</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Address</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="">
                        <a href="https://www.google.com/maps/place/NIT+Hamirpur/@31.6750134,76.5271587,13z/data=!4m8!1m2!2m1!1sNIT+Hamirpur,+Himachal+Pradesh,+India!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.708371!4d76.527356" className="hover:underline ">NIT Hamirpur<br />Hamirpur, Himachal Pradesh, India <br /> 177005</a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="">
                        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="hover:underline"> Code of Conduct</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1P_-npMEWQtOUAWnuJH66aK5h7sCxSgRy/view?usp=sharing"
 className="hover:underline">Sponsorship Brochure</a>
                    </li>
                </ul>
            </div>
         
            <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="">
                        <a href="/" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://specnith.com/" className="hover:underline">SPEC</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/spec.ece/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FontAwesomeIcon
                className="w-5 h-5  fill-current text-gray-500 hover:text-gray-900 dark:hover:text-white"
                icon={faFacebook}
              />
            </a>
            <a href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FontAwesomeIcon
                className="w-5 h-5  fill-current text-gray-500 hover:text-gray-900 dark:hover:text-white"
                icon={faInstagram}
              />
            </a>
            <a href="https://twitter.com/SPEC__NITH" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FontAwesomeIcon
                className="w-5 h-5  fill-current text-gray-500 hover:text-gray-900 dark:hover:text-white"
                icon={faTwitter}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
              rel="noreferrer noopenor"
              target="_blank"
            >
              <FontAwesomeIcon
                className="w-5 h-5  fill-current text-gray-500 hover:text-gray-900 dark:hover:text-white"
                icon={faLinkedin}
              />
              </a>
     
        </div>
    </div>
</footer>

    </div>
  );
}
