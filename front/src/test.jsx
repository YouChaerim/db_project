import React, { useEffect } from "react";
import axios from "axios";

function Test() {
  axios
    .get("http://localhost:4000")
    .then((res) => {
      console.log(res.data);
      axios.get()
        .then(() => {
        })
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    (
      async () => {
        
      }
    )()
  }, [])

  return <h1>안녕하세요</h1>;
}

export default Test;
