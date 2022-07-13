import PropTypes from 'prop-types';

ProductMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

const ProductMessage = ({ message, user }) => {
  console.log(message);
  console.log(user);
};

export default ProductMessage;
