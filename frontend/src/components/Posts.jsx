const Posts = ({ post, updatePost, deletePost }) => {
  const handleDelete = () => {
    deletePost(post.id);
  };

  // Add your logic for updating posts if needed
  // For simplicity, we are just displaying the post details here

  return (
    <li className="border border-gray-300 p-4 rounded-lg shadow-md">
      <p className="text-lg font-semibold">
        {post.flightName} {post.flightNumber}
      </p>
      <p>{new Date(post.flightDate).toLocaleDateString()}</p>
      <p>
        {post.fromAirport} to {post.toAirport}
      </p>
      <p>
        {post.fromLocation} to {post.toLocation}
      </p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
        {/* Add your update button and logic here if needed */}
      </div>
    </li>
  );
};

export default Posts;
