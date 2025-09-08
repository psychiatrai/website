"use client";

import { useState } from "react";
import Modal from "@/components/Common/Modal";

const DeleteAccount: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (emailString: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailString);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value) {
      setIsValidEmail(validateEmail(value));
    } else {
      setIsValidEmail(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setModalMessage("Please enter a valid email address.");
      setShowModal(true);
      return;
    }

    if (!isValidEmail) {
      setModalMessage("Please enter a valid email format.");
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/delete-account-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setModalMessage(
          "Your account deletion request has been submitted successfully. We will process your request and contact you within 7 business days."
        );
        setEmail("");
      } else {
        setModalMessage(
          "There was an error submitting your request. Please try again later."
        );
      }
    } catch (error) {
      setModalMessage(
        "There was an error submitting your request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className="bg-green-subtle min-h-screen py-16">
      <div className="container mx-auto px-4">

        <div className="max-w-2xl mx-auto">
          <div className="card-brand p-6 mb-6">
            <h2 className="mb-4 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl">
              Request account deletion from the psychiatrai platform
            </h2>

            <div className="space-y-4 text-base !leading-relaxed text-body-color">
              <div>
                <p className="font-semibold text-black dark:text-white mb-2">
                  Steps:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Enter your contact email below</li>
                  <li>Submit request</li>
                </ol>
              </div>

              <div>
                <p className="font-semibold text-black dark:text-white mb-2">
                  Data Handling:
                </p>
                <p className="mb-2">
                  <strong>Deleted:</strong> Personal info, payment data, app
                  usage
                </p>
                <p>
                  <strong>Retained:</strong> Legal compliance records (up to 7
                  years), anonymized research data (30 days)
                </p>
              </div>
            </div>
          </div>

          <div className="card-brand p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-semibold text-black dark:text-white mb-2"
                >
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your registered email"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-[#242B51] dark:text-white text-base ${
                    !isValidEmail && email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  required
                />
                {!isValidEmail && email && (
                  <p className="mt-1 text-base text-red-500">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !email || !isValidEmail}
                className="btn-primary w-full disabled:bg-opacity-50 disabled:cursor-not-allowed py-4 px-8 text-base"
              >
                {isSubmitting ? "Submitting..." : "Delete My Account"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal show={showModal} message={modalMessage} onClose={closeModal} />
    </div>
  );
};

export default DeleteAccount;
