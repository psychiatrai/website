"use client";

import { useState, useCallback } from "react";
import Modal from "../../components/Common/Modal";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default function JoinPlatformPage() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [cv, setCv] = useState<File | null>(null);
  const [numberOfPractitioners, setNumberOfPractitioners] = useState("");
  const [setup, setSetup] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [education, setEducation] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
    resetFormStates();
  };

  const resetFormStates = () => {
    setEmail("");
    setLocation("");
    setConditions([]);
    setSpecializations([]);
    setCv(null);
    setNumberOfPractitioners("");
    setSetup("");
    setSuggestions("");
    setEducation("");
  };

  const handleSpecializationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;
    setSpecializations((prev) => {
      const updated = checked
        ? [...prev, value]
        : prev.filter((mod) => mod !== value);
      return updated;
    });
  };

  const handleConditionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, checked } = event.target;
    setConditions((prev) => {
      const updated = checked
        ? [...prev, value]
        : prev.filter((cond) => cond !== value);
      return updated;
    });
  };

  const handleNumberOfPractitionersChange = (e) => {
    const value = e.target.value;
    setNumberOfPractitioners(value);
  };

  const updateEmail = useCallback((value: string) => {
    const debouncedSetEmail = debounce((val: string) => setEmail(val), 300);
    debouncedSetEmail(value);
  }, []);

  const updateLocation = useCallback((value: string) => {
    const debouncedSetLocation = debounce(
      (val: string) => setLocation(val),
      300
    );
    debouncedSetLocation(value);
  }, []);

  const updateEducation = useCallback((value: string) => {
    const debouncedSetEducation = debounce(
      (val: string) => setEducation(val),
      300
    );
    debouncedSetEducation(value);
  }, []);

  const updateSuggestions = useCallback((value: string) => {
    const debouncedSetSuggestions = debounce(
      (val: string) => setSuggestions(val),
      300
    );
    debouncedSetSuggestions(value);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setCv(event.target.files[0]);
    }
  };

  const submitWaitlistData = async () => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("role", role);
    formData.append("location", location);
    formData.append("conditions", JSON.stringify(conditions));
    formData.append("specializations", JSON.stringify(specializations));
    if (cv) formData.append("cv", cv);
    formData.append("number_of_practitioners", numberOfPractitioners);
    formData.append("setup", setup);
    formData.append("suggestions", suggestions);
    formData.append("education", education);

    try {
      const response = await fetch(
        "https://api.psychiatr.ai/v1/waitlist/add-to-waitlist",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        setModalMessage(result.message);
      } else {
        setModalMessage(result.detail || "An error occurred");
      }
    } catch (error) {
      console.error("Error submitting waitlist data:", error);
      setModalMessage("An unexpected error occurred.");
    } finally {
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-green-subtle dark:bg-dark">
      <Modal
        show={showModal}
        message={modalMessage}
        onClose={() => setShowModal(false)}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Request to Join the Platform
            </h1>
            <p className="text-base !leading-relaxed text-body-color">
              Join psychiatrai as a practitioner or organization to provide accessible mental health care.
            </p>
          </div>

          {/* Application Form */}
          <div className="card-brand p-8">
            <h2 className="mb-6 text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl">
              Submit Your Application
            </h2>
            <p className="mb-8 text-base !leading-relaxed text-body-color">
              Fill out the form below to express your interest in joining our platform. 
              We&apos;ll review your application and get back to you as soon as possible.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitWaitlistData();
              }}
            >
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 mb-8">
                  <label
                    htmlFor="role"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    I am a
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => handleRoleChange(e.target.value)}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  >
                    <option value="">Select Role</option>
                    <option value="practitioner">Practitioner</option>
                    <option value="organization">Organization</option>
                  </select>
                </div>


                {role === "practitioner" && (
                  <>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => updateEmail(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="country"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Country/Location*
                      </label>
                      <input
                        type="text"
                        id="country"
                        placeholder="Enter your country or location"
                        required
                        onChange={(e) => updateLocation(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="specializations"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        What therapy modalities do you specialize in?
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {/* Therapy Modality Checkboxes */}
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="cognitive_behavioral_therapy"
                            checked={specializations.includes(
                              "cognitive_behavioral_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Cognitive Behavioral Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="dialectical_behavioral_therapy"
                            checked={specializations.includes(
                              "dialectical_behavioral_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Dialectical Behavioral Therapy (DBT)</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="psychodynamic_therapy"
                            checked={specializations.includes(
                              "psychodynamic_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Psychodynamic Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="logotherapy"
                            checked={specializations.includes("logotherapy")}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Logotherapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="internal_family_systems"
                            checked={specializations.includes(
                              "internal_family_systems"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Internal Family Systems (IFS)</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="humanistic_therapy"
                            checked={specializations.includes(
                              "humanistic_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Humanistic Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="existential_therapy"
                            checked={specializations.includes(
                              "existential_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Existential Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="integrative_therapy"
                            checked={specializations.includes(
                              "integrative_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Integrative Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="family_therapy"
                            checked={specializations.includes("family_therapy")}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Family Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="solution_focused_therapy"
                            checked={specializations.includes(
                              "solution_focused_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Solution-Focused Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="narrative_therapy"
                            checked={specializations.includes(
                              "narrative_therapy"
                            )}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Narrative Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="art_therapy"
                            checked={specializations.includes("art_therapy")}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Art Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="music_therapy"
                            checked={specializations.includes("music_therapy")}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Music Therapy</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            value="others"
                            checked={specializations.includes("others")}
                            onChange={handleSpecializationChange}
                            className="h-5 w-5 text-primary focus:ring-primary dark:bg-[#242B51] dark:focus:ring-primary"
                          />
                          <span>Others</span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="qualification"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        What is your highest educational qualification?
                      </label>
                      <input
                        type="text"
                        id="qualification"
                        placeholder="Enter your qualification"
                        onChange={(e) => updateEducation(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="cv"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Please attach your CV (it can help with getting early
                        access)
                      </label>
                      <input
                        type="file"
                        id="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="features"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        What features would you like in the platform?
                      </label>
                      <textarea
                        id="features"
                        placeholder="Enter your suggestions"
                        onChange={(e) => updateSuggestions(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        rows={6}
                      ></textarea>
                    </div>
                  </>
                )}

                {role === "organization" && (
                  <>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        onChange={(e) => updateEmail(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="country"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Country/Location*
                      </label>
                      <input
                        type="text"
                        id="country"
                        placeholder="Enter your country or location"
                        required
                        onChange={(e) => updateLocation(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="number_of_practitioners"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Number of practitioners
                      </label>
                      <select
                        id="number_of_practitioners"
                        value={numberOfPractitioners}
                        onChange={handleNumberOfPractitionersChange}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      >
                        <option value="">Select Number</option>
                        <option value="1-10">1-10</option>
                        <option value="10-25">10-25</option>
                        <option value="25-50">25-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="setup"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        What is your setup like?
                      </label>
                      <select
                        id="setup"
                        value={setup}
                        onChange={(e) => setSetup(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      >
                        <option value="">Select Setup</option>
                        <option value="on_site">On-site</option>
                        <option value="virtual">Virtual</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div className="w-full px-4 mb-8">
                      <label
                        htmlFor="features"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        What features would you like in the platform?
                      </label>
                      <textarea
                        id="features"
                        placeholder="Enter your suggestions"
                        onChange={(e) => updateSuggestions(e.target.value)}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        rows={6}
                      ></textarea>
                    </div>
                  </>
                )}

                <div className="w-full px-4">
                  <button className="btn-primary rounded-md py-4 px-9 text-base font-medium transition duration-300 ease-in-out hover:shadow-signUp">
                    Request to Join
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-base text-body-color">
              Questions? Contact us at{" "}
              <a
                href="mailto:info@psychiatr.ai"
                className="text-primary hover:text-primary-light transition-colors"
              >
                info@psychiatr.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
