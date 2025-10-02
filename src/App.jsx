import "./App.css";
import Banner from "./assets/_components/banner";
import BenefitsSection from "./assets/_components/benefits";
import ContactSection from "./assets/_components/contact";
import Footer from "./assets/_components/footer";
import Navbar from "./assets/_components/navbar";
import OfferSection from "./assets/_components/offer";
import ProgramsSection from "./assets/_components/programs";
import SuccessStorySection from "./assets/_components/successStory";
import { SpeedInsights } from '@vercel/speed-insights/next';


function App() {
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

      <SpeedInsights/>
    </section>
  );
}

export default App;
