import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'
import { addTodo, toggleTodo, setFilter, setTodoText } from './actions'

// 初始state
const store = configureStore({
  reducer: rootReducer
})
console.log(store)

// 订阅state的变化
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodo('Learn about actions'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('active'))
store.dispatch(setTodoText('Learn'))


//取消订阅
unsubscribe()

export default store