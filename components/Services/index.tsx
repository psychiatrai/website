import SectionTitle from "../Common/SectionTitle";
import { SERVICE_INFO } from "@/constants";
import { Service } from "@/types/service";
import SingleService from "./SingleService";

const servicesData: Service[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
        <path d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
        <circle cx="20" cy="20" r="4"/>
      </svg>
    ),
    title: SERVICE_INFO.name,
    paragraph: SERVICE_INFO.description,
    price: SERVICE_INFO.price,
    duration: SERVICE_INFO.duration,
    delivery: SERVICE_INFO.delivery
  }
];

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