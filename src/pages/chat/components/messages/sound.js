import PropTypes from 'prop-types';

SoundMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

const SoundMessage = ({ message, user }) => {
  console.log(message);
  console.log(user);
};

export default SoundMessage;
