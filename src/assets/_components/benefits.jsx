import { BsBriefcaseFill } from "react-icons/bs";
import { FaBrain, FaGlobe } from "react-icons/fa";

const benefitsItems = [
  {
    icon: <BsBriefcaseFill size={24} color="#ffff" />,
    name: "Naik Karier",
    description:
      "Jago Inggris bikin kamu punya lebih banyak peluang kerja internasional dan bisa ningkatin karier.",
  },
  {
    icon: <FaGlobe size={24} color="#ffff" />,
    name: "Komunikasi Global",
    description:
      "Bisa makin gampang nyambung dan kerja bareng orang dari seluruh dunia.",
  },
  {
    icon: <FaBrain size={24} color="#ffff" />,
    name: "Manfaat Buat Otak",
    description:
      "Belajar Inggris juga bantu ningkatin skill mikir, problem solving, sampai multitasking.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white relative" id="benefits">
      <div className="absolute top-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          height={500}
          className="rotate-180"
        >
          <path
            fill="#bfe0ff"
            fill-opacity="1"
            d="M0,32L48,74.7C96,117,192,203,288,213.3C384,224,480,160,576,144C672,128,768,160,864,149.3C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container py-24 px-2 mx-auto z-10 relative">
        <h2 className="text-3xl font-semibold ">Ubah Masa Depanmu</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center leading-snug">
          Yuk, cari tahu manfaat besar yang bisa kamu dapetin kalau jago bahasa
          Inggris bareng kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-12">
          {benefitsItems.map((item, index) => (
            <section key={index} className="card bg-white shadow-md">
              <div className="card-body text-center space-y-2">
                <div className="w-full flex justify-center items-center">
                  <span
                    className={`p-4  rounded-full ${
                      index % 2 === 0 ? "bg-blue-600" : "bg-green-600"
                    }`}
                  >
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-md text-slate-600">{item.description}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
