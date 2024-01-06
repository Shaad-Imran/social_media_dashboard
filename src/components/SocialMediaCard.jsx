import PropTypes from "prop-types";
import { upArrowIcon, downArrowIcon } from "../assets";

/**
 * SocialCard Component
 * @param {string} platform - The social media platform name.
 * @param {number|string} followersCount - The count of followers.
 * @param {number} change - The change in followers count today.
 * @param {string} icon - The URL of the platform icon.
 * @param {boolean} isPositive - Indicates whether the change is positive or negative.
 * @returns {JSX.Element} - Rendered SocialCard component.
 */

const SocialMediaCard = ({
  platform,
  followersCount,
  change,
  icon,
  isPositive,
}) => (
  <div className={`card card--${platform}`}>
    {/* Platform information */}
    <div className="card__platform">
      <img className="card__icon" src={icon} alt={`${platform} icon`} />
      <div className="card__username">@imran</div>
    </div>

    {/* Followers information */}
    <div className="card__followers">
      <div className="card__count card__count--big">{followersCount}</div>
      <div className="card__label">Followers</div>
    </div>

    {/* Change information */}
    <div className={`card__change card__change--${isPositive ? "up" : "down"}`}>
      <img
        src={isPositive ? upArrowIcon : downArrowIcon}
        alt={isPositive ? "up arrow" : "down arrow"}
      />
      <div className="card__number">{change} Today</div>
    </div>
  </div>
);

// PropType definitions for type safety
SocialMediaCard.propTypes = {
  platform: PropTypes.string.isRequired,
  followersCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  change: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  isPositive: PropTypes.bool.isRequired,
};

export default SocialMediaCard;
