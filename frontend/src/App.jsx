import { useEffect, useState } from "react";
import postService from "./services/posts";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    flightName: "",
    flightCode: "",
    flightDate: "",
  });

  useEffect(() => {
    postService.getAll().then((res) => {
      setPosts(res.data);
    });
  }, []);

  const addPost = async (e) => {
    e.preventDefault();
    try {
      const res = await postService.create(formData);
      setPosts([...posts, res.data]);
      setFormData({
        flightName: "",
        flightCode: "",
        flightDate: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();
  };

  const deletePost = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className="text-4xl">Travel App</h1>
      <h2>Current Posts: </h2>
      <ul>
        {posts.map((post) => (
          <Posts
            key={post.id}
            post={post}
            updatePost={updatePost}
            deletePost={deletePost}
          />
        ))}
      </ul>
      <br />
      <h2>Add New Post:</h2>
      <NewPost
        addPosts={addPost}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
