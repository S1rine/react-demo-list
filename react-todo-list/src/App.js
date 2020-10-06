import React, { useState, useCallback, useEffect } from 'react';

import MyHeader from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModal from './components/Modal/CheckModal';
import EditModal from './components/Modal/EditModal';
import DeleteModal from './components/Modal/DeleteModal';
import NoDataTip from './components/NoDataTip';

function App() {
  const [isAddInputShow, setAddInputShow] = useState(false),
    [todoList, setTodoList] = useState([]),
    [currentData, setCurrentData] = useState({}),
    [isCheckModalShow, setCheckModalShow] = useState(false),
    [isEditModalShow, setEditModalShow] = useState(false),
    [isDeleteModalShow, setDeleteModalShow] = useState(false);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todoData')) || [];
    setTodoList(todoList);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoList));
  }, [todoList]);

  const addTodoItem = useCallback(item => {
    setTodoList(todoList => [...todoList, item]);
    setAddInputShow(false);
  }, []);

  const updateTodoCheck = useCallback(id => {
    setTodoList(todoList =>
      todoList.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }, []);

  const updateTodoItem = useCallback(todoItem => {
    const id = todoItem.id;
    setTodoList(todoList => todoList.map(item => (item.id === id ? todoItem : item)));
    setEditModalShow(false);
  }, []);

  const deleteTodoItem = useCallback(id => {
    setTodoList(todoList => todoList.filter(item => item.id !== id));
    setDeleteModalShow(false);
  }, []);

  function updateCurDataShowModal(id, callback) {
    setCurrentData(todoList.find(item => item.id === id));
    callback(true);
  }

  return (
    <div className='App'>
      <MyHeader openAddInput={() => setAddInputShow(!isAddInputShow)} />
      <AddInput addTodoItem={addTodoItem} isAddInputShow={isAddInputShow} />
      <div className='container'>
        {todoList.length ? (
          todoList.map(item => {
            return (
              <TodoItem
                key={item.id}
                data={item}
                updateTodoCheck={updateTodoCheck}
                showCheckModal={id => updateCurDataShowModal(id, setCheckModalShow)}
                showEditModal={id => updateCurDataShowModal(id, setEditModalShow)}
                showDeleteModal={id => updateCurDataShowModal(id, setDeleteModalShow)}
              />
            );
          })
        ) : (
          <NoDataTip />
        )}
      </div>
      {isCheckModalShow && (
        <CheckModal data={currentData} closeCheckModal={() => setCheckModalShow(false)} />
      )}
      {isEditModalShow && (
        <EditModal
          data={currentData}
          closeEditModal={() => setEditModalShow(false)}
          updateTodoItem={updateTodoItem}
        />
      )}
      {isDeleteModalShow && (
        <DeleteModal
          data={currentData}
          closeDeleteModal={() => setDeleteModalShow(false)}
          deleteTodoItem={deleteTodoItem}
        />
      )}
    </div>
  );
}

export default App;
