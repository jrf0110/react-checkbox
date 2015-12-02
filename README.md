# React Checkbox

> Stateless and easily stylable checkbox component for react

__install__

```bash
npm install -S react-check
```

__usage__

```jsx
<Checkbox
  checked={this.state.shouldBeChecked}
  value={myCustomValue}
  onChange={this.onChange}
/>

{/* or */}
{/* add cutom markup */}
<Checkbox
  checked={this.state.shouldBeChecked}
  value={myCustomValue}
  onChange={this.onChange}
>
  <div class="some-custom-text">Select Me!</div>
</Checkbox>
```