import PropTypes from 'prop-types';

TextMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

const TextMessage = ({ message, user }) => {
  console.log(message);
  console.log(user);
};

export default TextMessage;
