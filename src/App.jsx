/* eslint-disable no-unused-vars */
import { useState } from "react";
import Topbar from "./Components/Topbar";
import Education from "./Components/Education";
import { studentdetails, StudentContactInfo } from "./Data/StudentDetails";
import degree from "../src/Data/Education";
import Projects from "./Components/Projects";
import projects from "./Data/Projects";
import InternOrTraining from "./Components/InternOrTraining";
import trainorinter from "./Data/InternOrTraining";
import Skills from "./Components/Skills";
import skills from "./Data/Skills";
import SpokenandWritten from "./Components/SpokenandWritten";
import Form from "./Components/Form";

function App() {
  const [details, setDetails] = useState({
    // image: "",
    firstname: "",
    lastname: "",
    stream: "",
    college: "",
    contact: "",
    email: "",
    adj1: "",
    adj2: "",
    github: "",
    linkedin: "",
    education: [
      {
        collegename: "",
        degreename: "",
        stream: "",
        markstype: "",
        obtainedmarks: "",
        obtainedgrade: "",
        passingyear: "",
      },
    ],
    internship: [
      {
        name: "",
        link: "",
        description: "",
      },
    ],
    projects: [
      {
        title: "",
        livelink: "",
        from: "",
        till: "",
        onelinedescription: "",
        objective: "",
        techused: "",
      },
    ],
    skills: {
      os: "",
      language: "",
      cloudtech: "",
      devtools: "",
      libframe: "",
      database: "",
      softskills: "",
      subofinterest: "",
    },
    languages: [
      {
        name: "",
        convenience: "",
      },
    ],
  });
  return (
    <div className="sm:px-12 md:px-20 xl:24 sm:py-12 md:py-12">
      <Form details={details} setDetails={setDetails} />

      {/* <div className="flex">
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
      </div> */}
    </div>
  );
}

export default App;
