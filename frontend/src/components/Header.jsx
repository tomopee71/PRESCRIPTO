import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          信頼できる薬剤師・管理栄養士
          <br />
          健康相談予約サービス
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="group_profiles"
          />
          <p>
            信頼できるスタッフの豊富なリストを閲覧し、
            <br className="hidden sm:block" />
            簡単に予約を行ってください
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm  hover:scale-105 transition-all duration-300  "
        >
          予約する
          <img className="w-3" src={assets.arrow_icon} alt="arrow_right" />
        </a>
      </div>
      {/* Right Side */}

      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="header_image"
        />
      </div>
    </div>
  );
};

export default Header;
