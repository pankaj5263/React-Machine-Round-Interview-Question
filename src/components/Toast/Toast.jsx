import React from "react";

const Toast = ({ toasts }) => {
  if (!toasts.length) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded shadow-lg text-white transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500"
              : toast.type === "error"
              ? "bg-red-500"
              : toast.type === "info"
              ? "bg-blue-500"
              : toast.type === "warning"
              ? "bg-yellow-500"
              : "bg-gray-500"
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
