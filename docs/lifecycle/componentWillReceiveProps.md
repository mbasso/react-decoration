## @componentWillReceiveProps(callback: componentWillReceiveProps)

Defines component's lifecycle method [componentWillReceiveProps](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops).

#### Example

```js
@componentWillReceiveProps(() => {
  console.log('I\'m receiving new props!');
})
class Foo extends React.Component {

  // needed to avoid readonly exception
  componentWillReceiveProps() {}

  render() {
    return (
      <div>
        bar
      </div>
    );
  }
}
```
