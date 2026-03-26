import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-2xl font-medium">予約すべきトップスタッフ</h1>
      <p className="sm:w-1/3 text-center text-sm">
        信頼できるスタッフを紹介します。
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img
              className="w-full h-68 object-contain bg-green-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>予約可能</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.store}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        className="bg-green-100 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        もっと見る
      </button>
    </div>
  );
};

export default TopDoctors;
