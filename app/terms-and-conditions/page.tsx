import Link from "next/link";
import { COMPANY_INFO, POLICY_INFO } from "@/constants";

const Terms: React.FC = () => {
  return (
    <div className="bg-green-subtle text-justify min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-center">
          Terms and Conditions
        </h1>
        <div className="prose max-w-3xl mx-auto text-body-color">
          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            1. Introduction
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Welcome to {COMPANY_INFO.name}, an app and web-based mental health services
            platform specifically intended to offer mental health support,
            consultation, and related resources to users in Pakistan. By
            accessing or using {COMPANY_INFO.name}, you agree to be bound by these Terms
            and Conditions.
          </p>

          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            2. Acceptance of Terms
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Your use of {COMPANY_INFO.name} signifies your acceptance and agreement to
            these Terms. If you do not agree with these Terms, you must
            discontinue your use of our platform immediately.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            3. Eligibility
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            {COMPANY_INFO.name} is available exclusively to individuals aged 18 years or
            older residing in Pakistan. By using {COMPANY_INFO.name}, you confirm that
            you meet these eligibility requirements.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            4. Account Registration
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            To access certain features, you may be required to create an
            account. You agree to provide accurate, complete, and current
            registration information, and to maintain and update this
            information promptly.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            5. Nature of Services
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            psychiatrai provides access to licensed mental health professionals
            &ldquo;Providers&rdquo; who deliver therapeutic, counseling, and
            mental health support services remotely through secure digital
            means.
          </p>
          <p className="font-semibold text-justify text-lg ">
            Note: psychiatrai is not suitable for emergencies or crisis
            intervention. If you are experiencing a medical emergency,
            psychiatric crisis, or immediate safety issue, contact emergency
            services (15 or 1122 in Pakistan) or seek immediate medical
            attention.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            6. User Responsibilities and Conduct
          </h2>
          <p className="mb-2 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            You agree to:
          </p>
          <ul className="list-disc   pl-6">
            <li>Use psychiatrai solely for lawful purposes.</li>
            <li>
              Respect the rights, privacy, and dignity of other users and
              Providers.
            </li>
            <li>
              Avoid impersonating others or misrepresenting your identity or
              qualifications.
            </li>
            <li>
              Not share your account credentials or allow unauthorized persons
              to access psychiatrai using your credentials.
            </li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            7. Intellectual Property Rights
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            All content provided through psychiatrai, including software,
            designs, logos, text, graphics, and other proprietary materials,
            remain the exclusive property of psychiatrai and its licensors. Such
            content is protected under Pakistani and international intellectual
            property laws.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            8. User-Generated Content
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            You retain ownership of any content you submit or post on
            psychiatrai. However, by submitting content, you grant psychiatrai a
            non-exclusive, royalty-free, transferable license to use, store,
            display, modify, distribute, and create derivative works from your
            content within the context of providing mental health services and
            improving the psychiatrai platform.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            9. Confidentiality and Privacy
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            psychiatrai maintains strict confidentiality standards consistent
            with Pakistani healthcare regulations. Your personal and sensitive
            information is securely stored and disclosed only as outlined in our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            10. Payment and Fees
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            Services on psychiatrai may be subject to fees. All payments must be
            made through approved payment methods. Fees are non-refundable
            except as expressly provided in psychiatrai&apos;s refund policies
            or required by applicable Pakistani law.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            11. Limitations of Liability
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            psychiatrai, its Providers, and affiliates shall not be liable for
            indirect, incidental, special, consequential, or punitive damages
            arising from:
          </p>
          <ul className="list-disc mt-2  pl-6">
            <li>Your use or inability to use psychiatrai.</li>
            <li>Unauthorized access to your personal information.</li>
            <li>
              Any interruption or discontinuance of psychiatrai&apos;s services.
            </li>
          </ul>
          <p className="text-justify mt-2 text-lg">
            Our total liability shall not exceed the fees paid by you for the
            specific services provided through psychiatrai.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            12. Disclaimer of Warranty
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            psychiatrai services are provided on an &quot;as-is&quot; basis
            without warranty of any kind, express or implied. psychiatrai
            explicitly disclaims warranties of fitness for a particular purpose
            and non-infringement.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            13. Termination of Services
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            psychiatrai reserves the right to terminate or suspend your account
            at our discretion, without prior notice, particularly if you breach
            these Terms, pose risk to other users, or misuse the platform.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            14. Governing Law and Jurisdiction
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            These Terms and Conditions are governed by and construed in
            accordance with the laws of the Islamic Republic of Pakistan. Any
            dispute relating to these terms will be subject to the exclusive
            jurisdiction of the courts located in Pakistan.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            15. Modifications to Terms
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            psychiatrai reserves the right to modify or update these Terms at
            any time. You will be notified of significant changes via email or
            through updates on our platform. Continued use of psychiatrai after
            notification signifies acceptance of the new Terms.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            16. Contact Information
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            For any queries related to these Terms, contact us at:
          </p>
          <ul className="list-disc mt-2 pl-6 mb-4">
            <li>
              Email:{" "}
              <a
                href={`mailto:${COMPANY_INFO.email.legal}`}
                className="text-primary hover:underline"
              >
                {COMPANY_INFO.email.legal}
              </a>
            </li>
            <li>Phone: {COMPANY_INFO.phone}</li>
            <li>Address: {COMPANY_INFO.address}</li>
          </ul>

          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            <strong>Last updated:</strong> {POLICY_INFO.lastUpdated}
          </p>

          <div className="mt-8 p-6 bg-white dark:bg-dark/90 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Account Management
            </h3>
            <p className="text-base text-body-color mb-4">
              You can manage your account and data at any time. For privacy-related requests, see our{" "}
              <Link
                href="/privacy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/delete-data"
                className="inline-flex items-center justify-center px-4 py-2 bg-secondary hover:bg-secondary-light text-white font-medium rounded-lg transition-colors duration-200"
              >
                Request Data Deletion
              </Link>
              <Link
                href="/delete-account"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-colors duration-200"
              >
                Request Account Deletion
              </Link>
            </div>
          </div>

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

export default Terms;
