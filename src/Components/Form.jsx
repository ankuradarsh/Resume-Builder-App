/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import FormEducation from "./FormEducation";
import FormTopBar from "./FormTopBar";
import FormInternship from "./FormInternship";
import FormProject from "./FormProject";
import FormLanguage from "./FormLanguage";
import ViewDetails from "./Resume";
import Resume from "./Resume";
import FormSkills from "./FormSkills";
export default function Form({ details, setDetails }) {
  const [page, setPage] = useState(0);

  const nextStep = () => {
    setPage(page + 1);
  };

  const prevStep = () => {
    setPage(page - 1);
    // console.log(details);
  };

  const list = [
    "Personal Details",
    "Education",
    "Internships/Trainings",
    "Projects",
    "Technical Skills and Interests",
    "Spoken and Written",
  ];

  const pageDisplay = (page) => {
    switch (page) {
      case 0:
        return (
          <FormTopBar
            page={page}
            details={details}
            setDetails={setDetails}
            list={list}
            prevStep={prevStep}
            nextStep={nextStep}
            headings={list[page]}
          />
        );
      case 1:
        return (
          <FormEducation
            page={page}
            details={details}
            setDetails={setDetails}
            list={list}
            prevStep={prevStep}
            nextStep={nextStep}
            headings={list[page]}
          />
        );
      case 2:
        return (
          <FormInternship
            page={page}
            details={details}
            setDetails={setDetails}
            list={list}
            prevStep={prevStep}
            nextStep={nextStep}
            headings={list[page]}
          />
        );
      case 3:
        return (
          <FormProject
            page={page}
            details={details}
            setDetails={setDetails}
            list={list}
            prevStep={prevStep}
            nextStep={nextStep}
            headings={list[page]}
          />
        );
      case 4:
        return (
          <FormSkills
            page={page}
            setPage={setPage}
            details={details}
            setDetails={setDetails}
            list={list}
            prevStep={prevStep}
            headings={list[page]}
          />
        );
      case 5:
        return (
          <FormLanguage
            page={page}
            setPage={setPage}
            details={details}
            setDetails={setDetails}
            list={list}
            prevStep={prevStep}
            headings={list[page]}
          />
        );
      case 6:
        return <Resume details={details} page={page} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <>
      {page != 6 ? (
        <div className="text-center font-sans">
          <div className="text-left pt-4 sm:shadow-md sm:shadow-blue-200 sm:rounded-xl border-t-4 border-blue-500">
            <span className="text-3xl p-2.5 sm:px-6 md:px-11">Resume Builder</span>
            <div className="body pt-1">{pageDisplay(page)}</div>
          </div>
        </div>
      ) : (
        <div className="for-resume pl-2">{pageDisplay(page)}</div>
      )}
    </>
  );
}
