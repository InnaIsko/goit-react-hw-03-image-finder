import { Dna } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export function Loader({ visible }) {
  return (
    <Dna
      visible={visible}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}

Loader.propTypes = {
  visible: PropTypes.bool,
};
