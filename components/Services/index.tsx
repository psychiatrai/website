import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <>
      <section id="services" className="bg-gray-light py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Mental Health Service"
            paragraph="Professional one-to-one online therapy sessions with licensed mental health professionals, designed to provide accessible and personalized care."
            center
          />

          <div className="flex justify-center">
            <SingleService service={servicesData[0]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;