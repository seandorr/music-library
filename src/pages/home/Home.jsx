import React from "react";
import { useState } from "react";
import homePageItems from "./consts/homePageItems";
import HomePageItem from "./components/HomePageItem";
import "./home.scss";
import HomePageActiveItemContent from "./components/HomePageActiveItemContent";

const Home = () => {
  const [activeItem, setActiveItem] = useState("item-3");

  return (
    <div className="music-library__main-container">
      {Object.values(homePageItems).map((item) => {
        const { id, title, value, color, playlistURL } = item;

        return (
          <HomePageItem
            id={id}
            title={title}
            value={value}
            color={color}
            key={id}
            homePageItems={homePageItems}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        );
      })}
      <div className={`music-library__selected-item-content ${activeItem}`}>
        <HomePageActiveItemContent activeItem={activeItem} />
      </div>
    </div>
  );
};

export default Home;
