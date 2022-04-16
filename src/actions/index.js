import { types } from "./types";
import axios from "axios";
//Axios is a library that serves to create HTTP requests

export const fetchPosts = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//catching data with axios