import expect from 'expect';
import React from 'react';
import PropTypes from 'prop-types';
import ReactTestUtils from 'react-dom/test-utils';
import {
  contextTypes,
  childContext,
  childContextTypes,
  context,
} from '../src/';

describe('context', () => {
  const types = {
    foo: PropTypes.string,
  };

  const values = {
    foo: 'bar',
  };

  it('contextTypes', () => {
    @contextTypes(types)
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.contextTypes).toEqual(types);
  });

  it('childContextTypes', () => {
    @childContextTypes(types)
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.childContextTypes).toEqual(types);
  });

  it('childContext', () => {
    @contextTypes(types)
    // eslint-disable-next-line
    class ContextUser extends React.Component {

      render() {
        return (
          <div className={this.context.foo} />
        );
      }
    }

    @childContext(values)
    @childContextTypes(types)
    // eslint-disable-next-line
    class ContextProvider extends React.Component {

      static propTypes = {
        children: PropTypes.any,
      }

      render() {
        return (
          <div>
            {this.props.children}
          </div>
        );
      }
    }

    const rendered = ReactTestUtils.renderIntoDocument(
      <ContextProvider>
        <ContextUser />
      </ContextProvider>
    );
    const div = ReactTestUtils.findRenderedDOMComponentWithClass(rendered, 'bar');
    expect(div).toExist();
  });

  it('context', () => {
    @context(types, values)
    @contextTypes(types)
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div className={this.context.foo} />
        );
      }
    }

    expect(Div.childContextTypes).toEqual(types);

    const rendered = ReactTestUtils.renderIntoDocument(<Div />);
    const div = ReactTestUtils.findRenderedDOMComponentWithClass(rendered, 'bar');
    expect(div).toExist();
  });
});
