import Link from "next/link";

const Privacy: React.FC = () => {
  return (
    <div className="bg-green-subtle text-justify min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-center">
          Privacy Policy
        </h1>
        <div className="prose max-w-3xl mx-auto text-body-color">
          <h2 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            1. Introduction
          </h2>
          <p className="mb-4 pr-[10px] text-base font-medium leading-relaxed text-body-color">
            At psychiatrai, we are committed to protecting your privacy. This
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
            Continued use of psychiatrai after changes signifies acceptance.
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
                href="mailto:compliance@psychiatr.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                compliance@psychiatr.ai
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

          <div className="mt-8 p-6 bg-white dark:bg-dark/90 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
              Data Management
            </h3>
            <p className="text-base text-body-color mb-4">
              You have the right to manage your personal data. You can request to delete specific data or your entire account.
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
        </div>
      </div>
    </div>
  );
};

export default Privacy;
