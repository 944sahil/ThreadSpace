import React from 'react';
import PropTypes from 'prop-types';

const TSSvg = (props) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
    {/* Letter T */}
    <text x="12" y="20" fontFamily="Arial, sans-serif" fontSize="25" fontWeight="bold" fill="currentColor" textAnchor="middle">
      T
    </text>
    {/* Vertical Black Rectangle */}
    <rect x="10.5" y="5" width="2" height="13" fill="black" />
    {/* Smaller Letter S on top */}
    <text x="12" y="18" fontFamily="Arial, sans-serif" fontSize="19" fill="currentColor" textAnchor="middle">
      S
    </text>
  </svg>
);

TSSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

TSSvg.defaultProps = {
  width: '400px',
  height: '400px',
  fill: 'currentColor',
};

export default TSSvg;
