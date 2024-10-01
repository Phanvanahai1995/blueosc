import { useEffect } from "react";
import { getPosts } from "../store/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";
import PostItem from "./PostItem";

function Posts() {
  const { posts, loading } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  //   console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return (
      <div className="container h-[50vh] flex items-center justify-center">
        <PacmanLoader color="#21dac1" />
      </div>
    );
  }

  if (posts.length)
    return (
      <div className="container max-w-[1280px] mx-auto mt-10">
        {posts?.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
}

export default Posts;
