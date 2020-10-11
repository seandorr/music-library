import React from "react";
import PropTypes from "prop-types";
import homePageItems from "../consts/homePageItems";

const HomePageActiveItemContent = ({ activeItem }) => {
  return (
    <div>
      <iframe
        title="spotify-playlist"
        src={`https://open.spotify.com/embed?uri=spotify:user:122367656:playlist:${homePageItems[activeItem].playlistURL}`}
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
};

HomePageActiveItemContent.propTypes = {};

export default HomePageActiveItemContent;
