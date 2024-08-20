/* eslint-disable react/prop-types */
// import Photo from "../assets/Photo1.jpg";

function Topbar({ details }) {
  return (
    <>
      <div className="flex justify-between max-w-2xl">
        {/* <div className="overflow-none rounded-md">
          <img src={Photo} className="max-w-28" alt="pics1" />
        </div> */}
        {/* <div className="grid px-7 py-2"> */}
        <div className="grid">
          <p
            className={`${
              details.firstname.length + details.lastname.length > 20
                ? `text-xl`
                : `text-2xl`
            } font-bold`}
          >
            {details.firstname} {details.lastname}
          </p>
          <p>{details.stream}</p>
          <p>{details.college}</p>
          <p>
            {details.adj1} and {details.adj2}{" "}
          </p>
        </div>
        {/* <div className="grid px-3 py-2 text-right"> */}
        <div className="grid text-right ">
          <p>
            {/* &#9742; */}
            <a href={`tel:${details.contact}`}>+91{details.contact}</a>
          </p>
          <p>
            {/* &#128499; */}
            <a href={`mailto:${details.email}`}>{details.email}</a>
          </p>
          <p>
            <a href={details.github}>Github</a>
          </p>
          <p>
            <a href={details.linkedin}>Linkedin</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Topbar;
