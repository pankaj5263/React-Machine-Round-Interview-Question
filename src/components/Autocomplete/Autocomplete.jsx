import React from "react";

function Autocomplete() {
  return (
    <div className="flex justify-center">
      
      <div className="mt-10">
        <div>
        <h1>Autocomplete By DataList element</h1>
        <h3 className="mt-5">Please Enter city name</h3>
        </div>
        <div className="mt-5">
            
    <input  id={"city"} name="city" placeholder="please type..." list="cities" className="border-1" />
      <datalist id="cities">
        <option value="Agra" />
        <option value="Mathura" />
        <option value="Noida" />
        <option value="Gurgaon" />
        <option value="Delhi" />
      </datalist>
        </div>

      </div>

      <div>
      </div>

    </div>
  );
}

export default Autocomplete;
