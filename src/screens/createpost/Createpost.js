import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";
import {serverTimestamp } from "firebase/firestore";
import { useCRUDFn } from "../../hooks/useCRUDFn";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import "./Createpost.css";

export default function Createpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()
  const { addDocument} = useCRUDFn('posts')
  const {user}=useContext(AuthContext)


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      toast.error("Title should not be empty");
      return
    }
    if (!content) {
      toast.error("Content should not be empty");
      return
    }
    if(content.length<=100){
      toast.error("Content Character length must be greater 100");
      return
    }
     addDocument({ title, body: content, userId:user?.uid, createdAt: serverTimestamp() })
    navigate('/')
  };


  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h6>Title:</h6>
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label>
            <h6>Description:</h6>
          </label>
          <textarea
            className="form-control"
            value={content}
            placeholder="Description"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
       
        <div className="text-end">
          <Appsubmitbutton title="Create" />
        </div>
      </form>
    </div>
  );
}
