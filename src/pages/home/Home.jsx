import React from "react";
import { useState } from "react";
import homePageItems from "./consts/homePageItems";
import HomePageItem from "./components/HomePageItem";
import "./home.scss";

const Home = () => {
  const arrayHomePageItems = Object.keys(homePageItems);
  const numberOfItems = arrayHomePageItems.length;
  const lastItem = arrayHomePageItems[arrayHomePageItems.length - 1];
  const [activeItem, setActiveItem] = useState(lastItem);
  
  return (
    <div className="music-library__main-container">
      {Object.values(homePageItems).map((item) => {
        const { id, title, value, color } = item;

        return (
          <HomePageItem
            id={id}
            title={title}
            value={value}
            color={color}
            key={id}
            homePageItems={homePageItems}
            numberOfItems={numberOfItems}
            lastItem={lastItem}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        );
      })}
    </div>
  );
};

export default Home;
