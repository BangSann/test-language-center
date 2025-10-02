import { FaStar } from "react-icons/fa";

const successPeople = [
  {
    name: "John Doe",
    carrer: "Software Engineer",
    story:
      "Belajar Inggris di Language Center bener-bener ngubah karier aku. Program intensif sama pengajar yang ahli bikin aku bisa lancar cuma dalam 3 bulan. Highly recommended buat siapa aja yang pengen upgrade skill Inggrisnya!",
  },
  {
    name: "Jane Smith",
    carrer: "Marketing Specialist",
    story:
      "Pengalaman belajar di Language Center keren banget! Komunitasnya suportif dan cara belajarnya praktis, jadi gampang nyambung. Sekarang aku jauh lebih pede pake bahasa Inggris dan siap hadapi tantangan baru.",
  },
  {
    name: "Alice Johnson",
    carrer: "Business Analyst",
    story:
      "Thanks to Language Center, kemampuan komunikasi aku makin mantap dan peluang karier baru kebuka. Fokus belajarnya ke hal-hal nyata dan pemahaman budaya juga bikin aku makin berkembang. Bersyukur banget bisa dapet pengalaman ini.",
  },
];

const SuccessStorySection = () => {
  function getInitials(name) {
    if (!name) return "";

    // Split name by spaces and filter out empty parts
    const parts = name.trim().split(/\s+/);

    // Take the first letter of the first and last word
    let initials = parts[0][0].toUpperCase();
    if (parts.length > 1) {
      initials += parts[parts.length - 1][0].toUpperCase();
    }

    return initials;
  }

  return (
    <section className="bg-slate-50 py-24 px-2" id="testimonials">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold text-center">Cerita Sukses</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center leading-snug">
          Dengerin langsung cerita dari alumni yang hidupnya berubah bareng
          Language Center
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-12">
          {successPeople.map((person, index) => (
            <section key={index} className="card bg-white shadow-md">
              <div className="card-body text-start space-y-2">
                <div className="flex items-center gap-4 ">
                  <span className="w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center">
                    <p className="text-white font-bold text-lg text-center">
                      {getInitials(person.name)}
                    </p>
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{person.name}</h3>
                    <h4 className="text-md font-medium text-slate-600">
                      {person.carrer}
                    </h4>
                  </div>
                </div>
                <p className="text-md text-slate-600">"{person.story}"</p>

                <div className="flex items-center gap-1">
                  {
                    /* Add a 5-star rating system */
                    Array.from({ length: 5 }).map((_, starIndex) => (
                      <FaStar key={starIndex} size={16} color="#fbbf24" />
                    ))
                  }
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStorySection;
