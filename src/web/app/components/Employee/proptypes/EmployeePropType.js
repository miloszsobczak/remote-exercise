import PropTypes from 'prop-types';

export const employeePropType = {
  id: PropTypes.number,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  country: PropTypes.string,
  salary: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string,
  employment: PropTypes.string
}
