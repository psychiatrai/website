"use client";

import { useState } from "react";
import Modal from "@/components/Common/Modal";

const DeleteData: React.FC = () => {
  const [email, setEmail] = useState("");
  const [dataTypes, setDataTypes] = useState<string[]>([]);
  const [reason, setReason] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmUnderstand, setConfirmUnderstand] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

  const handleDataTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setDataTypes((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((type) => type !== value);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setModalMessage("Please enter your email address.");
      setShowModal(true);
      return;
    }

    if (!isValidEmail) {
      setModalMessage("Please enter a valid email address.");
      setShowModal(true);
      return;
    }

    if (dataTypes.length === 0) {
      setModalMessage("Please select at least one type of data to delete.");
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/delete-data-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          dataTypes,
          reason: reason || "No reason provided",
        }),
      });

      if (response.ok) {
        setModalMessage(
          "Your data deletion request has been submitted successfully. We will process your request within 30 days and send you a confirmation email once completed."
        );
        setEmail("");
        setDataTypes([]);
        setReason("");
      } else {
        setModalMessage(
          "There was an error submitting your request. Please try again later or contact our support team."
        );
      }
    } catch (error) {
      setModalMessage(
        "There was an error submitting your request. Please try again later or contact our support team."
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
              Request data deletion from the psychiatrai platform
            </h2>

            <div className="space-y-4 text-base !leading-relaxed text-body-color">
              <div>
                <p className="font-semibold text-black dark:text-white mb-2">
                  Steps:
                </p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Select data types to delete</li>
                  <li>Enter your email</li>
                  <li>Submit request</li>
                </ol>
              </div>

              <div>
                <p className="font-semibold text-black dark:text-white mb-2">
                  Retention:
                </p>
                <p className="mb-2">
                  <strong>Deleted:</strong> Personal info, payments, usage data
                </p>
                <p>
                  <strong>Retained:</strong> Legal compliance records (up to 2 years),
                  anonymized research data (30 days)
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
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your@email.com"
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

              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Data to Delete *
                </label>
                <div className="space-y-2">
                  {[
                    "Personal info",
                    "Payment info",
                    "Usage data",
                    "Profile settings",
                  ].map((dataType, index) => (
                    <label
                      key={index}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={dataType}
                        checked={dataTypes.includes(dataType)}
                        onChange={handleDataTypeChange}
                        className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <span className="text-base text-body-color dark:text-gray-300">
                        {dataType}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-base font-semibold text-black dark:text-white mb-2"
                >
                  Reason (Optional)
                </label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Why do you want to delete this data?"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-[#242B51] dark:text-white text-base"
                />
              </div>

              <div className="bg-red-50 dark:bg-red-900 dark:bg-opacity-20 border border-red-200 dark:border-red-700 rounded-lg p-3">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confirmUnderstand}
                    onChange={(e) => setConfirmUnderstand(e.target.checked)}
                    className="mr-3 mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="text-base text-body-color">
                    I understand this deletion is permanent and cannot be undone
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !email ||
                  !isValidEmail ||
                  dataTypes.length === 0 ||
                  !confirmUnderstand
                }
                className="w-full bg-primary hover:bg-opacity-80 disabled:bg-opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 text-base"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal show={showModal} message={modalMessage} onClose={closeModal} />
    </div>
  );
};

export default DeleteData;
