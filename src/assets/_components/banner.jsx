import { IoIosPeople } from "react-icons/io";

const Banner = () => {
  return (
    <section className="relative" id="home">
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          height={500}
        >
          <path
            fill="#bfe0ff"
            fill-opacity="1"
            d="M0,32L48,74.7C96,117,192,203,288,213.3C384,224,480,160,576,144C672,128,768,160,864,149.3C960,139,1056,85,1152,69.3C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-2 items-center h-[calc(100vh-69px)]">
        <article className="text-center md:text-left space-y-6 z-10">
          <h1 className="text-5xl font-bold leading-tight">
            Jago bahasa Inggris cuma dalam 3 bulan di Language
            Center!
          </h1>
          <p className="text-gray-600 text-lg">
            Upgrade skill Inggris kamu lewat program intensif kita. Gabung
            bareng ribuan alumni sukses yang udah lancar berkat metode terbukti
            ini!
          </p>

          <div className="flex items-center gap-6 justify-center md:justify-start flex-wrap">
            <button
              className="btn btn-primary bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => {
                window.location = "#contact";
              }}
            >
              Mulai perjalananmu
            </button>

            <div className="flex items-center gap-2">
              <span>
                <IoIosPeople size={24} color="" />
              </span>
              <p>
                <strong>1,000+</strong> siswa yang gabung bulan lalu
              </p>
            </div>
          </div>
        </article>
        <div className="z-10">
          <img
            className="w-full h-auto rounded-md hidden md:block"
            src="/src/assets/images/hero-image.png"
            alt="Enlish master hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
