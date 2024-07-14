const Posts = ({ post, updatePost, deletePost }) => {
  return (
    <li>
      {post.flightName} {post.flightCode} {post.flightDate}{" "}
      <button onClick={updatePost} className="text-gray-600">
        Update
      </button>{" "}
      <button onClick={deletePost} className="text-red-600">
        Delete
      </button>
    </li>
  );
};

export default Posts;
