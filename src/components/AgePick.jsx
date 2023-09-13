import React from "react";

const AgePick = (props) => {
    const handleChange =(event) => {
        props.actionProvider.agePickHandle(event.target.value)
    }
  return (
    <div>
      <select
      onChange={handleChange}
      defaultValue={0}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        <option value={0}>Select Age</option>
        {Array.from({ length: 24 }, (_, i) => i + 18).map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgePick;
