/* eslint-disable react/prop-types */
function Projects({ details }) {
  return (
    <>
      <div className="max-w-2xl">
        <p className="text-2xl">Personal Projects </p>
        <hr />
        {details.projects.map((proj, index) => (
          <div key={index} className="container p-1 max-w-2xl">
            <div className="flex text-bold py-1">
              <div className="grid w-full justify-between">
                <div className="text-md font-semibold">
                  {proj.title}
                  {proj.livelink !== "" ? (
                    <a href={proj.liveLink}> | Live</a>
                  ) : null}
                </div>
                <span className="italic text-xs">
                  {proj.onelinedescription}
                </span>
              </div>
              <div className="grid w-full justify-end text-sm">
                {proj.from} - {proj.till}
              </div>
            </div>
            <div className="grid text-sm">
              {proj.objective !== "" ? `- ${proj.objective}` : null}
            </div>
            <div className="grid text-sm">
              {proj.techused !== "" ? `- ${proj.techused}` : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
