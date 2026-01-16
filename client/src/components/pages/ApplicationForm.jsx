import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Upload,
  User,
  Mail,
  Phone,
  FileText,
  Briefcase,
  ChevronLeft,
  CheckCircle,
} from "lucide-react";

const ApplicationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job || {};
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    coverLetter: "",
    source: "",
    workAuthorization: "",
    veteranStatus: "",
    disability: "",
    gender: "",
    ethnicity: "",
    pronouns: "",
    resume: null,
    coverLetterFile: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (files[0]) {
        const file = files[0];
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setErrors((prev) => ({
            ...prev,
            [name]: "File size must be less than 5MB",
          }));
          return;
        }

        // Validate file type for resume (PDF, DOC, DOCX)
        if (
          name === "resume" &&
          ![
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(file.type)
        ) {
          setErrors((prev) => ({
            ...prev,
            [name]: "Please upload PDF, DOC, or DOCX files only",
          }));
          return;
        }

        setFormData((prev) => ({ ...prev, [name]: file }));
        setErrors((prev) => ({ ...prev, [name]: "" }));

        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(progress);
          if (progress >= 100) {
            clearInterval(interval);
          }
        }, 100);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.workAuthorization)
      newErrors.workAuthorization = "This field is required";
    if (!formData.veteranStatus)
      newErrors.veteranStatus = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after success
      setTimeout(() => {
        navigate("/careers", {
          state: {
            message: "Application submitted successfully!",
            jobTitle: job.title,
          },
        });
      }, 3000);
    }, 2000);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying for the{" "}
            <span className="font-semibold">{job.title}</span> position. We'll
            review your application and get back to you soon.
          </p>
          <div className="animate-pulse">
            <p className="text-sm text-gray-500">
              Redirecting to careers page...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Job Details
          </button>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apply for {job.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {job.type}
            </span>
            <span>•</span>
            <span>{job.location}</span>
            <span>•</span>
            <span>
              Job ID: {job.id || "JR" + Math.floor(Math.random() * 1000000)}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {/* Personal Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-blue-600" />
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="doe@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Professional Links (Optional)
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="https://github.com/username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio Website
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Upload className="w-6 h-6 text-blue-600" />
                Resume & Documents
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                    <span className="text-gray-500 text-sm ml-2">
                      (PDF, DOC, DOCX, max 5MB)
                    </span>
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                      errors.resume
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 hover:border-blue-400"
                    }`}
                  >
                    <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <span className="text-blue-600 font-medium">
                        Click to upload
                      </span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      {formData.resume
                        ? formData.resume.name
                        : "No file selected"}
                    </p>
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter (Optional)
                    <span className="text-gray-500 text-sm ml-2">
                      (PDF, DOC, DOCX, max 5MB)
                    </span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-all">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <input
                      type="file"
                      name="coverLetterFile"
                      onChange={handleChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="cover-letter-upload"
                    />
                    <label
                      htmlFor="cover-letter-upload"
                      className="cursor-pointer"
                    >
                      <span className="text-blue-600 font-medium">
                        Click to upload
                      </span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      {formData.coverLetterFile
                        ? formData.coverLetterFile.name
                        : "No file selected"}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Tell us why you're interested in this position, or any additional information you'd like to share..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Equal Opportunity */}
            <div className="mb-10 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Equal Opportunity
              </h3>
              <p className="text-gray-600 mb-4">
                We are an equal opportunity employer and value diversity at our
                company. We do not discriminate on the basis of race, religion,
                color, national origin, gender, sexual orientation, age, marital
                status, veteran status, or disability status.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Are you legally authorized to work in the country where this
                    job is located? *
                  </label>
                  <div className="flex gap-6">
                    {["Yes", "No"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="workAuthorization"
                          value={option}
                          checked={formData.workAuthorization === option}
                          onChange={handleChange}
                          className="text-blue-600"
                        />
                        <span className="text-gray-800">{option}</span>{" "}
                        {/* Added text-gray-800 here */}
                      </label>
                    ))}
                  </div>
                  {errors.workAuthorization && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.workAuthorization}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Are you a veteran of the U.S. Armed Forces? *
                  </label>
                  <div className="flex gap-6">
                    {["Yes", "No", "Prefer not to say"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="veteranStatus"
                          value={option}
                          checked={formData.veteranStatus === option}
                          onChange={handleChange}
                          className="text-blue-600"
                        />
                        <span className="text-gray-800">{option}</span>{" "}
                        {/* Added text-gray-800 here */}
                      </label>
                    ))}
                  </div>
                  {errors.veteranStatus && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.veteranStatus}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t">
              <p className="text-sm text-gray-600">* Required fields</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your application will be reviewed by our hiring team within 5-7
            business days. We respect your privacy and will not share your
            information with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
