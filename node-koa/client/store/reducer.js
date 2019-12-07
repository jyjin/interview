//reducer存放数据
//reducer的内容需要返回一个函数，这个函数接受两个参数state，action，
//state是整个store存储的数据
const defaultState = {//初始化数据
    inputValue:'213',
    list:[1,32]
}; 
//reducer可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
    return state;
}
