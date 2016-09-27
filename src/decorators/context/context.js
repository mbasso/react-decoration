import React from 'react';
import { validateClass } from '../../utils/validators';

export default function context(childContextTypes, childContext) {
  return (Target) => {
    validateClass(Target, 'context');

    return class ContextProvider extends React.Component {
      static childContextTypes = childContextTypes;

      getChildContext() {
        return childContext;
      }

      render() {
        return (
          <Target {...this.props} />
        );
      }
    };
  };
}
