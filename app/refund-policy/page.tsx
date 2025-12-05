import Link from "next/link";
import { COMPANY_INFO, POLICY_INFO } from "../../constants";

const RefundPolicy: React.FC = () => {
  return (
    <div className="bg-green-subtle text-justify min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-center">
          Return & Refund Policy
        </h1>
        <div className="prose max-w-3xl mx-auto text-body-color">
          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            1. Overview
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            At {COMPANY_INFO.name}, we are committed to providing high-quality mental
            health services. This Return & Refund Policy outlines the terms and
            conditions for refunds and cancellations of our digital mental
            health services in Pakistan.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            2. Service Cancellation Policy
          </h2>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>
              Cancellations made 24 hours or more before the scheduled session:
              Full refund
            </li>
            <li>
              Cancellations made less than 24 hours before the session: 50%
              refund
            </li>
            <li>No-shows without prior notice: No refund</li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            3. Refund Process
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            To request a refund:
          </p>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>
              Contact our support team at{" "}
              <a
                href={`mailto:${COMPANY_INFO.email.refunds}`}
                className="text-primary hover:underline"
              >
                {COMPANY_INFO.email.refunds}
              </a>
            </li>
            <li>Provide your appoint details (practitioner name, date, time) and reason for refund</li>
            <li>Refunds will be processed within 5-7 business days</li>
            <li>Refunds will be credited to the original payment method</li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            4. Exceptional Circumstances
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            In cases of medical emergencies, technical failures on our platform,
            or other exceptional circumstances beyond your control, we may
            provide full refunds at our discretion. Please contact our support
            team with relevant documentation.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            5. Practitioner Cancellations
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            If a session is cancelled by our mental health practitioner:
          </p>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>
              Alternative appointment slots will be offered at no additional
              cost or full refund as per client discretion
            </li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            6. Dispute Resolution
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            If you are not satisfied with our refund decision, you may escalate
            the matter to our senior management team. We are committed to
            resolving all disputes fairly and in accordance with Pakistani
            consumer protection laws.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            7. Contact Information
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            For refund requests or questions about this policy:
          </p>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>
              Email:{" "}
              <a
                href={`mailto:${COMPANY_INFO.email.refunds}`}
                className="text-primary hover:underline"
              >
                {COMPANY_INFO.email.refunds}
              </a>
            </li>
            <li>Phone: {COMPANY_INFO.phone}</li>
            <li>Address: {COMPANY_INFO.address}</li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            8. Policy Updates
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            This refund policy may be updated from time to time. Any changes
            will be posted on this page with an updated effective date.
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

export default RefundPolicy;
