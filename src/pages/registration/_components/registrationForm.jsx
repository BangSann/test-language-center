import { Formik } from "formik";
import { useState } from "react";

const programsItems = [
  {
    value: "",
    label: "-- Pilih program --",
  },
  {
    value: "Intensive Course",
    label: "Kursus Intensif",
  },
  {
    value: "Speaking Class",
    label: "Kelas Speaking",
  },
  {
    value: "TOEFL Preparation",
    label: "Persiapan TOEFL",
  },
  {
    value: "IELTS Preparation",
    label: "Persiapan IELTS",
  },
  {
    value: "Business English",
    label: "Bahasa Inggris Bisnis",
  },
];

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        name: "",
        telp: "",
        email: "",
        program: "",
        jenis_kelamin: "laki-laki",
        kesibukan: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={(values) => {
        var errors = {};
        if (!values.email) errors.email = "Email wajib diisi";
        if (!values.name) errors.name = "Nama wajib diisi";
        if (!values.telp) errors.telp = "No telephone wajib diisi";
        if (!values.program) errors.program = "Program wajib diisi";
        if (!values.jenis_kelamin) errors.jenis_kelamin = "Jenis kelamin wajib diisi";
        if (!values.kesibukan) errors.kesibukan = "Kesibukan wajib diisi";

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
        <form onSubmit={handleSubmit} className="space-y-2 text-start mt-6 px-24">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="label">
              Nama Lengkap
            </label>
            <input
              name="name"
              type="text"
              placeholder="Jhon Doe"
              className={`input input-bordered w-full ${
                errors.name && touched.name && "border-red-700"
              }`}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="jhon123@example.id"
              className={`input input-bordered w-full ${
                errors.email && touched.email && "border-red-700"
              }`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
            <label htmlFor="telp" className="label">
              No Telephone
            </label>
            <input
              name="telp"
              type="telp"
              placeholder="+62xxxxxxxxx"
              className={`input input-bordered w-full ${
                errors.telp && touched.telp && "border-red-700"
              }`}
              value={values.telp}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.telp && touched.telp && (
              <p className="text-red-500 text-sm mt-1">{errors.telp}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
            <select
              name="jenis_kelamin"
              value={values.jenis_kelamin}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`select select-bordered w-full ${
                errors.jenis_kelamin && touched.jenis_kelamin && "border-red-700"
              }`}
            >
              <option value="laki-laki" id="laki-laki">Laki-laki</option>
              <option value="perempuan" id="perempuan">Perempuan</option>
            </select>

            {errors.jenis_kelamin && touched.jenis_kelamin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jenis_kelamin}
              </p>
            )}
          </div>
          </div>

          <div className="space-y-2 grid grid-cols-2 items-start gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="preferenceProgram" className="label">
                Program yang Diminati
              </label>
              <select
                name="program"
                className={`select select-bordered w-full ${
                  errors.program && touched.program && "border-red-700"
                }`}
                value={values.program}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {programsItems.map((program, index) => (
                  <option key={index} value={program.value} id={index}>
                    {program.label}
                  </option>
                ))}
              </select>
              {errors.program && touched.program && (
                <p className="text-red-500 text-sm mt-1">{errors.program}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="kesibukan" className="label">
                Kesibukan
              </label>
              <input
                name="kesibukan"
                type="text"
                placeholder="Menganggur"
                className={`input input-bordered w-full ${
                  errors.kesibukan && touched.kesibukan && "border-red-700"
                }`}
                value={values.kesibukan}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.kesibukan && touched.kesibukan && (
                <p className="text-red-500 text-sm mt-1">{errors.kesibukan}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`btn btn-lg btn-primary w-full ${
              !isLoading ? "bg-blue-600" : "bg-blue-400"
            } border-0 hover:bg-blue-700`}
            disabled={isLoading}
          >
            {isLoading ? "Waiting..." : "Kirim Pendaftaran"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
