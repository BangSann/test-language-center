import Navbar from "../../assets/components/navbar";
import Footer from "../../assets/components/footer";
import Banner from "./_components/banner";
import BenefitsSection from "./_components/benefits";
import ContactSection from "./_components/contact";
import OfferSection from "./_components/offer";
import ProgramsSection from "./_components/programs";
import SuccessStorySection from "./_components/successStory";


const HomePage = () => {
  return (
    <section>
      <Navbar />

      {/* hero section */}
      <Banner />
      {/* hero section */}

      {/* programs section */}
      <ProgramsSection />
      {/* programs section */}

      {/* benefits section */}
      <BenefitsSection />
      {/* benefits section */}

      {/* success story */}
      <SuccessStorySection />
      {/* success story */}

      {/* Offer section */}
      <OfferSection />

      {/* contact  */}
      <ContactSection />
      {/* contact  */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </section>
  );
};

export default HomePage;
