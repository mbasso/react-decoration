import React from 'react';
import { validateClass } from '../../utils/validators';

export default function transferProps(Target) {
  validateClass(Target, 'transferProps');

  return (props) => {
    const others = {};
    const newProps = Object.assign({}, props);
    Object.keys(newProps).forEach((key) => {
      if (!(Target.propTypes && Target.propTypes[key])) {
        others[key] = newProps[key];
        delete newProps[key];
      }
    });
    return <Target others={others} {...newProps} />;
  };
}
