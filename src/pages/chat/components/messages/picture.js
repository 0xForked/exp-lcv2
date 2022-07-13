import PropTypes from 'prop-types';

PictureMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

const PictureMessage = ({ message, user }) => {
  console.log(message);
  console.log(user);
};

export default PictureMessage;
