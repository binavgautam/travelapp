const NewPost = ({ addPost, handleChange, formData }) => {
  return (
    <div>
      <form onSubmit={addPost}>
        <div className="flex gap-6 mb-6 md:grid-cols-2">
          <div>
            <label>Flight Name:</label>
            <input
              type="text"
              name="flightName"
              className="input-field"
              value={formData.flightName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Flight Number:</label>
            <input
              type="text"
              name="flightCode"
              className="input-field"
              value={formData.flightCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Flight Date:</label>
            <input
              type="text"
              name="flightDate"
              className="input-field"
              value={formData.flightDate}
              onChange={handleChange}
            />
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
