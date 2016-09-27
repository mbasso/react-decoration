import React from 'react';
import { validateClass } from '../../utils/validators';

export default function mapProps(mapFunc) {
  return (Target) => {
    validateClass(Target, 'mapProps');

    return (props) => <Target {...mapFunc(props)} />;
  };
}
