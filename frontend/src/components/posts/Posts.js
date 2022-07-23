import "./style.css";
import Card from "react-bootstrap/Card";

import { useSelector, useDispatch } from "react-redux/es/exports";
import React from "react";
import {
  setPosts,
  addPosts,
  removePosts,
  editPosts,
} from "../../redux/reducers/PostReducer";
import axios from "axios";
import { useEffect, useState } from "react";
import { getComments } from "../../redux/reducers/Comments";
import { Button } from "bootstrap";

function Posts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [found, setFound] = useState("");

  const [show, setShow] = useState(false);
  const [Message, setMessage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { posts, comments } = useSelector((state) => {
    return {
      posts: state.posts.posts,
      comments: state.comments.comments,
    };
  });

  const handleSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
      })
      .then((result) => {
        dispatch(addPosts(result.data));
      });
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((result) => {
        dispatch(setPosts(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


const handleDelete=(id)=>{
axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((result)=>{
dispatch(removePosts(id))
})
}

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((result) => {
        dispatch(getComments(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    console.log(id);
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: title,
        body: body,
      })
      .then((result) => {
        console.log(result);
        dispatch(
          editPosts({
            id:id,
            title: result.data.title,
            body: result.data.body,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3 className="header">Posts</h3>
      <button className="add" onClick={handleShow}>
        add Post
      </button>
      <Card
        className="addCard"
        style={show ? { width: "50rem", height: "70%" } : { display: "none" }}
      >
        <Card.Body>
          <div>
            <p>title</p>
            <input
              className="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <p>body</p>
          <input
            className="body"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />

          <div className="buttonAdd">
            <button className="buttonCard" onClick={handleSubmit}>
              Add Post
            </button>
            <button className="buttonCard" onClick={handleClose}>
              close
            </button>
          </div>
        </Card.Body>
      </Card>

      <Card
        className="addCard"
        style={show ? { width: "50rem", height: "70%" } : { display: "none" }}
      >
        <Card.Body>
          <div>
            <p>title</p>
            <input
              className="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <p>body</p>
          <input
            className="body"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />

          {posts.length &&
            posts.map((post, index) => {
              if (post.id === found) {
                return (
                  <button
                    className="editbutton"
                    onClick={() => {
                      handleEdit(found);
                    }}
                  >
                    Edit{" "}
                  </button>
                );
              }
            })}
          <div className="buttonAdd">
            <button className="buttonCard" onClick={handleClose}>
              close
            </button>
          </div>
        </Card.Body>
      </Card>
      <div className="hero">
        {posts.length &&
          posts.map((post, index) => {
            return (
              <Card style={{ width: "18rem", height: "30rem" }}>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>

                  <Card.Text>{post.body}</Card.Text>
                  <h5>comments:</h5>

                  <div className="overFlow">
                    {comments.length &&
                      comments.map((comment) => {
                        if (comment.postId === post.id) {
                          return <p className="p">{comment.body}</p>;
                        }
                      })}
                  </div>
                  <button
                    className="del1"
                    onClick={() => {
                     handleDelete(post.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="del"
                    onClick={() => {
                      setFound(post.id);
                      handleShow();
                    }}
                  >
                    update
                  </button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
