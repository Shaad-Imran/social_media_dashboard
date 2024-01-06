import PropTypes from "prop-types";
import { downArrowIcon, upArrowIcon } from "../assets";

/**
 * Card Component
 * @param {string} title - The title or subtitle of the card.
 * @param {string} icon - The URL of the icon for the card.
 * @param {number} count - The count displayed on the card.
 * @param {number} change - The change in count.
 * @param {boolean} isPositive - Indicates whether the change is positive or negative.
 * @returns {JSX.Element} - Rendered Card component.
 */

const OverviewCard = ({ title, icon, count, change, isPositive }) => (
  <div className="card card-grid">
    {/* Title or Subtitle */}
    <div className="card__subtitle">{title}</div>

    {/* Icon */}
    <img className="" src={icon} alt={`${title} icon`} />

    {/* Count */}
    <div className="card__count card__count--small">{count}</div>

    {/* Change Information */}
    <div className={`card__change card__change--${isPositive ? "up" : "down"}`}>
      <img
        src={isPositive ? upArrowIcon : downArrowIcon}
        alt={`${isPositive ? "up" : "down"} arrow`}
      />
      <div className="card__number">{`${change}${isPositive ? "%" : ""}`}</div>
    </div>
  </div>
);

// PropTypes for type safety
OverviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  isPositive: PropTypes.bool.isRequired,
};

export default OverviewCard;
