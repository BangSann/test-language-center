import React from "react";
import Navbar from "../../assets/components/navbar";
import Banner from "./_components/banner";
import { Suspense } from "react";

const ProgramsSection = React.lazy(() => import("./_components/programs"));
const BenefitsSection = React.lazy(() => import("./_components/benefits"));
const SuccessStorySection = React.lazy(() =>
  import("./_components/successStory")
);
const OfferSection = React.lazy(() => import("./_components/offer"));
const ContactSection = React.lazy(() => import("./_components/contact"));
const Footer = React.lazy(() => import("../../assets/components/footer"));

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Banner />
      <Suspense fallback={"Program Section is Loading...."}>
        <ProgramsSection />
      </Suspense>
      <Suspense fallback="Benefil section is loading....">
        <BenefitsSection />
      </Suspense>
      <Suspense fallback="Story section is loading....">
        <SuccessStorySection />
      </Suspense>
      <Suspense fallback="Offer section is loading....">
        <OfferSection />
      </Suspense>
      <Suspense fallback="Contact section is loading....">
        <ContactSection />
      </Suspense>
      <Suspense fallback="Footer section is loading....">
        <Footer />
      </Suspense>
    </section>
  );
};

export default HomePage;
