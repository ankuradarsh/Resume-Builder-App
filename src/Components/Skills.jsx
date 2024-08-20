/* eslint-disable react/prop-types */
export default function Skills({ details }) {
  // function formatSkillsData(data) {
  //   return data.join(", ");
  // }
  return (
    <>
      <div className="py-1 max-w-2xl">
        <p className="text-2xl">Technical Skills and Interests</p>
        <hr />
        <div className="grid text-sm">
          {details.skills.os !== "" ? (
            <li>
              <span className="font-semibold">Operating System:</span>{" "}
              {details.skills.os}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
          {details.skills.language !== "" ? (
            <li>
              <span className="font-semibold">Languages:</span>{" "}
              {details.skills.language}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
          {details.skills.cloudtech !== "" ? (
            <li>
              <span className="font-semibold">Cloud Technology:</span>{" "}
              {details.skills.cloudtech}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
          {details.skills.devtools !== "" ? (
            <li>
              <span className="font-semibold">Developer Tools:</span>{" "}
              {details.skills.devtools}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
          {details.skills.libframe !== "" ? (
            <li>
              <span className="font-semibold">Library/Frameworks:</span>{" "}
              {details.skills.libframe}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
          {details.skills.database !== "" ? (
            <li>
              <span className="font-semibold">Databases:</span>{" "}
              {details.skills.database}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
          {details.skills.softskills !== "" ? (
            <li>
              <span className="font-semibold">Soft Skills:</span>{" "}
              {details.skills.softskills}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
          {details.skills.subofinterest !== "" ? (
            <li>
              <span className="font-semibold">Subject of Interest:</span>{" "}
              {details.skills.subofinterest}
              {/* {formatSkillsData(operatingSystem)} */}
            </li>
          ) : null}
        </div>
      </div>
    </>
  );
}
