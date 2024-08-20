/* eslint-disable react/prop-types */
function Education({ details }) {
  return (
    <>
      <div className="max-w-2xl py-1">
        <p className="text-2xl">Education</p>
        <hr />
        {details.education.map((edu, id) => (
          <div key={id} className="container flex p-1 max-w-2xl">
            <div className="flex grid w-full justify-between">
              <div className="flex-row text-md font-semibold">
                {edu.collegename}
              </div>
              <div className="flex-row text-xs italic">
                {edu.degreename}{" "}
                {edu.degreename == "B.tech" || edu.degreename == "Diploma"
                  ? `in ${edu.stream}`
                  : null}
              </div>
            </div>
            <div className="flex grid w-full justify-end">
              <div className="flex-row text-right">{edu.passingyear}</div>
              <div className="flex-row text-right text-sm">
                {edu.markstype}:{" "}
                {edu.markstype === "Grade"
                  ? edu.obtainedgrade
                  : edu.obtainedmarks}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Education;
