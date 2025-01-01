import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import "./Home.css";
import { useFetch } from "./../../hooks/useFetch";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../firebase/config";
import { useFetchCollection } from "../../hooks/useFetchCollection";


export default function Home() {
  const{document:posts}=useFetchCollection('posts') 

  return (
    <div className="container outer">
      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
}
