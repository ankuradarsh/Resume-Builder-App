/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function FormLanguage({
  page,
  setPage,
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

  const addLanguageDetail = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      languages: [
        ...details.languages,
        {
          name: "",
          convenience: "",
        },
      ],
    });
  };

  const removeLastLanguageDetail = () => {
    if (details.languages.length > 1) {
      const language = details.languages.slice(0, -1);
      setDetails({ ...details, languages: language });
    }
  };

  const validateLanguages = () => {
    for (let i = 0; i < details.languages.length; i++) {
      const lang = details.languages[i];
      if (!lang.name.trim()) {
        alert(`Please enter ${i + 1} language.`);
        setFocusField(`name-${i}`);
        return false;
      }
      if (!lang.convenience.trim()) {
        alert(`Please select your ${lang.name} language convenience type.`);
        setFocusField(`convenience-${i}`);
        return false;
      }
    }
    return true;
  };

  const handleNextStep = () => {
    if (!validateLanguages()) return;
    setPage(page + 1);
  };

  const handleChange = (index, e) => {
    const languagesDetails = details.languages.map((lang, langIndex) => {
      if (index === langIndex) {
        return { ...lang, [e.target.name]: e.target.value };
      }
      return lang;
    });
    setDetails({ ...details, languages: languagesDetails });
  };

  const handleSubmit = () => {
    nextStep;
  };
  return (
    <>
      <div className="container">
        <div className="p-2">
          <h1 className="px-1 pt-1 pl-1 sm:pl-5 md:pl-10 text-2xl text-left text-gray-800">
            {headings}
          </h1>
          <p className="text-xs p-1 pl-1 italic sm:pl-5 md:pl-10 sm:text-sm md:text-md text-left text-gray-400">
            Get started with the basics: mentioned your languages in which
            you&apos;re comfortable.
          </p>
        </div>
        <div className="flex px-2 pb-3">
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={addLanguageDetail}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add More...
            </button>
          </div>
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={removeLastLanguageDetail}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
              disabled={details.languages.length === 1}
            >
              Delete Last...
            </button>
          </div>
        </div>
        {details.languages.map((lang, index) => (
          <div key={index} className="grid py-3">
            <div className="px-1 py-3 sm:px-5 md:px-10 text-left">
              <p className="text-md text-left pb-2 pl-2">
                Language details-{index + 1}
              </p>
              <div className="flex">
                <div className="grid w-full px-2">
                  <label htmlFor={`name-${index}`} className="text-sm">
                    Language
                  </label>
                  <input
                    type="text"
                    name="name"
                    id={`name-${index}`}
                    value={lang.name}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    maxLength={20}
                  />
                </div>
                <div className="grid w-full pl-2">
                  <label htmlFor={`convenience-${index}`} className="text-sm">
                    Convenience
                  </label>
                  <select
                    name="convenience"
                    id={`convenience-${index}`}
                    onChange={(e) => handleChange(index, e)}
                    value={details.languages.convenience}
                    className="py-1.5 px-1 bg-white  rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  >
                    <option value={null}>
                      --- Please select your proficiency ---
                    </option>
                    <option value="Native or Bilingual Proficiency">
                      Native or Bilingual Proficiency
                    </option>
                    <option value="Professional Working Proficiency">
                      Professional Working Proficiency
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="pb-5 flex justify-evenly">
          <button
            disabled={page == 0}
            onClick={prevStep}
            className="w-36 py-1 bg-blue-500 text-gray-100 rounded hover:bg-blue-800 disabled:bg-gray-400"
          >
            Previous Section
          </button>
          <button
            // disabled={page === list.length - 1}
            onClick={handleNextStep}
            className="w-36 py-1 bg-blue-500 text-gray-100 rounded hover:bg-blue-800 disabled:bg-gray-400"
          >
            Generate Resume
          </button>
        </div>
      </div>
    </>
  );
}
