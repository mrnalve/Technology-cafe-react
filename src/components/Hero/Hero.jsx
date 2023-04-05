import React, { useEffect, useState } from "react";
import SideCard from "../SideCard/SideCard";
import Technology from "../Technology/Technology";
import "./Hero.css";
import Swal from "sweetalert2";
const Hero = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // pass side data to show the title
  const [sideData, setSideData] = useState([]);
  const handleBookmarked = (userData) => {
    let newCart = [];
    const getSideData = sideData.find((data) => data.id == userData.id);
    if (!getSideData) {
      newCart = [...sideData, userData];
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You Have Already Bookmarked This Blog!",
        showConfirmButton: false,
        timer: 2300,
      });
      return;
    }
    setSideData(newCart);
  };

  // pass data to update Read time
  const [readTime, setReadTime] = useState([]);
  const handleReadTime = (userData) => {
    let newCart = [...readTime, userData];
    setReadTime(newCart);
  };
  console.log(readTime);

  return (
    <div className="hero-container">
      <div>
        {data.map((user) => (
          <Technology
            user={user}
            handleBookmarked={handleBookmarked}
            handleReadTime={handleReadTime}
            key={user.id}
          ></Technology>
        ))}
      </div>
      <div>
        <SideCard sideData={sideData} readTime={readTime}></SideCard>
      </div>
    </div>
  );
};

export default Hero;
