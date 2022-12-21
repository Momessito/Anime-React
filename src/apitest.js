import React, { useEffect, useState } from "react";
import axios from "axios";

const MostReaded = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://q4l8x4.deta.dev/mostread/total"
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

  return <div className="Container" id="Container2">
    <h1>
      Mangás mais lidos
    </h1>

    {posts.length === 0 ? <p>Carregando</p> : (
      posts.map((post) => (
        <div key={post.id}>
          <div className="MostC">
          {foi()}
            <img src={post.image} alt="logo" />
            <div className="texts">
              <h3>{post.title}</h3>
              <div className="cate">
                <h5>Generos:</h5>
                <h5>{post.categories[1]}</h5>
                <h5>{post.categories[2]}</h5>
                <h5>{post.categories[3]}</h5>
                <h5>{post.categories[4]}</h5>
                <h5>{post.categories[5]}</h5>
                <h5>{post.categories[6]}</h5>

              </div>
            </div>
          </div>
        </div>
      ))
    )}

  </div>

  function foi() {
    id = id + 1
    return (
      <p id="textS">{id}</p>

    )

  }

}

export default MostReaded