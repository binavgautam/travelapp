import { useState } from "react";

const NewPost = ({ formData, addPost, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.flightName) {
      newErrors.flightName = "Flight Name is required.";
    }
    if (!formData.flightCode) {
      newErrors.flightCode = "Flight Number is required.";
    }
    if (!formData.flightDate) {
      newErrors.flightDate = "Flight Date is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => {
        setErrors({});
      }, 1000);
    } else {
      setErrors({});
      addPost(e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6 mb-6 md:grid-cols-2">
          <div>
            <label>
              Flight Name:
              <input
                type="text"
                name="flightName"
                className="input-field"
                value={formData.flightName}
                onChange={handleChange}
              />
              {errors.flightName && (
                <p className="text-red-500">{errors.flightName}</p>
              )}
            </label>
          </div>
          <div>
            <label>
              Flight Number:
              <input
                type="text"
                name="flightCode"
                className="input-field"
                value={formData.flightCode}
                onChange={handleChange}
              />
              {errors.flightCode && (
                <p className="text-red-500">{errors.flightCode}</p>
              )}
            </label>
          </div>
          <div>
            <label>
              Flight Date:
              <input
                type="date"
                name="flightDate"
                className="input-field"
                value={formData.flightDate}
                onChange={handleChange}
              />
              {errors.flightDate && (
                <p className="text-red-500">{errors.flightDate}</p>
              )}
            </label>
          </div>
          <br />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
