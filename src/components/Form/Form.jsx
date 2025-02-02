import React, {useReducer} from "react";

const initialState = {
    name: "",
    password: "",
    email: "",
    number: "",
    telephone: "",
    url: "",
    search: "",
    date: "",
    datetimeLocal: "",
    month: "",
    week: "",
    checkbox: false,
    radio: "",
    range: 0,
    color: "#000000",
    file: null,
    hidden: "",
  };

  function formReducer(state, action) {
    console.log("action",action,);
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  }
  
function Form() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const handleChange = (evt, type) => {
     const value = type =='checkbox' ? evt.target.checked : evt.target.value;
     const obj = {type:'UPDATE_FIELD', value:value, field:type}
     dispatch(obj);
    }

    const handleClick = (evt, type) => {
        evt.preventDefault();
        const obj = {type:'UPDATE_FIELD',field:type}
        dispatch(obj);
    }
  return (
    <>
      <div className="flex justify-center border-2">
        <form>
          <h1>All Form Handle Input</h1>
          <div className="flex justify-between w-80 mt-10">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'name')}
            />
          </div>
          <div className="flex justify-between w-80 mt-10">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter your Password"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'password')}
            />
          </div>
          <div className="flex justify-between w-80 mt-10">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'email')}
            />
          </div>
          <div className="flex justify-between w-80 mt-10">
            <label>number</label>
            <input
              type="number"
              min={10}
              max={50}
              placeholder="Enter your Number"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'number')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>Telephone</label>
            <input
              type="tel"
              placeholder="Enter your Telephone"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'telephone')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>URL</label>
            <input
              type="url"
              placeholder="Enter your url"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'url')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>Search</label>
            <input
              type="search"
              placeholder="Enter your search"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'search')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>Date</label>
            <input
              type="date"
              placeholder="Enter your Date"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'date')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>Datetime Local</label>
            <input
              type="datetime-local"
              placeholder="Enter your datetime-local"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'datetime-local')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>Month</label>
            <input
              type="month"
              placeholder="Enter your Month"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'month')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>Week</label>
            <input
              type="week"
              placeholder="Enter your Week"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'week')}
            />
          </div>
          <div className="flex justify-between w-80 mt-10">
            <label>Checkbox</label>
            <input
              type="checkbox"
              placeholder="Enter your Week"
              className="border-1 border-amber-500"
              checked={state?.checkbox}
              onChange={(evt) => handleChange(evt, 'checkbox')}
            />
          </div>
          <div className="flex justify-between w-80 mt-10">
            <label>Radio</label>
            <div>
              <div>
              <label>agra</label>
            <input
              type="radio"
              name="option-1"
              value={'agra'}
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'radio')}
            />
              </div>
              <div>
              <label>mathura</label>
             <input
              type="radio"
              name="option-1"
              value={'mathura'}
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'radio')}
            />
              </div>

            </div>

          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>Range</label>
            <input
              type="range"
              placeholder="Enter your Range"
              min={0}
              max={100}
              value={state.range}
              onChange={(evt) => handleChange(evt, 'range')}
              className="border-1 border-amber-500"
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>color</label>
            <input
              type="color"
              placeholder="Enter your Week"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'color')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>file</label>
            <input
              type="file"
              placeholder="Enter your file"
              className="border-1 border-amber-500"
              onChange={(evt) => handleChange(evt, 'file')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>hidden</label>
            <input
              type="hidden"
              placeholder="Enter your Week"
              className="border-1 border-amber-500"
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>submit</label>
            <input
              type="submit"
              placeholder="Enter your Week"
              className="border-1 border-amber-500"
              onClick={(evt) => handleClick(evt, 'submit')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>reset</label>
            <input
              type="reset"
              placeholder="Enter your Week"
              className="border-1 border-amber-500"
              onClick={(evt) => handleClick(evt, 'reset')}
            />
          </div>

          <div className="flex justify-between w-80 mt-10">
            <label>image button</label>
            <input
              type="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3xJuwNyfbTFtt84BnC8kMJKGJOebTD6auA&s"
              placeholder="Enter your Week"
              className="border-1 border-amber-500 w-10 h-10"
              onClick={(evt) => handleClick(evt, 'image')}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
