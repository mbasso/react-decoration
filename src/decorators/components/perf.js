import Perf from 'react-addons-perf';
import { validateClassAndFunction } from '../../utils/validators';
import wrapLifecycleMethod from '../../utils/wrapLifecycleMethod';

const capitalizeFirstLetter = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const printMeasurements = (prints) => {
  const measurements = Perf.getLastMeasurements();
  prints.forEach(x => {
    const attr = `print${capitalizeFirstLetter(x)}`;
    if (Perf[attr]) {
      Perf[attr](measurements);
    }
  });
};

//eslint-disable-next-line
export default function perf({ prints = [], event = 'mount' } = {}) {
  return (target, key, descriptor) => {
    validateClassAndFunction((descriptor && descriptor.value) || target, 'perf');
    let newFunction;

    if (target.prototype &&
        target.prototype.isReactComponent &&
        !(descriptor && descriptor.value)
    ) {
      wrapLifecycleMethod(
        `componentWill${capitalizeFirstLetter(event)}`,
        Perf.start
      )(target);
      wrapLifecycleMethod(
        `componentDid${capitalizeFirstLetter(event)}`,
        () => {
          Perf.stop();
          printMeasurements(prints);
        }
      )(target);
      newFunction = target;
    } else {
      const userFunc = descriptor.value;
      newFunction = {
        ...descriptor,
        value: function perfMeasurer(...params) {
          Perf.start();
          const result = userFunc.apply(this, [...params]);
          Perf.stop();
          printMeasurements(prints);
          return result;
        },
      };
    }
    return newFunction;
  };
}
