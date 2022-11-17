import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Feed = () => {
  const [data, setData] = useState({});
  const [feeds,setFeeds] = useState([])
  const inputFile = useRef();

useEffect(()=>{
const userId = localStorage.getItem("userid") ; axios.get(`http://localhost:8000/profile/${userId}/feed`)
.then(({data})=>{
  setFeeds(data)
})
},[data])

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("descriptiton", data.description);
    formData.append("tags", data.tags);

    formData.append("image", inputFile.current.files[0]);

    const userId = localStorage.getItem("userid");
    axios.post(`http://localhost:8000/profile/${userId}/feed`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  return (
    <div>
      <h1>Feed Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Enter Title"
        />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Enter Description"
        />
        <input
          type="text"
          name="tags"
          onChange={handleChange}
          placeholder="Enter Tags"
        />
        <input
          type="file"
          ref={inputFile}
          name="file"
          onChange={handleChange}
        />
        <input type="submit" value="New Post" />
      </form>

      <hr/>

      {
      feeds.map((f)=>{
    return <div key={f._id}>
     <h1>{f.title} </h1>
      <p>{f.description}</p>
      <span>{f.tags} </span>
      <img height={"220px"} width={"350px"} src={`http://localhost:8000/static/${f.image}`}alt="" />

     </div>
      })
      }
    </div>
  );
};

export default Feed;
