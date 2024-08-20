/* eslint-disable react/prop-types */
export default function TextField({ Label, For, Type }) {
  return (
    <>
      <div className="grid w-full px-2">
        <label htmlFor={For} className="text-sm">
          {Label}
        </label>
        <input
          type={Type}
          name={For}
          id={For}
          className="px-2 py-1 bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500"
        />
      </div>
    </>
  );
}
