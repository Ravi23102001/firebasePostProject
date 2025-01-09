import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContext } from './../../hooks/useThemeContext';
import moment from "moment";
import "./Post.css";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
 const { user } = useContext(AuthContext)
  const { theme } = useThemeContext()

  // const navigate = useNavigate()


  // const handleClick = () => {
  //   navigate(`/post/${post.id}`, { state: post })
  // }

  return (
    <Link className='postCard' to={`/post/${post.id}`} state={post}>
        {user.uid === post.userId && <div className="notify"></div>}
      <div className="cardHeader">
        <h5>{post.title}</h5>
        <small>{moment(post.createdAt?.toDate()).calendar()}</small>
      </div>

      <div className="cardBody">
        <p className="card-text">
          {post.body}
        </p>
      </div>
    </Link>
  );
}
