## @componentDidUpdate(callback: componentDidUpdate)

Defines component's lifecycle method [componentDidUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate).

#### Example

```js
@componentDidUpdate(() => {
  console.log('I\'m new!');
})
class Foo extends React.Component {

  // needed to avoid readonly exception
  componentDidUpdate() {}

  render() {
    return (
      <div>
        bar
      </div>
    );
  }
}
```
