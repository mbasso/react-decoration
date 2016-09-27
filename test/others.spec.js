import expect from 'expect';
import React from 'react';
import { property } from '../src/';

describe('others', () => {
  it('property', () => {
    @property('foo', 'bar')
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.prototype.foo).toEqual('bar');
  });
});
