import React from "react";
import Post from "../../components/post/Post";
import { useFetchCollection } from "../../hooks/useFetchCollection";
import "./Home.css";


export default function Home() {
  const { document } = useFetchCollection('posts')
  const { data: posts, loading } = document
  console.log(document, 'data')

  return (
    <div className="outer">
      {loading && <h1>Loading...</h1>}
      {posts && !loading &&
        <div className="postCardRow row">
          {posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </div>
      }
    </div>
  );
}
