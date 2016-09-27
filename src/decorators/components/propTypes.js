import { validateClass } from '../../utils/validators';

export default function propTypes(props) {
  return (target) => {
    validateClass(target, 'defaultProps');

    // eslint-disable-next-line
    target.propTypes = props;
  };
}
