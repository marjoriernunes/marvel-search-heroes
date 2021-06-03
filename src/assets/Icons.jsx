import Icons from './icons.svg';
import PropTypes from 'prop-types';
import './Icons.css';

const Icon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Icon;