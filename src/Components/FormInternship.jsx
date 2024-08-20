/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

export default function FormInternship({
  page,
  headings,
  list,
  details,
  setDetails,
  prevStep,
  nextStep,
}) {
  const [focusField, setFocusField] = useState(null);

  useEffect(() => {
    if (focusField) {
      const element = document.getElementById(focusField);
      if (element) {
        element.focus();
      }
    }
  }, [focusField]);
  const addInternship = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      internship: [
        ...details.internship,
        { name: "", link: "", description: "" },
      ],
    });
  };

  const deleteInternship = () => {
    if (details.internship.length > 1) {
      const newInternship = details.internship.slice(0, -1);
      setDetails({ ...details, internship: newInternship });
    }
  };

  const validInternship = () => {
    for (let i = 0; i < details.internship.length; i++) {
      const intern = details.internship[i];
      if (!intern.name.trim()) {
        alert("Please enter the title of internship");
        setFocusField(`name-${i}`);
        return false;
      }
      if (!intern.description.trim()) {
        alert("Please enter a short description");
        setFocusField(`description-${i}`);
        return false;
      }
      if (
        intern.link.trim() !== "" &&
        !/^https?:\/\/.+$/.test(intern.link.trim())
      ) {
        alert("Please enter a valid URL.");
        setFocusField(`link-${i}`);
        return false;
      }
    }
    return true;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!validInternship()) return;
    nextStep();
  };

  const handleChange = (index, e) => {
    const newInternship = details.internship.map((intern, internIndex) => {
      if (index === internIndex) {
        return { ...intern, [e.target.name]: e.target.value };
      }
      return intern;
    });
    setDetails({ ...details, internship: newInternship });
  };

  return (
    <>
      <div className="container">
        <div className="p-2">
          <h1 className="px-1 pt-1 pl-1 sm:pl-5 md:pl-10 text-2xl text-left text-gray-800">
            {headings}
          </h1>
          <p className="text-xs p-1 pl-1 italic sm:pl-5 md:pl-10 sm:text-sm md:text-md text-left text-gray-400">
            Get started with the basics: input your internship or trainings.
          </p>
        </div>
        <div className="flex px-2 pb-3">
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={addInternship}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add More...
            </button>
          </div>
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={deleteInternship}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
              disabled={details.internship.length == 1}
            >
              Delete Last...
            </button>
          </div>
        </div>
        {details.internship.map((intern, index) => (
          <div key={index} className="grid py-2">
            <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
              <p className="text-md text-left pb-2 pl-2">
                Internship/Training detail-{index + 1}
              </p>
              <div className="flex py-3">
                <div className="grid w-full px-2">
                  <label htmlFor={`name-${index}`} className="text-sm">
                    Name of Internship/Training{" "}
                    <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id={`name-${index}`}
                    value={intern.name}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    maxLength={50}
                  />
                </div>
                <div className="grid w-full px-2">
                  <label htmlFor={`link-${index}`} className="text-sm">
                    Certificate Link
                  </label>
                  <input
                    type="text"
                    name="link"
                    id={`link-${index}`}
                    value={intern.link}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid py-1 px-2">
                <label htmlFor={`description-${index}`} className="text-sm">
                  About this internship/training{" "}
                  <span className="font-extrabold text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  id={`description-${index}`}
                  value={intern.description}
                  onChange={(e) => handleChange(index, e)}
                  className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  maxLength={150}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-5 flex justify-evenly">
        <button
          disabled={page == 0}
          onClick={prevStep}
          className="w-36 py-1 bg-blue-500 text-gray-100 rounded hover:bg-blue-800 disabled:bg-gray-400"
        >
          Previous Section
        </button>
        <button
          disabled={page == list.length - 1}
          onClick={handleNextStep}
          className="w-36 py-1 bg-blue-500 text-gray-100 rounded hover:bg-blue-800 disabled:bg-gray-400"
        >
          Next Section
        </button>
      </div>
    </>
  );
}
