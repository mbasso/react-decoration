## @componentWillUnmount(callback: componentWillUnmount)

Defines component's lifecycle method [componentWillUnmount](https://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount).

#### Example

```js
@componentWillUnmount(() => {
  console.log('I\'m going out!');
})
class Foo extends React.Component {

  // needed to avoid readonly exception
  componentWillUnmount() {}

  render() {
    return (
      <div>
        bar
      </div>
    );
  }
}
```
