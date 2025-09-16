import Link from "next/link";
import { COMPANY_INFO, SERVICE_INFO, POLICY_INFO } from "@/constants";

const ServicePolicy: React.FC = () => {
  return (
    <div className="bg-green-subtle text-justify min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-center">
          Service Delivery Policy
        </h1>
        <div className="prose max-w-3xl mx-auto text-body-color">
          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            1. Service Overview
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {COMPANY_INFO.name} provides {SERVICE_INFO.name.toLowerCase()}{" "}
            exclusively through online platforms. Our service is designed to
            deliver professional mental health support with personalized
            treatment plans tailored to individual needs and goals.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            2. Service Details
          </h2>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>
              <strong>Service Type:</strong> {SERVICE_INFO.name}
            </li>
            <li>
              <strong>Duration:</strong> {SERVICE_INFO.duration} per session
            </li>
            <li>
              <strong>Price:</strong> {SERVICE_INFO.price} per session
            </li>
            <li>
              <strong>Delivery Method:</strong> {SERVICE_INFO.delivery}
            </li>
            <li>
              <strong>Platform:</strong> Secure video conferencing through our
              web application
            </li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            3. Scheduling and Booking
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Sessions can be scheduled through our online platform. We offer
            flexible scheduling options to accommodate different time zones and
            availability preferences. Booking confirmations will be sent via
            email with session details and access instructions.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            4. Technical Requirements
          </h2>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>Stable internet connection (minimum 1 Mbps upload/download)</li>
            <li>Quiet, private space for confidential sessions</li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            5. Session Timeline
          </h2>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>Sessions begin promptly at the scheduled time</li>
            <li>Late arrivals may result in shortened session duration</li>
            <li>Sessions will conclude at the designated end time</li>
            <li>
              Follow-up materials or assignments may be provided post-session
            </li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            6. Documentation and Records
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Session notes and treatment progress will be maintained in secure,
            encrypted systems. Clients may request copies of their records in
            accordance with privacy regulations. All documentation follows
            professional mental health standards and Pakistani healthcare
            regulations.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            7. Geographic Coverage
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Our services are primarily available to clients within Pakistan.
            International clients may be accommodated on a case-by-case basis,
            subject to licensing and regulatory requirements.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            8. Quality Assurance
          </h2>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>All practitioners are licensed mental health professionals</li>
            <li>Regular supervision and continuing education requirements</li>
            <li>
              Client feedback collection and service improvement processes
            </li>
            <li>Compliance with professional ethical standards</li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            9. Service Interruptions
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            In case of technical difficulties or service interruptions,
            alternative arrangements will be made promptly. Clients will be
            notified of any planned maintenance or system updates that may
            affect service availability.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            10. Emergency Protocols
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            For mental health emergencies, clients should contact local
            emergency services immediately. Our service is not designed for
            crisis intervention. Emergency contact numbers and resources will be
            provided to all clients during onboarding.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            11. Contact Information
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            For service-related questions or support:
          </p>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>
              Email:{" "}
              <a
                href={`mailto:${COMPANY_INFO.email.support}`}
                className="text-primary hover:underline"
              >
                {COMPANY_INFO.email.support}
              </a>
            </li>
            <li>Phone: {COMPANY_INFO.phone}</li>
            <li>Emergency: {COMPANY_INFO.emergencyPhone}</li>
            <li>Address: {COMPANY_INFO.address}</li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            12. Policy Updates
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            This service policy may be updated from time to time to reflect
            changes in our service delivery or regulatory requirements. Any
            changes will be posted on this page with an updated effective date.
            Continued use of our services after policy changes constitutes
            acceptance of the new terms.
          </p>

          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            <strong>Last updated:</strong> {POLICY_INFO.lastUpdated}
          </p>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePolicy;
