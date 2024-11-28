import React, { useState } from 'react'

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()])
      setInputValue('')
    }
  }

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  const startEditing = (index: number) => {
    setEditingIndex(index)
    setInputValue(tasks[index])
  }

  const updateTask = () => {
    if (inputValue.trim() && editingIndex !== null) {
      const newTasks = tasks.map((task, index) => (index === editingIndex ? inputValue.trim() : task))
      setTasks(newTasks)
      setInputValue('')
      setEditingIndex(null)
    }
  }

  return (
    <>
      <h1>ToDo List</h1>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {editingIndex !== null ? <button onClick={updateTask}>Update</button> : <button onClick={addTask}>Add</button>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
