/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function FormTopBar({
  page,
  headings,
  list,
  details,
  setDetails,
  prevStep,
  nextStep,
}) {
  const inputRefs = {
    firstname: useRef(null),
    lastname: useRef(null),
    stream: useRef(null),
    college: useRef(null),
    contact: useRef(null),
    email: useRef(null),
    adj1: useRef(null),
    adj2: useRef(null),
    github: useRef(null),
    linkedin: useRef(null),
  };

  function handleChange(e) {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function handleNextStep() {
    const keys = Object.keys(inputRefs);
    for (const key of keys) {
      if (!details[key] || details[key].trim() === "") {
        inputRefs[key].current.focus();
        return;
      }

      if (key === "contact" && !/^\d{10}$/.test(details.contact)) {
        alert("Please enter a valid 10-digit contact number.");
        inputRefs.contact.current.focus();
        return;
      }

      if (
        key === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)
      ) {
        alert("Please enter a valid email address.");
        inputRefs.email.current.focus();
        return;
      }

      if (
        (key === "github" || key === "linkedin") &&
        !/^https?:\/\/.+$/.test(details[key])
      ) {
        alert(`Please enter a valid URL for ${key}.`);
        inputRefs[key].current.focus();
        return;
      }
    }
    nextStep();
  }

  return (
    <>
      <div className="container">
        <div className="p-2 grid">
          <h1 className="px-1 pl-1 sm:pl-5 md:pl-10 text-xl text-left text-gray-800">
            {headings}
          </h1>
          <p className="text-xs p-1 pl-1 italic sm:pl-5 md:pl-10 sm:text-sm text-left text-gray-400">
            Get started with the basics: your name and contact information.
          </p>
        </div>
        <div className="grid py-5">
          <div className="flex px-1 py-3 sm:px-5 md:px-10 text-left">
            <div className="grid w-full px-2">
              <label htmlFor="firstname" className="text-sm">
                First Name{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.firstname}
                name="firstname"
                id="firstname"
                ref={inputRefs.firstname}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={15}
                title="Max. length 30 character only."
              />
            </div>
            <div className="grid w-full px-2">
              <label htmlFor="lastname" className="text-sm">
                Last Name <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.lastname}
                name="lastname"
                id="lastname"
                ref={inputRefs.lastname}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={15}
                title="Max. length 30 character only."
              />
            </div>
          </div>
          <div className="flex px-1 py-3 sm:px-5 md:px-10 text-left">
            <div className="grid w-full px-2">
              <label htmlFor="college" className="text-sm">
                Recent College{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.college}
                name="college"
                id="college"
                ref={inputRefs.college}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={50}
              />
            </div>
            <div className="grid w-full px-2">
              <label htmlFor="stream" className="text-sm">
                Stream <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.stream}
                name="stream"
                id="stream"
                ref={inputRefs.stream}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={40}
              />
            </div>
          </div>
          <div className="flex px-1 py-3 sm:px-5 md:px-10 text-left">
            <div className="grid w-full px-2">
              <label htmlFor="contact" className="text-sm">
                Contact <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="number"
                onChange={handleChange}
                value={details.contact}
                name="contact"
                id="contact"
                ref={inputRefs.contact}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid w-full px-2">
              <label htmlFor="email" className="text-sm">
                Email <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="email"
                onChange={handleChange}
                value={details.email}
                name="email"
                id="email"
                ref={inputRefs.email}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex px-1 py-3 sm:px-5 md:px-10 text-left">
            <div className="grid w-full px-2">
              <label htmlFor="adj1" className="text-sm">
                Adjective-1{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.adj1}
                name="adj1"
                id="adj1"
                ref={inputRefs.adj1}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={20}
              />
            </div>
            <div className="grid w-full px-2">
              <label htmlFor="adj2" className="text-sm">
                Adjective-2{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.adj2}
                name="adj2"
                id="adj2"
                ref={inputRefs.adj2}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={20}
              />
            </div>
          </div>
          <div className="flex px-1 py-3 sm:px-5 md:px-10 text-left">
            <div className="grid w-full px-2">
              <label htmlFor="github" className="text-sm">
                Github Profile{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.github}
                name="github"
                id="github"
                ref={inputRefs.github}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid w-full px-2">
              <label htmlFor="linkedin" className="text-sm">
                Linkedin Profile{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={details.linkedin}
                name="linkedin"
                id="linkedin"
                ref={inputRefs.linkedin}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 flex justify-evenly">
        <button
          disabled={page === 0}
          onClick={prevStep}
          className="w-36 py-1 bg-blue-500 text-gray-100 rounded hover:bg-blue-800 disabled:bg-gray-400"
        >
          Previous Section
        </button>
        <button
          disabled={page === list.length - 1}
          onClick={handleNextStep}
          className="w-36 py-1 bg-blue-500 text-gray-100 rounded hover:bg-blue-800 disabled:bg-gray-400"
        >
          Next section
        </button>
      </div>
    </>
  );
}
