import React from "react";
import { getUser } from "../../redux/reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { PostsSlice, setPosts } from "../../redux/reducers/PostReducer";
import { getAlbum } from "../../redux/reducers/AlbumReducer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Users() {
  const dispatch = useDispatch();
  const { users, posts, album } = useSelector((state) => {
    return {
      users: state.users.users,
      posts: state.posts.posts,
      album: state.album.album,
    };
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((result) => {
        dispatch(getUser(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((result) => {
        dispatch(getAlbum(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let counter = 0;
  let count=0

  return (
    <div className="hero">
      {users.length &&
        users.map((user, index) => {
          counter = 0;
          count=0
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <ListGroup variant="flush">
                <ListGroup.Item>name:{user.name}</ListGroup.Item>

                {posts.map((post) => {
                  if (post.userId === user.id) {
                    counter++;
                    console.log(counter);
                  }
                })}
<ListGroup.Item> number of post:{counter}</ListGroup.Item>

{album.map((alb) => {
                  if (alb.userId === user.id) {
                    count++;
                  }
                })}
                <ListGroup.Item>number of album:{count}</ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
    </div>
  );
}

export default Users;
