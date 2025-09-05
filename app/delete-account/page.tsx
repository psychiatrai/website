"use client";

import { useState } from "react";
import Modal from "@/components/Common/Modal";

const DeleteAccount: React.FC = () => {
  const [url, setUrl] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
    if (value) {
      setIsValidUrl(validateUrl(value));
    } else {
      setIsValidUrl(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setModalMessage("Please enter a valid URL.");
      setShowModal(true);
      return;
    }

    if (!isValidUrl) {
      setModalMessage("Please enter a valid URL format.");
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Since backend endpoint exists, we'll make the API call
      const response = await fetch("/api/delete-account-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        setModalMessage(
          "Your account deletion request has been submitted successfully. We will process your request and contact you within 7 business days."
        );
        setUrl("");
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
    <div className="bg-primary bg-opacity-5 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-center font-bold text-primary mb-8">
          Delete Account Request
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-dark rounded-lg shadow-lg p-6 mb-6">
            <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
              Psychiatrai - Account Deletion
            </h2>

            <div className="space-y-4 text-body-color text-sm">
              <div>
                <p className="font-medium text-black dark:text-white mb-2">
                  Steps:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Enter your contact email below</li>
                  <li>Submit request</li>
                </ol>
              </div>

              <div>
                <p className="font-medium text-black dark:text-white mb-2">
                  Data Handling:
                </p>
                <p>
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

          <div className="bg-white dark:bg-dark rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-black dark:text-white mb-2"
                >
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="url"
                  value={url}
                  onChange={handleUrlChange}
                  placeholder="Enter your registered email"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-[#242B51] dark:text-white ${
                    !isValidUrl && url
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  required
                />
                {!isValidUrl && url && (
                  <p className="mt-1 text-sm text-red-500">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !url || !isValidUrl}
                className="w-full bg-primary hover:bg-opacity-80 disabled:bg-opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
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
