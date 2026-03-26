import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Doctors() {
  const { speciality } = useParams();

  // console.log(speciality)

  const [filterDoc, setFilterDoc] = useState([]);

  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-gray-600">予約可能店舗の選択</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "koufu"
                ? navigate("/doctors")
                : navigate("/doctors/koufu ")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "koufu" ? "bg-indigo-100 text-black" : ""}`}
          >
            甲府市エリア
          </p>
          <p
            onClick={() =>
              speciality === "minami"
                ? navigate("/doctors")
                : navigate("/doctors/minami ")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "minami" ? "bg-indigo-100 text-black" : ""}`}
          >
            南アルプス市エリア
          </p>
          <p
            onClick={() =>
              speciality === "fujiyoshida"
                ? navigate("/doctors")
                : navigate("/doctors/fujiyoshida ")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "fujiyoshida" ? "bg-indigo-100 text-black" : ""}`}
          >
            富士吉田市エリア
          </p>
          <p
            onClick={() =>
              speciality === "hokuto"
                ? navigate("/doctors")
                : navigate("/doctors/hokuto ")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "hokuto" ? "bg-indigo-100 text-black" : ""}`}
          >
            北杜市エリア
          </p>
          <p
            onClick={() =>
              speciality === "suwa"
                ? navigate("/doctors")
                : navigate("/doctors/suwa ")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "suwa" ? "bg-indigo-100 text-black" : ""}`}
          >
            諏訪市・岡谷市エリア
          </p>
          <p
            onClick={() =>
              speciality === "nansin"
                ? navigate("/doctors")
                : navigate("/doctors/nansin ")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "nansin" ? "bg-indigo-100 text-black" : ""}`}
          >
            南信エリア
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img
                className="w-full h-50 object-contain bg-green-50"
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
      </div>
    </div>
  );
}

export default Doctors;
