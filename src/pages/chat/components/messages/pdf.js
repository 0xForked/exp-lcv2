import PropTypes from 'prop-types';

PdfMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

const PdfMessage = ({ message, user }) => {
  console.log(message);
  console.log(user);
};

export default PdfMessage;
