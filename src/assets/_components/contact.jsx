import { Formik } from "formik";

const ContactSection = () => {
  return (
    <section className="bg-white py-24" id="contact">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-slate-800">
          Masih Bingung, Konsultasi Dulu Yuk!
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-snug">
          Isi form di bawah ini, tim kami akan menghubungi kamu untuk konsultasi
          gratis dan membantu memilih program yang paling sesuai dengan kebutuhan
          kamu.
        </p>

        {/* Formik Form */}
        <Formik
          initialValues={{ name: "", telp: "", preferenceProgram: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = "Nama lengkap wajib diisi";
            if (!values.telp) errors.telp = "Nomor HP wajib diisi";
            return errors;
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="mt-10 max-w-xl mx-auto text-left bg-slate-50 shadow-md rounded-2xl p-8 "
            >
              {/* Full Name */}
              <div className="mb-5">
                <label htmlFor="name" className="label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tulis nama lengkap kamu"
                  className="input input-lg input-bordered w-full mt-2 text-black"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="mb-5">
                <label htmlFor="telp" className="label">
                  Nomor HP
                </label>
                <input
                  type="text"
                  name="telp"
                  placeholder="Contoh: 0812xxxxxxx"
                  className="input input-lg input-bordered w-full mt-2 text-black"
                  value={values.telp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.telp && touched.telp && (
                  <p className="text-red-500 text-sm mt-1">{errors.telp}</p>
                )}
              </div>

              {/* Preference Program */}
              <div className="mb-5">
                <label htmlFor="preferenceProgram" className="label">
                  Program yang Diminati
                </label>
                <select
                  name="preferenceProgram"
                  className="select select-lg select-bordered w-full mt-2"
                  value={values.preferenceProgram}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">-- Pilih program --</option>
                  <option value="Intensive Course">Kursus Intensif</option>
                  <option value="Speaking Class">Kelas Speaking</option>
                  <option value="TOEFL Preparation">Persiapan TOEFL</option>
                  <option value="IELTS Preparation">Persiapan IELTS</option>
                  <option value="Business English">
                    Bahasa Inggris Bisnis
                  </option>
                </select>
                {errors.preferenceProgram && touched.preferenceProgram && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.preferenceProgram}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-lg btn-primary w-full bg-blue-600 border-0 hover:bg-blue-700"
              >
                Kirim Pendaftaran
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;
