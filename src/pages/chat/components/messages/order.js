import PropTypes from 'prop-types';

OrderMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.object
};

const OrderMessage = ({ message, user }) => {
  console.log(message);
  console.log(user);
};

export default OrderMessage;
