import PropTypes from 'prop-types';

SystemMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

const SystemMessage = ({ message }) => {
  console.log(message);
};

export default SystemMessage;
