import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";
import { useCRUDFn } from "../../hooks/useCRUDFn";
import { toast } from "react-toastify";
import "./Editpost.css";

export default function Editpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modifiedField, setModifiedField] = useState({})

  const { updateDocument} = useCRUDFn('posts')

  const navigate = useNavigate();

  const location = useLocation();

  const { state: post } = location;



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      toast.error("Title should not be empty");
      return;
    }
    if (!content) {
      toast.error("Content should not be empty");
      return;
    }
    
    updateDocument(post.id, modifiedField)
    navigate('/')

  };

  useEffect(() => {
    setTitle(post.title)
    setContent(post.body)

  }, [post.title, post.body]);


  const onTitleChange = (e) => {
    setTitle(e.target.value)
    setModifiedField({ ...modifiedField, title: e.target.value })
    console.log(e.target.value)
  }

  const onContentChange = (e) => {
    setContent(e.target.value)
    setModifiedField({ ...modifiedField, body: e.target.value })

  }

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
            onChange={onTitleChange}
          />
        </div>
        <div className="form-group">
          <label>
            <h6>Content:</h6>
          </label>
          <textarea rows="5"
            className="form-control"
            value={content}
            onChange={onContentChange}
          />
        </div>
        <div className="text-end">
          <Appsubmitbutton title="Save" />
        </div>
      </form>
    </div>
  );
}
