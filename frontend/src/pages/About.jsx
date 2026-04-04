import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div>
        <p>
          ABOUT<span>US</span>
        </p>
      </div>

      <div>
        <img src={assets.about_image} alt="" />
        <div>
          <p>
            私たちは、信頼できる医療スタッフを紹介することに情熱を注いでいます。私たちの使命は、患者さんが安心して医療サービスを受けられるようにすることです。私たちのプラットフォームでは、経験豊富な医師や専門家を厳選し、患者さんが簡単に予約できるようにしています。私たちは、患者さんの健康と幸福を最優先に考え、最高の医療体験を提供することを目指しています。
          </p>
          <p>
            私たちのチームは、医療業界での豊富な経験を持つ専門家で構成されています。
          </p>
          <b>私たちのビジョン</b>
          <p>
            私たちは、すべての患者さんが質の高い医療サービスを受けられる世界を目指しています。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
