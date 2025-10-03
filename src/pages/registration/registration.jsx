import { BsMortarboardFill } from "react-icons/bs";
import RegistrationForm from "./_components/registrationForm";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <section>
      {/* header */}
      <section className="bg-blue-600 sticky top-0 z-50">
        <nav className="navbar">
          <div className="navbar-start">
            <Link
              className="flex items-center gap-2 font-bold text-xl"
              to={"/"}
            >
              <span className="p-2 bg-white rounded-md">
                <BsMortarboardFill className="text-blue-600" />
              </span>
              <p className="tracking-tight text-white">Language Center</p>
            </Link>
          </div>
        </nav>
      </section>
      {/* header */}

      {/* content */}
      <section className="mx-auto grid grid-cols-2 items-center justify-center h-[calc(100vh-64px)]">
        <div className="flex items-center justify-center bg-blue-600 h-full">
          <img
            src="/images/registration-image.jpg"
            alt="registration image"
            className="rounded-md p-4"
          />
        </div>
        <div className="bg-blue-600 h-full">
          <div className="bg-white w-full h-full flex flex-col items-center justify-center rounded-s-xl">
            <h1 className="text-2xl font-bold">Lets Start Your Journey</h1>
            <p>Isi form dibawah ini untuk melakukak pendaftaran.</p>
            {/* regis form */}
            <RegistrationForm />
          </div>
        </div>
      </section>
      {/* content */}
    </section>
  );
};

export default RegistrationPage;
