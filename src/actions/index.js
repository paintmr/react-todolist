import { ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER } from "./actionTypes"

let nextTodoId = 0;

/**
 * 新增待办事项
 * @param {*} text
*/
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

/**
 * 新增待办事项状态
 * @param {*} text
*/
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

/**
 * 设置过滤状态
 * @param {*} filter
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

/**
 * 设置新增待办事项文本
 * @param {*} text
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})

