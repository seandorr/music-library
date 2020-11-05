/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import colors from "../../../colors.scss";
import HomePageActiveItemContent from "./HomePageActiveItemContent";

const HomePageItem = (props) => {
  const {
    title,
    value,
    color,
    homePageItems,
    numberOfItems,
    activeItem,
    setActiveItem,
  } = props;

  const handleOnClickItem = (value) => {
    setActiveItem((prevactiveMenuItem) => {
      return prevactiveMenuItem !== value ? value : value;
    });
  };

  return (
    <div
      css={css`
        background-color: ${colors[color]};

        &.active-item {
          width: calc(100% - ${80 * (numberOfItems - 1)}px);
        }
      `}
      className={`music-library__item ${
        activeItem && homePageItems[activeItem].value === value
          ? "active-item"
          : ""
      }`}
      onClick={() => handleOnClickItem(value)}
    >
      <div className="music-library__item-title-wrapper">
        <h1 className="music-library__item-title">{title}</h1>
      </div>
      <div className={`music-library__selected-item-content ${activeItem}`}>
        <HomePageActiveItemContent
          homePageItems={homePageItems}
          activeItem={activeItem}
          value={value}
          color={color}
        />
      </div>
    </div>
  );
};

HomePageItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  activeItem: PropTypes.string,
};

HomePageItem.defaultProps = {
  id: null,
  title: undefined,
  activeItem: undefined,
};

export default HomePageItem;
