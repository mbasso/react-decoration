import { validateFunction } from '../../utils/validators';

const getPerf = () => ({
  time: performance && performance.now ? performance.now() : 0,
  memory: performance && performance.memory ? performance.memory : {
    jsHeapSizeLimit: 0,
    totalJSHeapSize: 0,
    usedJSHeapSize: 0,
  },
});

//eslint-disable-next-line
export default function measure(callback = console.log) {
  return (target, key, descriptor) => {
    const userFunc = descriptor.value;
    validateFunction(userFunc, 'measure');

    return {
      ...descriptor,
      value: function measurer(...params) {
        const before = getPerf();
        const result = userFunc.apply(this, [...params]);
        const after = getPerf();
        callback({
          before,
          after,
          comparison: {
            time: after.time - before.time,
            memory: {
              usedJSHeapSize: after.memory.usedJSHeapSize - before.memory.usedJSHeapSize,
            },
          },
        });
        return result;
      },
    };
  };
}
