import { BsClockFill } from "react-icons/bs";
import { FaBook, FaCertificate, FaChalkboardTeacher, FaGlobe, FaLightbulb, FaSmile, FaUserGraduate } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";

const programsItems = [
  {
    icon: <FaUserGraduate size={24} color="#ffff" />,
    name: "English Area",
    descripition:
      "Kamu bakal ngobrol pakai English tiap hari bareng teman-teman satu tujuan. Speaking-mu dijamin makin natural!",
  },
  {
    icon: <FaChalkboardTeacher size={24} color="#ffff" />,
    name: "Experienced Teacher",
    descripition:
      "Teacher KILC tuh kompeten dan siap bantu kamu berkembang dari nol sampai mahir!",
  },
  {
    icon: <FaSmile size={24} color="#ffff" />,
    name: "Supporting Fun Events",
    descripition:
      "Ada event seru yang bikin kamu makin pede tampil dan ningkatin skill public speaking!",
  },
  {
    icon: <FaLightbulb size={24} color="#ffff" />,
    name: "Metode Berkualitas",
    descripition:
      "Speaking, grammar, sampai pronunciation—semua dibungkus dalam metode belajar terintegrasi bareng english area.",
  },
  {
    icon: <FaGlobe size={24} color="#ffff" />,
    name: "Berstandar Internasional",
    descripition:
      "Belajar di KILC sesuai CEFR (Common European Framework of Reference for Languages).",
  },
  {
    icon: <FaBook size={24} color="#ffff" />,
    name: "Cocok Buat Pemula",
    descripition:
      "Semua materi disusun dari basic. Kamu akan dibimbing step-by-step sampai paham dan percaya diri ngomong English.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="bg-[#bfe0ff] py-24 px-2" id="program">
      
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold ">
          Kenapa Pilih Language Center?
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center leading-snug">
          Program lengkap dengan metode terbukti plus pengalaman belajar yang
          seru buat jamin kamu sukses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto mt-12">
        {programsItems.map((item, index) => (
          <section key={index} className="card bg-slate-50 shadow-md">
            <div className="card-body text-start space-y-2">
              <div className="w-full flex justify-start items-center">
                <span
                  className={`p-4  rounded-md ${
                    index % 2 === 0 ? "bg-blue-600" : "bg-green-600"
                  }`}
                >
                  {item.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-md text-slate-600">{item.descripition}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
