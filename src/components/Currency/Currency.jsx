import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Text from 'components/Text'

const DEFAULT_LANG = 'en-En';

const formatCurrency = (value, currency) =>
  new Intl.NumberFormat(
    DEFAULT_LANG,
    {
      style: 'currency',
      currency: String(currency).toUpperCase()
    }
  ).format(value)

function Currency({ children, currency }) {
  if (Number.isNaN(children)) {
    return <Text>--</Text>
  }

  const formattedValue = useMemo(
    () => formatCurrency(children, currency),
    [children, currency],
  );

  return (
    <Text>
      {formattedValue}
    </Text>
  )
}

Currency.propTypes = {
  children: PropTypes.number,
  currency: PropTypes.string
}

export default Currency;
