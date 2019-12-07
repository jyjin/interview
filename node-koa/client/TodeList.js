import React, { Component } from "react";
import { Input, Button, List  } from "antd";//通过antd栈官网引入需要的组件
import 'antd/dist/antd.css';//引入antd栈的样式文件
import store from './store'//引入store
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();//获取store中的数据
    }
    render() {
        return(
            <div style={{marginTop:'10px',  marginLeft:'10px'}}>
                <div >
                    <Input value={this.state.inputValue} placeholder = 'qq' style = {{width:'300px', marginRight:'10px'}} />{/* 属性placeholder：默认显示的值*/}
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop:'10px', width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default TodoList;
