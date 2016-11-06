export default function wrapLifecycleMethod(method, func) {
  return (target) => {
    const originalComponentLifecycle = target.prototype[method];
    Object.defineProperty(
      target.prototype,
      method,
      {
        value: typeof originalComponentLifecycle === 'function' ? (
          function componentLifecycleWrapper(...params) {
            const result = originalComponentLifecycle.apply(this, [...params]);
            return func.apply(this, [...params, result]);
          }
        ) : (
          function componentLifecycleWrapper(...params) {
            return func.apply(this, [...params]);
          }
        ),
      }
    );
  };
}
