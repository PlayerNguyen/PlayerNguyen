---
title: "Getting Started with React"
date: "2024-01-15"
readTime: "5 min"
tags: ["React", "JavaScript"]
excerpt: "A beginner-friendly guide to understanding React components, state, and props."
---

React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small, isolated pieces of code called components.

## Your First Component

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

## JSX

JSX is a syntax extension for JavaScript that looks similar to HTML. It produces React elements.

```jsx
const element = <h1>Hello, world!</h1>;
```

## State and Props

Props let you pass data to components, while state lets components manage their own data.

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
