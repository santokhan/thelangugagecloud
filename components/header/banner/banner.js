/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/Banner.module.css";
import DarkButtonLink from "../../global/darkbuttonlink";
import YellowButtonLink from "../../global/yellowbuttonlink";

export default function Banner(props) {
  return (
    <div className={styles.banner}>
      <div className="flex flex-col items-center py-8 xl:py-[14rem] bg-[rgba(0,0,0,0.2)]">
        <div className="flex flex-col items-center">
          <div>
            {/* <img
              className="hidden xl:block"
              src="https://www.thelanguagecloud-edu.com/image/banner/banner-logo.svg"
              alt="banner-logo"
            /> */}
          </div>
          <div className="uppercase font-semibold text-4xl xl:text-[5rem] text-center text-white py-4 xl:py-10">
            Welcome to
          </div>
          <div className="uppercase text-xl xl:text-[2.75rem] text-center text-white xl:py-8">
            the language cloud
          </div>
          <div className="flex justify-center gap-2 xl:gap-3 py-6 xl:py-10 md:text-xl">
            <a
              href="courses"
              className="focus:outline-none text-gray-900 bg-[#FCAF3B] hover:bg-orange-400 focus:ring-4 focus:ring-orange-100 font-medium rounded-xl px-4 xl:px-8 py-2.5 xl:py-4 shadow-2xl"
            >
              Start Courses
            </a>
            <a
              href="contact"
              className="text-white capitalize bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl px-4 xl:px-8 py-2.5 xl:py-4 shadow-2xl"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
