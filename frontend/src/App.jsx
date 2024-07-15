import { useEffect, useState } from "react";
import postService from "./services/posts";
import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((res) => {
      setPosts(res.data);
    });
  }, []);

  const addPost = async (data) => {
    try {
      const res = await postService.create(data);
      setPosts([...posts, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async ({ id, data }) => {
    try {
      const res = await postService.update(id, data);
      setPosts(posts.map((post) => (post.id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    try {
      await postService.remove(id);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl mb-6">Travel Finder App</h1>
      <h2 className="text-2xl mb-4">Current Posts:</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <Posts
            key={post.id}
            post={post}
            updatePost={updatePost}
            deletePost={deletePost}
          />
        ))}
      </ul>
      <h2 className="text-2xl mt-8 mb-4">Add New Post:</h2>
      <NewPost addPost={addPost} />
    </div>
  );
};

export default App;
