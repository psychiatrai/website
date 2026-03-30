import Link from "next/link";
import { COMPANY_INFO } from "../../constants";

const supportTopics = [
    "Account access and login issues",
    "Subscription, billing, or payment questions",
    "Technical problems in the app",
    "Appointment, session, or platform guidance",
];

const preparationItems = [
    "The email address linked to your account",
    "A short description of the issue",
    "Your device model and operating system version",
    "Screenshots, if they help explain the problem",
];

const Support: React.FC = () => {
    return (
        <div className="min-h-screen bg-green-subtle py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <div className="card-brand mb-6 p-8">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            psychiatrai support
                        </p>
                        <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
                            App support for psychiatrai
                        </h1>
                        <p className="max-w-3xl text-base font-medium leading-relaxed text-body-color sm:text-lg">
                            If you need help using the psychiatrai app, have a billing
                            question, or want to report a technical issue, contact our support
                            team using the details below.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                        <div className="space-y-6">
                            <div className="card-brand p-8">
                                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                    Contact support
                                </h2>
                                <div className="space-y-4 text-base leading-relaxed text-body-color">
                                    <p>
                                        Email is the best way to reach us for App Store support
                                        requests.
                                    </p>
                                    <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-dark/90">
                                        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-black dark:text-white">
                                            Support email
                                        </p>
                                        <a
                                            href={`mailto:${COMPANY_INFO.email.support}`}
                                            className="text-lg font-semibold text-primary hover:underline"
                                        >
                                            {COMPANY_INFO.email.support}
                                        </a>
                                    </div>
                                    <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-dark/90">
                                        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-black dark:text-white">
                                            Company details
                                        </p>
                                        <p>{COMPANY_INFO.name}</p>
                                        <p>{COMPANY_INFO.address}</p>
                                        <p>{COMPANY_INFO.phone}</p>
                                        <a
                                            href={COMPANY_INFO.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            {COMPANY_INFO.website}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-brand p-8">
                                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                    What we can help with
                                </h2>
                                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-body-color">
                                    {supportTopics.map((topic) => (
                                        <li key={topic}>{topic}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-brand p-8">
                                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                    Before you contact us
                                </h2>
                                <p className="mb-4 text-base leading-relaxed text-body-color">
                                    Including the following details helps us resolve your request
                                    more quickly:
                                </p>
                                <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-body-color">
                                    {preparationItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="card-brand p-8">
                                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                    Important note
                                </h2>
                                <p className="text-base leading-relaxed text-body-color">
                                    psychiatrai support is not an emergency service. If you or
                                    someone else may be in immediate danger or needs urgent mental
                                    health assistance, contact local emergency services or a
                                    crisis helpline right away.
                                </p>
                            </div>

                            <div className="card-brand p-8">
                                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                    Related pages
                                </h2>
                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="/privacy"
                                        className="rounded-lg border border-gray-200 px-4 py-3 text-base font-medium text-body-color transition-colors hover:border-primary hover:text-primary dark:border-gray-700"
                                    >
                                        Privacy Policy
                                    </Link>
                                    <Link
                                        href="/terms-and-conditions"
                                        className="rounded-lg border border-gray-200 px-4 py-3 text-base font-medium text-body-color transition-colors hover:border-primary hover:text-primary dark:border-gray-700"
                                    >
                                        Terms and Conditions
                                    </Link>
                                    <Link
                                        href="/delete-account"
                                        className="rounded-lg border border-gray-200 px-4 py-3 text-base font-medium text-body-color transition-colors hover:border-primary hover:text-primary dark:border-gray-700"
                                    >
                                        Delete Account
                                    </Link>
                                    <Link
                                        href="/delete-data"
                                        className="rounded-lg border border-gray-200 px-4 py-3 text-base font-medium text-body-color transition-colors hover:border-primary hover:text-primary dark:border-gray-700"
                                    >
                                        Delete Data
                                    </Link>
                                </div>
                            </div>

                            <div className="card-brand p-8">
                                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                                    Need help now?
                                </h2>
                                <a
                                    href={`mailto:${COMPANY_INFO.email.support}`}
                                    className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                                >
                                    Email support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
