export const validateClass = (clazz, decorator) => {
  if (typeof clazz !== 'function') {
    throw new Error(`@${decorator} decorator can only be applied to class not: ${typeof clazz}`);
  }
};

export const validateFunction = (func, decorator) => {
  if (typeof func !== 'function') {
    throw new Error(`@${decorator} decorator can only be applied to methods not: ${typeof func}`);
  }
};

export const validateClassAndFunction = (func, decorator) => {
  if (typeof func !== 'function') {
    throw new Error(
      `@${decorator} decorator can only be applied to class and methods not: ${typeof func}`
    );
  }
};
