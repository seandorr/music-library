/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";
import colors from "../../../colors.scss";

const HomePageActiveItemContent = ({ homePageItems, activeItem, value, color }) => {
  return homePageItems[activeItem].value === value ? (
    <div 
      className="spotify-playlist" 
      css={css`
        border: 20px solid ${colors[color]}
      `}>
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
  ) : null;
};

HomePageActiveItemContent.propTypes = {
  homePageItems: PropTypes.objectOf(Object).isRequired,
  activeItem: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
};

HomePageActiveItemContent.defaultProps = {
  activeItem: undefined,
  value: undefined,
  color: undefined,
};

export default HomePageActiveItemContent;
