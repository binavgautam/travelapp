import { useForm } from "react-hook-form";

const NewPost = ({ addPost }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    addPost(data);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Flight Name:
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                {...register("flightName", {
                  required: "Flight Name is required",
                })}
              />
              {errors.flightName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.flightName.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Flight Number:
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                {...register("flightNumber", {
                  required: "Flight Number is required",
                })}
              />
              {errors.flightNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.flightNumber.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Flight Date:
              <input
                type="date"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                {...register("flightDate", {
                  required: "Flight Date is required",
                })}
              />
              {errors.flightDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.flightDate.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              From Airport:
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                {...register("fromAirport", {
                  required: "Departure Airport is required",
                })}
              />
              {errors.fromAirport && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fromAirport.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              To Airport:
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                {...register("toAirport", {
                  required: "Arrival Airport is required",
                })}
              />
              {errors.toAirport && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.toAirport.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              From Location:
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                {...register("fromLocation", {
                  required: "Departure Location is required",
                })}
              />
              {errors.fromLocation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fromLocation.message}
                </p>
              )}
            </label>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              To Location:
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                {...register("toLocation", {
                  required: "Arrival Location is required",
                })}
              />
              {errors.toLocation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.toLocation.message}
                </p>
              )}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
