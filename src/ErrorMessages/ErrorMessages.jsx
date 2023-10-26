import PropTypes from 'prop-types';

function ErrorMessages({ errors, incorrectPassword}) {
  return (
    <div className="d-grid justify-content-center">
      {errors.user_name && <p className="text-danger">{errors.user_name}</p>}
      {errors.user_lastname && <p className="text-danger">{errors.user_lastname}</p>}
      {errors.user_email && <p className="text-danger">{errors.user_email}</p>}
      {errors.user_password && <p className="text-danger">{errors.user_password}</p>}
      {incorrectPassword && <p className="text-danger">{incorrectPassword}</p>}
    </div>
  );
}

ErrorMessages.propTypes = {
  errors: PropTypes.shape({
    user_name: PropTypes.string,
    user_lastname: PropTypes.string,
    user_email: PropTypes.string,
    user_password: PropTypes.string,
  }).isRequired,
  incorrectPassword: PropTypes.string,
};

export default ErrorMessages;
