import React, { useState } from "react";

function MultiSelect() {
  const [selectedCities, setSelectedCities] = useState([]);

  const handleChange = (evt) => {
    console.log("evt.target",evt.target.selectedOptions);
    const selectedOptions = Array.from(evt.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedCities(selectedOptions);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-bold">Multi-Select Dropdown</h1>
      <h1>this is too important for this: evt.target.selectedOptions</h1>

      <div className="mt-4">
        <select
          id="city"
          name="city"
          multiple
          className="border border-gray-400 p-2 mt-2"
          onChange={handleChange}
        >
          <option value="agra">Agra</option>
          <option value="mathura">Mathura</option>
          <option value="noida">Noida</option>
          <option value="gurgaon">Gurgaon</option>
          <option value="sikandrabad">Sikandrabad</option>
          <option value="delhi">Delhi</option>
        </select>
      </div>

      {/* Display selected options */}
      <div className="mt-4">
        <h2 className="font-semibold">Selected Cities:</h2>
        <ul>
          {selectedCities.length > 0 ? (
            selectedCities.map((city) => <li key={city}>{city}</li>)
          ) : (
            <li className="text-gray-500">No city selected</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MultiSelect;
