import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";
import { useCRUDFn } from "../../hooks/useCRUDFn";
import { AuthContext } from "../../context/AuthContext";
import "./Postdetail.css";

export default function Postdetail() {
  const location = useLocation();
  const { user } = useContext(AuthContext)
  const { deleteDocument } = useCRUDFn('posts')
  const { state: post } = location;
  const navigate = useNavigate();



  const handleEdit = () => {
    navigate(`/edit/${post.id}`, { state: post });
  };

  const handleDelete =async () => {
    await deleteDocument(post.id)
    navigate('/')
  };

  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">{post.body}</p>

        {user.uid === post.userId &&
          <div className="d-flex justify-content-end">
            <Appsubmitbutton onClick={handleDelete} title="Delete" />
            <Appsubmitbutton onClick={handleEdit} title="Edit" />
          </div>
        }
      </div>
    </div>
  );
}
