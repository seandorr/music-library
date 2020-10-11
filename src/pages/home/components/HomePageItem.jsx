/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import colors from "../../../colors.scss";

const HomePageItem = (props) => {
  const {
    id,
    title,
    value,
    color,
    homePageItems,
    activeItem,
    setActiveItem,
  } = props;

  const handleOnClickItem = (value) => {
    setActiveItem((prevactiveMenuItem) => {
      return prevactiveMenuItem !== value ? value : null;
    });
  };

  const musicLibraryItemStyles = css`
    background-color: ${colors[color]};
  `;

  return (
    <div
      css={musicLibraryItemStyles}
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
  activeItem: "item-3",
};

export default HomePageItem;
