import { BsInstagram, BsMortarboardFill, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <section className="bg-slate-900 pt-12 text-white">
      <footer className="container mx-auto px-4">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700 text-start">
          {/* Brand */}
          <aside>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 bg-blue-600 rounded-md inline-block">
                <BsMortarboardFill size={24} color="#ffffff" />
              </span>
              <h3 className="text-xl font-bold text-white">English Master</h3>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Ubah masa depanmu bareng English Master. <br />
              Perjalanan kamu buat jago bahasa Inggris mulai dari sini.
            </p>

            <div className="flex items-center gap-3 mt-5 text-lg">
              <a
                href="#"
                className="bg-slate-600 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="bg-slate-600 p-2 rounded-full hover:bg-pink-500 transition-colors"
              >
                <BsInstagram />
              </a>
              <a
                href="#"
                className="bg-slate-600 p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <BsYoutube />
              </a>
            </div>
          </aside>

          {/* Contact Info */}
          <nav>
            <h6 className="footer-title mb-3 text-white font-semibold">
              Kontak Kami
            </h6>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <IoLocationSharp size={24} className="text-blue-600 mt-1" />
                <p>Jl. Brawijaya No.123, Pare, Kediri, Jawa Timur</p>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone size={18} className="text-blue-600" />
                <a
                  href="tel:+6281234567890"
                  className="hover:text-white transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IoMail size={18} className="text-blue-600" />
                <a
                  href="mailto:info@englishmaster.com"
                  className="hover:text-white transition-colors"
                >
                  info@englishmaster.com
                </a>
              </li>
            </ul>
          </nav>

          {/* Programs */}
          <nav>
            <h6 className="footer-title mb-3 text-white font-semibold">
              Program Kami
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Kursus Intensif
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Kelas Speaking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Persiapan TOEFL
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Persiapan IELTS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Inggris Bisnis
                </a>
              </li>
            </ul>
          </nav>

          {/* Resource */}
          <nav>
            <h6 className="footer-title mb-3 text-white font-semibold">
              Informasi
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Portal Siswa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Akomodasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cerita Sukses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Lokasi Kampus
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bagian bawah */}
        <aside className="text-center py-5 text-sm">
          <p>
            © {new Date().getFullYear()} English Master. Hak cipta dilindungi.
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
