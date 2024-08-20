/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function FormEducation({
  page,
  headings,
  list,
  details,
  setDetails,
  prevStep,
  nextStep,
}) {
  const [focusField, setFocusField] = useState(null);

  // Effect to focus the specific field
  useEffect(() => {
    if (focusField) {
      const element = document.getElementById(focusField);
      if (element) {
        element.focus();
      }
    }
  }, [focusField]);

  const addEducationDetail = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      education: [
        ...details.education,
        {
          collegename: "",
          degreename: "",
          stream: "",
          markstype: "",
          obtainedmarks: "",
          passingyear: "",
        },
      ],
    });
  };
  const validateEducation = () => {
    for (let i = 0; i < details.education.length; i++) {
      const edu = details.education[i];

      if (!edu.collegename.trim()) {
        alert("Please enter your college name.");
        setFocusField(`collegename-${i}`);
        return false;
      }

      if (!edu.degreename.trim()) {
        alert("Please select your degree.");
        setFocusField(`degreename-${i}`);
        return false;
      }

      if (
        edu.degreename !== "B.Sc" &&
        edu.degreename !== "Intermediate" &&
        edu.degreename !== "Matriculation" &&
        !edu.stream.trim()
      ) {
        alert("Please enter your stream/branch.");
        setFocusField(`stream-${i}`);
        return false;
      }

      if (!edu.markstype.trim()) {
        alert("Please select your marks type.");
        setFocusField(`markstype-${i}`);
        return false;
      }

      if (
        (edu.markstype !== "Grade" && !edu.obtainedmarks) ||
        isNaN(edu.obtainedmarks)
      ) {
        alert("Please enter your obtained marks.");
        setFocusField(`obtainedmarks-${i}`);
        return false;
      }

      if (edu.obtainedmarks < 0 || edu.obtainedmarks > 100) {
        alert("Please enter correct obtained marks.");
        setFocusField(`obtainedmarks-${i}`);
        return false;
      }

      if (edu.markstype === "Grade" && !edu.obtainedgrade.trim()) {
        alert("Please select your obtained grade.");
        setFocusField(`obtainedgrade-${i}`);
        return false;
      }

      // if (!edu.passingyear || isNaN(edu.passingyear)) {
      //   alert("Please enter your passing year.");
      //   setFocusField(`passingyear${i}`);
      //   return false;
      // }
    }
    return true;
  };

  const handleNextStep = () => {
    if (!validateEducation()) return;
    nextStep();
  };

  const removeLastEducationDetail = () => {
    if (details.education.length > 1) {
      const newEducation = details.education.slice(0, -1);
      setDetails({ ...details, education: newEducation });
    }
  };

  const handleChange = (index, e) => {
    const newEducation = details.education.map((edu, eduIndex) => {
      if (index === eduIndex) {
        return { ...edu, [e.target.name]: e.target.value };
      }
      return edu;
    });
    setDetails({ ...details, education: newEducation });
  };

  return (
    <>
      <div className="container">
        <div className="p-2">
          <h1 className="px-1 pt-1 pl-1 sm:pl-5 md:pl-10 text-2xl text-left text-gray-800">
            {headings}
          </h1>
          <p className="text-xs p-1 pl-1 italic sm:pl-5 md:pl-10 sm:text-sm md:text-md text-left text-gray-400">
            Get started with the basics: your college names and obtained marks.
          </p>
        </div>
        <div className="flex px-2 pb-3">
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={addEducationDetail}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add More...
            </button>
          </div>
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={removeLastEducationDetail}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
              disabled={details.education.length == 1}
            >
              Delete Last...
            </button>
          </div>
        </div>
        {details.education.map((edu, index) => (
          <div key={index} className="grid py-3">
            <div className="px-1 py-3 sm:px-5 md:px-10 text-left">
              <p className="text-md text-left pb-2 pl-2">
                Education-{index + 1}
              </p>
              <div className="">
                <div className="grid w-full px-2">
                  <label htmlFor={`collegename-${index}`} className="text-sm">
                    Name of Institute/College/School{" "}
                    <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="collegename"
                    id={`collegename-${index}`}
                    value={edu.collegename}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    maxLength={55}
                  />
                </div>
              </div>
              <div className="flex py-5">
                <div className="grid w-full pl-2">
                  <label htmlFor={`degreename-${index}`} className="text-sm">
                    Degree Name{" "}
                    <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <select
                    name="degreename"
                    id={`degreename-${index}`}
                    value={edu.degreename}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 mr-2 bg-white  rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  >
                    <option value="" disabled>
                      -- Please select your degree --
                    </option>
                    <option value="B.tech">B.tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Matriculation">Matriculation</option>
                  </select>
                </div>
                <div
                  className={`${
                    edu.degreename == "B.Sc" ||
                    edu.degreename == "Intermediate" ||
                    edu.degreename == "Matriculation"
                      ? "hidden"
                      : null
                  } grid w-full px-2`}
                >
                  <label htmlFor={`stream-${index}`} className="text-sm">
                    Stream{" "}
                    <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="stream"
                    id={`stream-${index}`}
                    value={edu.stream}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    maxLength={40}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="grid w-full pl-2">
                  <label htmlFor={`marks-${index}`} className="text-sm">
                    Marks Type{" "}
                    <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <select
                    name="markstype"
                    id={`marks-${index}`}
                    value={edu.markstype}
                    onChange={(e) => handleChange(index, e)}
                    className="p-1 bg-white  rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  >
                    <option value="" disabled>
                      -- Select --
                    </option>
                    <option value="Percentage">Percentage</option>
                    <option value="Grade">Grade</option>
                    <option value="CGPA">CGPA</option>
                  </select>
                </div>
                {edu.markstype === "Grade" ? (
                  <div className="grid w-full pl-2">
                    <label
                      htmlFor={`obtainedgrade-${index}`}
                      className="text-sm"
                    >
                      Obtained {edu.markstype}
                      <span className="font-extrabold text-red-500">*</span>
                    </label>
                    <select
                      name="obtainedgrade"
                      id={`obtainedgrade-${index}`}
                      value={edu.obtainedgrade}
                      onChange={(e) => handleChange(index, e)}
                      className="p-1 bg-white  rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    >
                      <option disabled>
                        -- Select your Grade --
                      </option>
                      <option value="E">E</option>
                      <option value="O">O</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                ) : (
                  <div className="grid w-full px-2">
                    <label
                      htmlFor={`obtainedmarks-${index}`}
                      className="text-sm"
                    >
                      Obtained {edu.markstype}
                      <span className="font-extrabold text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="obtainedmarks"
                      id={`obtainedmarks-${index}`}
                      value={edu.obtainedmarks}
                      onChange={(e) => handleChange(index, e)}
                      className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    />
                  </div>
                )}
                <div className="grid w-full px-2">
                  <label htmlFor={`passingyear-${index}`} className="text-sm">
                    Year of Passing
                  </label>
                  <input
                    type="number"
                    name="passingyear"
                    id={`passingyear-${index}`}
                    value={edu.passingyear}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  />
                </div>
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
