import React from "react";
import Toast from "./Toast";
import useToast from "./useToast";

function ShowToast() {
  const { toasts, showToast } = useToast();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="space-x-4">
        <button
          onClick={() =>
            showToast({ type: "success", message: "Success! Operation completed." })
          }
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Show Success
        </button>
        <button
          onClick={() =>
            showToast({ type: "error", message: "Error! Something went wrong." })
          }
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Show Error
        </button>
        <button
          onClick={() =>
            showToast({ type: "info", message: "Info: Please check the details." })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Show Info
        </button>
        <button
          onClick={() =>
            showToast({ type: "warning", message: "Warning! This action is risky." })
          }
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Show Warning
        </button>
      </div>
      <Toast toasts={toasts} />
    </div>
  );
}

export default ShowToast;
