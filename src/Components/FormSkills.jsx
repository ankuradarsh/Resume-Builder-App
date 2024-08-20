/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function FormSkills({
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

  const validateSkills = () => {
    if (!details.skills.os.trim()) {
      alert("please enter operating system that is well known by you.");
      setFocusField("os");
      return false;
    }
    if (!details.skills.language.trim()) {
      alert("please enter programming languages that is well known by you.");
      setFocusField("language");
      return false;
    }
    if (!details.skills.softskills.trim()) {
      alert("please enter your soft skills.");
      setFocusField("softskills");
      return false;
    }
    if (!details.skills.subofinterest.trim()) {
      alert("please enter the subjects in which you're comfortable with.");
      setFocusField("subofinterest");
      return false;
    }
    // const { skills } = details;
    // for (let skillType in skills) {
    //   if (!skills[skillType].trim()) {
    //     if (skillType === "os") skillType = "Operating System";
    //     if (skillType === "language") skillType = "Programming Language";
    //     if (skillType === "cloudtech") skillType = "Cloud Technologies";
    //     if (skillType === "devtools") skillType = "Developer tools";
    //     if (skillType === "libframe") skillType = "Libraries / Framework";
    //     if (skillType === "database") skillType = "Database";
    //     if (skillType === "softskills") skillType = "Soft Skills";
    //     if (skillType === "subofinterest") skillType = "Subject of Interests";
    //     alert(
    //       `Please enter ${skillType
    //         .replace(/([a-z])([A-Z])/g, "$1 $2")
    //         .toLowerCase()} that is well known by you.`
    //     );
    //     setFocusField(skillType);
    //     return false;
    //   }
    // }
    return true;
  };

  const handleNextStep = () => {
    if (!validateSkills()) return;
    setPage(page + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setDetails({
      ...details,
      skills: {
        ...details.skills,
        [name]: value,
      },
    });
  };

  return (
    <>
      <div className="container">
        <div className="p-2">
          <h1 className="px-1 pt-1 pl-1 sm:pl-5 md:pl-10 text-2xl text-left text-gray-800">
            {headings}
          </h1>
          <p className="text-xs p-1 pl-1 italic sm:pl-5 md:pl-10 sm:text-sm md:text-md text-left text-gray-400">
            Get started with the basics: your technical skills, soft skills and known edge cutting technologies.
          </p>
        </div>
        {/* {details.skills.map((lang, index) => ( */}
        <div className="grid py-3">
          <div className="px-1 py-3 sm:px-5 md:px-10 text-left">
            <p className="text-md text-left pb-2 pl-2"></p>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="os" className="text-sm">
                Operating Systems{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="os"
                id="os"
                value={details.skills.os}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="language" className="text-sm">
                Programming Language{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="language"
                id="language"
                value={details.skills.language}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="cloudtech" className="text-sm">
                Cloud Technologies
              </label>
              <input
                type="text"
                name="cloudtech"
                id="cloudtech"
                value={details.skills.cloudtech}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="devtools" className="text-sm">
                Developer Tools
              </label>
              <input
                type="text"
                name="devtools"
                id="devtools"
                value={details.skills.devtools}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="libframe" className="text-sm">
                Libraries / Framework
              </label>
              <input
                type="text"
                name="libframe"
                id="libframe"
                value={details.skills.libframe}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="database" className="text-sm">
                Databases
              </label>
              <input
                type="text"
                name="database"
                id="database"
                value={details.skills.database}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="softskills" className="text-sm">
                Soft Skills{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="softskills"
                id="softskills"
                value={details.skills.softskills}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
            <div className="grid w-full px-2 pb-2 pl-2">
              <label htmlFor="subofinterest" className="text-sm">
                Subject of Interests{" "}
                <span className="font-extrabold text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subofinterest"
                id="subofinterest"
                value={details.skills.subofinterest}
                onChange={handleChange}
                className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
                maxLength={100}
              />
            </div>
          </div>
        </div>
        {/* ))} */}
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
            Next Section
          </button>
        </div>
      </div>
    </>
  );
}
