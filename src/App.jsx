import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <CreatePost />
      <h1 className="container max-w-[1280px] mx-auto text-4xl font-bold mb-10">
        Posts
      </h1>
      <Posts />
    </>
  );
}

export default App;
