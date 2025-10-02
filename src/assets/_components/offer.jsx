const offerList = [
  {
    course: "English Master",
    price: 6900000,
    discount: "16% off",
    original_price: 7147619,
    duration: "4 Bulan",
    categories: ["Intensive Course", "Speaking Class"],
    features: [
      "Asrama English Area",
      "Tutor Pendamping Asrama",
      "Assessment Test",
      "Qualified & Experienced Teacher",
      "4x main class dan 2x camp class",
      "Modul Pembelajaran",
      "Trip ke Bali",
      "Gratis: Jaket + Batik + Kaos + E-Sertifikat ber-SK Diknas",
    ],
  },
  {
    course: "English Master Plus",
    price: 9900000,
    discount: "16% off",
    original_price: 10147619,
    duration: "6 Bulan",
    categories: ["Intensive Course", "Speaking Class", "TOEFL Preparation"],
    features: [
      "Asrama English Area",
      "Tutor Pendamping Asrama",
      "Assessment Test",
      "Qualified & Experienced Teacher",
      "4x main class dan 2x camp class",
      "Modul Pembelajaran",
      "Trip ke Bali",
      "Real Test TOEFL ITP",
      "Gratis: Jaket + Batik + Kaos + E-Sertifikat ber-SK Diknas",
    ],
  },
];

const OfferSection = () => {
  return (
    <section className="bg-[#bfe0ff] text-white py-24" id="offer">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold">Siap Jago Bahasa Inggris?</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center leading-snug">
          Ikutan batch berikutnya yang mulai sebentar lagi. Daftar sekarang dan
          ambil langkah pertama menuju masa depan yang lebih cerah.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-12">
          {offerList.map((offer, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-6 flex-1 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-4">{offer.course}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  Rp {offer.price.toLocaleString("id-ID")}
                </span>
                <span className="text-sm text-red-500 ml-2">
                  {offer.discount}
                </span>
                <div className="text-sm text-gray-500 line-through">
                  Rp {offer.original_price.toLocaleString("id-ID")}
                </div>
                <div className="text-sm text-gray-500">
                  Durasi: {offer.duration}
                </div>
              </div>
              <div className="mb-4">
                {offer.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <ul className="mb-6 space-y-2 flex-1">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Daftar Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
