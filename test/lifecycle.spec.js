import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {
  lifecycle,
  componentWillMount,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
  componentWillUpdate,
  componentWillReceiveProps,
  shouldComponentUpdate,
} from '../src/';

describe('lifecycle', () => {
  const noop = () => { };

  it('lifecycle', (done) => {
    const values = {
      componentWillMount: () => { },
      componentDidMount: () => { },
    };

    const spyFirst = expect.spyOn(values, 'componentWillMount');
    const spySecond = expect.spyOn(values, 'componentDidMount');

    @lifecycle({
      componentWillMount: values.componentWillMount,
      componentDidMount: () => {
        values.componentDidMount();
        expect(spyFirst).toHaveBeenCalled();
        expect(spySecond).toHaveBeenCalled();
        done();
      },
    })
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    ReactTestUtils.renderIntoDocument(<Div />);
  });

  it('componentWillMount', (done) => {
    @componentWillMount(done)
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    ReactTestUtils.renderIntoDocument(<Div />);
  });

  it('componentDidMount', (done) => {
    @componentDidMount(done)
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    ReactTestUtils.renderIntoDocument(<Div />);
  });

  it('componentWillUpdate', () => {
    @componentWillUpdate(noop)
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.prototype.componentWillUpdate).toBeA('function');
  });

  it('componentDidUpdate', () => {
    @componentDidUpdate(noop)
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.prototype.componentDidUpdate).toBeA('function');
  });

  it('componentWillUnmount', () => {
    @componentWillUnmount(noop)
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.prototype.componentWillUnmount).toBeA('function');
  });

  it('componentWillReceiveProps', () => {
    @componentWillReceiveProps(noop)
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.prototype.componentWillReceiveProps).toBeA('function');
  });

  it('shouldComponentUpdate', () => {
    @shouldComponentUpdate(noop)
    // eslint-disable-next-line
    class Div extends React.Component {
      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.prototype.shouldComponentUpdate).toBeA('function');
  });
});
