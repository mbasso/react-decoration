## @childContextTypes(childContextTypes: contextTypes)

Defines component's [childContextTypes](https://facebook.github.io/react/docs/context.html).

#### Example

```js
@childContextTypes({
  theme: React.PropTypes.object,
})
class ThemeProvider extends React.Component {

  getChildContext() {
    return {
      primaryColor: 'blue',
      secondaryColor: 'green',
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
```
