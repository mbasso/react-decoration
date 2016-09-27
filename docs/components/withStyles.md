## @withStyles(styles: Object)

Inject a `styles` prop used to style the component itself.

#### Example

```js
@withStyles({
  container: {
    width: '100%',
    height: 'auto',
  },
  input: {
    width: 250,
  },
})
class TextField extends React.Component {

  render() {
    const { styles, ...others } = this.props;
    return (
      <div style={styles.container}>
        <input type="text" style={styles.input} {...others} />
      </div>
    );
  }
}
```
