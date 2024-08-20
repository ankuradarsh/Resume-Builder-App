/* eslint-disable react/prop-types */
import Education from "./Education";
import InternOrTraining from "./InternOrTraining";
import Projects from "./Projects";
import Skills from "./Skills";
import SpokenandWritten from "./SpokenandWritten";
// import Skills from "./Skills";
import Topbar from "./Topbar";

// eslint-disable-next-line no-unused-vars
export default function Resume({ details, page, prevStep }) {
  return (
    <>
      <Topbar details={details} />
      <Education details={details} />
      <InternOrTraining details={details} />
      <Projects details={details} />
      <Skills details={details} />
      <SpokenandWritten details={details} />
      <div className="flex no-print">
        <button
          className="outline-none text-center px-10 py-1 text-white rounded bg-gray-700 hover:bg-gray-500 m-1"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="outline-none text-center px-10 py-1 text-white rounded bg-gray-700 hover:bg-gray-500 m-1"
          onClick={() => {
            window.close();
          }}
        >
          Close
        </button>
        <button
          className="outline-none textcenter px-10 py-1 text-white rounded bg-gray-700 hover:bg-gray-500 m-1"
          onClick={() => {
            window.print();
          }}
        >
          Print this Resume
        </button>
      </div>
    </>
  );
}
