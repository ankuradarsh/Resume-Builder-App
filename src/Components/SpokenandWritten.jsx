/* eslint-disable react/prop-types */
export default function SpokenandWritten({ details }) {
  return (
    <>
      <div className="py-1 max-w-2xl">
        <p className="text-2xl">Spoken and Written</p>
        <hr />
        {details.languages.map((lang, index) => (
          <div key={index} className="grid text-sm">
            <li>
              <span className="font-semibold">{lang.name}</span>
              {": "}
              {lang.convenience}
            </li>
          </div>
        ))}
      </div>
    </>
  );
}
