import React from 'react';
import { validateClass } from '../../utils/validators';

export default function handleRenderError(UserHandler) {
  return (Target) => {
    validateClass(Target, 'handleRenderError');
    const userRender = Target.prototype.render;
    let handler = (ex) => <div>{ex.message}</div>;

    if (typeof UserHandler === 'string') {
      handler = () => <div>{UserHandler}</div>;
    } else if (
      typeof UserHandler === 'function'
      && UserHandler.prototype
      && UserHandler.prototype.isReactComponent) {
      handler = (ex) => <UserHandler error={ex} />;
    } else if (typeof UserHandler === 'function') {
      handler = UserHandler;
    }

    // eslint-disable-next-line
    Target.prototype.render = function () {
      let result = null;
      try {
        result = userRender().apply(this);
      } catch (ex) {
        result = handler(ex);
      }
      return result;
    };
  };
}
