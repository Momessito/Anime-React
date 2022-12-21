import React, { useEffect, useState } from "react";
import axios from "axios";

const Top2 = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://q4l8x4.deta.dev/top"
      );



      const data = response.data;

      setPosts(data)
    } catch (Error) {
      console.log(Error)
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  var id = 0

  return <div className="Container" id="Container3">
    <h1>
      Mangás Mais bem avaliados
    </h1>

    {posts.length === 0 ? <p>Carregando</p> : (
      posts.map((post) => (
        <div key={post.id}>
          <div className="MostC">
            <img src={post.image} alt="logo" />
            <div className="texts2">
              <h5>{post.title}</h5>
              <div className="cate2">
                <h5>⭐{post.score}</h5>

              </div>
            </div>
          </div>
        </div>
      ))
    )}

  </div>
}

export default Top2