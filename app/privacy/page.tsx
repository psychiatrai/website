import Link from "next/link";

const Privacy: React.FC = () => {
  return (
    <div className="bg-primary bg-opacity-5 text-justify min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-bold text-primary mb-8">
          Privacy Policy
        </h1>
        <div className="prose max-w-3xl mx-auto text-body-color">
          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            1. Introduction
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            At Psychiatrai, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your personal information when you use our app and web-based mental
            health services platform in Pakistan.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            2. Information We Collect
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            We may collect the following types of information:
          </p>
          <ul className="list-disc mt-2 pl-6">
            <li>
              <strong>Personal Information</strong>: Name, email address, phone
              number, and other details you provide during account registration
              or service use.
            </li>
            <li>
              <strong>Health Information</strong>: Information shared with
              Providers during consultations, such as medical history or mental
              health concerns.
            </li>
            <li>
              <strong>Usage Data</strong>: Information about how you interact
              with our platform, including IP address, browser type, and pages
              visited.
            </li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            3. How We Use Your Information
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            We use your information to:
          </p>
          <ul className="list-disc mt-2 pl-6">
            <li>Provide and improve our mental health services.</li>
            <li>Facilitate communication with Providers.</li>
            <li>Process payments and manage accounts.</li>
            <li>Comply with legal obligations under Pakistani law.</li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            4. Sharing Your Information
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            We may share your information with:
          </p>
          <ul className="list-disc mt-2 pl-6">
            <li>Licensed Providers to deliver services.</li>
            <li>
              Third-party service providers for payment processing or analytics,
              who are bound by confidentiality agreements.
            </li>
            <li>
              Authorities, if required by law or to protect the safety of users.
            </li>
          </ul>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            5. Data Security
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            We implement industry-standard security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="mb-4 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            6. Your Rights
          </h2>
          <p className="mb-2 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            You have the right to:
          </p>
          <ul className="list-disc  pl-6">
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt out of non-essential communications.</li>
            <li>Request information about how your data is used.</li>
          </ul>

          <h2 className="mb-4 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            7. Cookies and Tracking
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            We use cookies to enhance your experience. You can manage cookie
            preferences through your browser settings.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            8. Changes to This Policy
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            We may update this Privacy Policy from time to time. Significant
            changes will be communicated via email or platform updates.
            Continued use of Psychiatrai after changes signifies acceptance.
          </p>

          <h2 className="mb-5 text-xl mt-4 font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            9. Contact Information
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            For questions about this Privacy Policy, contact us at:
          </p>
          <ul className="list-disc pl-6">
            <li>
              Email:{" "}
              <a
                href="mailto:info@psychiatr.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@psychiatr.ai
              </a>
            </li>
            <li>Phone: +923028448040</li>
          </ul>

          <p className="mt-6">
            For more details on our terms of use, see our{" "}
            <Link
              href="/terms-and-conditions"
              className="text-primary hover:underline"
            >
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
