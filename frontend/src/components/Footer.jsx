import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* {Left Section} */}
        <div>
          <img className="mb-5 w-60" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            お客さまの健康への不安を解決し、いつまでも若々しく健康でいられるよう、ただ物販だけにこだわらず、一人一人のお客さまの相談に真剣に向き合っております。お客さまのため、それぞれにあった健康へのサポート情報を的確に発信・提供し相談に応じております。
          </p>
        </div>
        {/* {Center Section} */}
        <div>
          <p className="text-xl font-medium mb-5">会社情報</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* {Right Section} */}
        <div>
          <p className="text-xl font-medium mb-5">お問い合わせ</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>電話番号: 123-456-7890</li>
            <li>メール: info@example.com</li>
            <li>住所: 甲府市後屋町４５２</li>
          </ul>
        </div>
      </div>
      {/* {Copyright Text} */}
      <div>
        <p className="py-5 text-sm text-center">
          © 2024 SunRord. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
