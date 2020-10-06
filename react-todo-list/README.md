# react-todo-list

完成了一个简单的 `todolist`, 使用学习了 `Hooks`。(~~然而写了很久😅~~)

- [react-todo-list](#react-todo-list)
  - [useState](#usestate)
  - [useCallback](#usecallback)
  - [useEffect](#useeffect)
  - [不得不说，`react`写完了之后再优化删减代码还是感觉挺爽的，虽然总觉得没有写得特别好的样子……](#不得不说react写完了之后再优化删减代码还是感觉挺爽的虽然总觉得没有写得特别好的样子)

## useState

定义组件内 `state` 的钩子函数，调用后可以导出一个状态和修改状态的函数，在适当的位置调用可以修改该状态并且更新视图。

```js
const [isAddInputShow, setAddInputShow] = useState(false);

setAddInputShow(false);
// 调用后 isAddInputShow 会异步地更新为 false。

// 另外一种用法
setTodoList(todoList => [...todoList, item]);
// 直接在函数内传入函数，参数为该函数修改的状态，就可以在 useEffect 中无依赖地修改。
```

## useCallback

包装函数的钩子函数，同样可以传入依赖项，此时的回调函数是否更新取决于依赖项。

```js
const addTodoItem = useCallback(item => {
  setTodoList(todoList => [...todoList, item]);
  setAddInputShow(false);
}, []);
```

## useEffect

副作用函数，可以判断依赖来决定是否执行内部逻辑。

```js
// 渲染组件时获取本地存储的数据。
useEffect(() => {
  const todoList = JSON.parse(localStorage.getItem('todoData')) || [];
  setTodoList(todoList);
}, []);

// todoList 一旦修改，就会更新 localStorage
useEffect(() => {
  localStorage.setItem('todoData', JSON.stringify(todoList));
}, [todoList]);
```

## 不得不说，`react`写完了之后再优化删减代码还是感觉挺爽的，虽然总觉得没有写得特别好的样子……
