/* eslint-disable react/prop-types */
export default function InternOrTraining({ details }) {
  return (
    <>
      <div className="py-1 max-w-2xl">
        <p className="text-2xl">Internships/Trainings</p>
        <hr />
        {details.internship.map((intern, index) => (
          <div key={index} className="grid container py-1 max-w-2xl">
            <div className="text-md font-semibold">
              {intern.name}{" "}
              {intern.link !== "" ? (
                <a href={intern.link}> | view certificate</a>
              ) : null}
            </div>
            <span className="italic text-sm">{intern.description}</span>
          </div>
        ))}
      </div>
    </>
  );
}
