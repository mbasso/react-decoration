import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {
  autobind,
  log,
  inject,
  injectProps,
  injectState,
} from '../src/';

describe('functions', () => {
  it('autobind', () => {
    class Component {

      constructor(value) {
        this.value = value;
      }

      @autobind
      method() {
        return this.value;
      }
    }

    const element = new Component(42);
    const method = element.method;
    expect(method()).toEqual(42);
  });

  it('log', (done) => {
    // let spy = null;

    // eslint-disable-next-line
    class Input extends React.Component {
      @log
      onChange() {
        // expect(spy).toHaveBeenCalled();
        done();
      }

      render() {
        return (
          <input
            value="foo"
            onChange={(e, ...params) => {
              // cannot spy console.log
              // spy = expect.spyOn(console, 'log');
              this.onChange(e, ...params);
            }}
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('injectProps', (done) => {
    // eslint-disable-next-line
    class Div extends React.Component {

      state = {}

      @injectProps
      foo({ foo }, value) {
        expect(this.props).toEqual({ foo: 'bar' });
        expect(foo).toEqual('bar');
        expect(value).toEqual('foo');
        done();
      }

      @injectProps
      bar({ foo }) {
        expect(this.state).toEqual({});
        expect(foo).toEqual('bar');
        this.foo('foo');
      }

      @injectProps
      render({ foo }) {
        expect(foo).toEqual('bar');
        this.bar();
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div foo="bar" />);
  });

  it('injectState', (done) => {
    // eslint-disable-next-line
    class Div extends React.Component {
      state = {
        foo: 'bar',
      }

      @injectState
      foo({ foo }, value) {
        expect(foo).toEqual('bar');
        expect(value).toEqual('foo');
        done();
      }

      @injectState
      bar({ foo }) {
        expect(foo).toEqual('bar');
        this.foo('foo');
      }

      @injectState
      render({ foo }) {
        expect(foo).toEqual('bar');
        this.bar();
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div />);
  });

  it('inject', (done) => {
    const injectRenderChildren = inject('renderChildren');

    // eslint-disable-next-line
    class Div extends React.Component {

      renderChildren() {
        return (
          <span>It Works!</span>
        );
      }

      @injectRenderChildren
      render(renderChildren) {
        expect(renderChildren).toBeA('function');
        expect(renderChildren()).toEqual(<span>It Works!</span>);
        done();
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div />);
  });
});
