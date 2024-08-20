/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function FormProject({
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

  const addProjectsDetail = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      projects: [
        ...details.projects,
        {
          title: "",
          livelink: "",
          from: "",
          to: "",
          onelinedescription: "",
          objective: "",
          techused: "",
        },
      ],
    });
  };

  const validateProjectDetails = () => {
    for (let i = 0; i < details.projects.length; i++) {
      const proj = details.projects[i];
      if (!proj.title.trim()) {
        alert("Please enter the title of the projects.");
        setFocusField(`title-${i}`);
        return false;
      }
      if (
        proj.livelink.trim() !== "" &&
        !/^https?:\/\/.+$/.test(proj.livelink.trim())
      ) {
        alert("Please enter a valid URL.");
        setFocusField(`livelink-${i}`);
        return false;
      }

      if (!proj.from.trim()) {
        alert("Please enter the project start date.");
        setFocusField(`from-${i}`);
        return false;
      }
      if (!proj.till.trim()) {
        alert("Please enter the project end date.");
        setFocusField(`till-${i}`);
        return false;
      }
      if (!proj.onelinedescription.trim()) {
        alert(
          `Please enter short description for project - ${proj.title.trim()}`
        );
        setFocusField(`onelinedescription-${i}`);
        return false;
      }
    }
    return true;
  };

  const removeLastProjectDetail = () => {
    if (details.projects.length > 1) {
      const project = details.projects.slice(0, -1);
      setDetails({ ...details, projects: project });
    }
  };

  const handleNextStep = () => {
    if (!validateProjectDetails()) return;
    nextStep();
  };

  const handleChange = (index, e) => {
    const projectDetails = details.projects.map((proj, projIndex) => {
      if (index === projIndex) {
        return { ...proj, [e.target.name]: e.target.value };
      }
      console.log(proj);
      return proj;
    });
    setDetails({ ...details, projects: projectDetails });
  };

  return (
    <>
      <div className="container">
        <div className="p-2">
          <h1 className="px-1 pt-1 pl-1 sm:pl-5 md:pl-10 text-2xl text-left text-gray-800">
            {headings}
          </h1>
          <p className="text-xs p-1 pl-1 italic sm:pl-5 md:pl-10 sm:text-sm md:text-md text-left text-gray-400">
            Get started with the basics: your project details and used tech. stacks.
          </p>
        </div>
        <div className="flex px-2 pb-3">
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={addProjectsDetail}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add More...
            </button>
          </div>
          <div className="px-1 py-2 sm:px-5 md:px-10 text-left">
            <button
              onClick={removeLastProjectDetail}
              className="py-2 px-4 mt-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
              disabled={details.projects.length == 1}
            >
              Delete Last...
            </button>
          </div>
        </div>
        {details.projects.map((proj, index) => (
          <div key={index} className="grid py-3">
            <div className="px-1 py-3 sm:px-5 md:px-10 text-left">
              <p className="text-md text-left pb-2 pl-2">
                Project details-{index + 1}
              </p>
              <div className="flex pb-4 pt-2">
                <div className="grid w-full px-2">
                  <label htmlFor={`title-${index}`} className="text-sm">
                    Title of Project{" "}
                    <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id={`title-${index}`}
                    value={proj.title}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    maxLength={40}
                    title="Max 40 characters only."
                  />
                </div>
                <div className="grid w-full px-2">
                  <label htmlFor={`livelink-${index}`} className="text-sm">
                    Live Link
                  </label>
                  <input
                    type="text"
                    name="livelink"
                    id={`livelink-${index}`}
                    value={proj.livelink}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    title="Provide your live project URL."
                  />
                </div>
              </div>
              <div className="flex py-2">
                <div className="grid w-full px-2">
                  <label htmlFor={`from-${index}`} className="text-sm">
                    From <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <input
                    type="month"
                    name="from"
                    id={`from-${index}`}
                    value={proj.from}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid w-full px-2">
                  <label htmlFor={`to-${index}`} className="text-sm">
                    Till <span className="font-extrabold text-red-500">*</span>
                  </label>
                  <input
                    type="month"
                    name="till"
                    id={`till-${index}`}
                    value={proj.till}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="grid w-full p-2">
                <label
                  htmlFor={`onelinedescription-${index}`}
                  className="text-sm"
                >
                  Short description for project{" "}
                  <span className="font-extrabold text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="onelinedescription"
                  id={`onelinedescription-${index}`}
                  value={proj.onelinedescription}
                  onChange={(e) => handleChange(index, e)}
                  className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                  maxLength={110}
                  title="Max. 110 characters only."
                />
              </div>
              <div className="flex">
                <div className="grid w-full px-2">
                  <label htmlFor={`objective-${index}`} className="text-sm">
                    objective
                  </label>
                  <textarea
                    name="objective"
                    id={`objective-${index}`}
                    value={proj.objective}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    maxLength={200}
                    title="Max. 200 characters allowed."
                  />
                </div>
                <div className="grid w-full px-2">
                  <label htmlFor={`techused-${index}`} className="text-sm">
                    Used Technologies
                  </label>
                  <textarea
                    name="techused"
                    id={`techused-${index}`}
                    value={proj.techused}
                    onChange={(e) => handleChange(index, e)}
                    className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                    maxLength={200}
                    title="Max. 200 characters allowed."
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
