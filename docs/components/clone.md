## @clone(component: React.Component)

Creates a new Component starting from the given one. Methods and attributes defined in the decorated component will replace the corresponding in the source component.

#### Example

```js
class Foo extends React.Component{

  static propTypes = {
    foo: PropTypes.string,
  }

  static childContextTypes = {
    example: PropTypes.string,
  }

  getChildContext() {
    return ({
      example: 'fooBar',
    });
  }

  render() {
    return (
      <div>
        foo
      </div>
    );
  }
}

@clone(Foo)
class Bar extends React.Component{

  // replace Foo.propTypes
  static propTypes = {
    bar: PropTypes.string,
  }

  // replace Foo render
  render() {
    return (
      <div>
        bar
      </div>
    );
  }
}

// Bar is equal to:
// class Bar extends React.Component{
//
//   static propTypes = {
//     bar: PropTypes.string,
//   }
//
//   static childContextTypes = {
//     example: PropTypes.string,
//   }
//
//   getChildContext() {
//     return ({
//       example: 'fooBar',
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         bar
//       </div>
//     );
//   }
// }
```
