//store的内容
import { createStore } from 'redux';
//引入reducer
import reducer from './reducer'
const store = createStore(reducer);//创建store，并将reducer传递给store
export default store;//导出store

