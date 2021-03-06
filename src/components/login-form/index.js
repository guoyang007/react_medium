'use strict'

import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Utils from '../common/utils.js';
import fetch from 'isomorphic-fetch'
import eventProxy from '../common/eventProxy.js';

const FormItem = Form.Item;

require('./index.less');

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: true,
            confirmDirty: false,
            name: '',
            password: '',
            repassword: '',
            loginSucceed:true,
            registerSucceed:true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch('/users/signIn', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                }).then(response=>{
                    return response.json();
                }).then(obj => {
                    console.log('obj',obj)
                    if (obj.status == 'ok') {
                        this.closeLoginPopup(obj.data.name);
                        console.log(123, obj)
                    }else{
                        this.setState({
                            loginSucceed:false
                        })
                        let that=this;
                        setTimeout(function(){
                            that.setState({
                                loginSucceed:true
                            })
                        },2000)
                    }
                }).catch(error => {
                    console.error(error);
                    this.closeLoginPopup();
                })
            }
        });
    }

    changeFormToRegister = () => {
        this.setState({
            signIn: false
        })
    }
    changeFormToLogin = () => {
        this.setState({
            signIn: true
        })
    }
    register = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch('/users/signup', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values)
                    }).then(response => {
                        return response.json();
                    })
                    .then(obj => {
                        if (obj.status == 'ok') {
                            this.closeLoginPopup(obj.data.name)
                        }else{
                            this.setState({
                                registerSucceed:false
                            })
                            let that=this;
                            setTimeout(function(){
                                that.setState({
                                    registerSucceed:true
                                })
                            },2000)
}
                    })
                    .catch(err => {
                        console.error(err);
                        this.closeLoginPopup();
                    })
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
            } else {
                callback();
            }
        }

    closeLoginPopup = (name) => {
        eventProxy.trigger('Login::Close', { name: name });
    }
    renderSignIn = () => {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit = {this.handleSubmit} className = "login-form">
             <FormItem> {
                getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your userName!' }],
                })( < Input prefix = {<Icon type = "user" style = {{ fontSize: 13 }} />} placeholder="Username" />)}
            </FormItem>
            <FormItem> {
                getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],})
                (<Input prefix = { <Icon type = "lock"
                    style = {{ fontSize: 13 }}/>} type="password" placeholder="Password" />
                )
            } </FormItem> 
            <FormItem>
                <Button type = "primary" htmlType = "submit" className = "login-form-button">
                    Log in
                </Button>
            Or <a href = "#" onClick = {this.changeFormToRegister }> register now! </a> 
            </FormItem>
            {this.renderErrorTip()}
        </Form>	
        )
    }

    renderSignUp = () => {
        const { getFieldDecorator } = this.props.form;
        return ( 
            <Form onSubmit = { this.register } className = "login-form">
                <FormItem> {
                    getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your userName!' }],
                    })( <Input prefix = { <Icon type = "user"
                            style = {{ fontSize: 13 }}/>} placeholder="Username" />
                        )
                    } 
                </FormItem> 
                <FormItem> {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })( <Input prefix = { <Icon type = "lock"
                                style = {{ fontSize: 13 } }/>} type="password" placeholder="Password" />
                            )
                        } 
                </FormItem>
                <FormItem> {
                    getFieldDecorator('confirm', {
                        rules: [{ required: true, message: 'Please confirm your Password!' },
                            { validator: this.checkPassword }
                        ],
                    })( <Input prefix = { <Icon type = "lock"
                            style = {
                                { fontSize: 13 } }
                            />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur}/>
                        )
                    }
                 </FormItem>
                 <FormItem>
                    <Button type = "primary" htmlType = "submit" className = "login-form-button">
                        Sign up
                    </Button>
                    <a href = "#" onClick = { this.changeFormToLogin }>
                        已有账号， 直接登录
                    </a> 
                </FormItem> 
                {this.renderErrorTip()}
            </Form>
        )
    }
    renderErrorTip=()=>{
        if(!this.state.registerSucceed){
            return (
                <div className="errorTip">
                    <span>该用户名已被占用，请重新注册！</span>
                </div>
            )
        }
        if (!this.state.loginSucceed) {
            return (
                <div className="errorTip">
                    <span>用户名或密码错误!</span>
                </div>
            )
        }
        return null
    }
    render() {
        return ( 
            <div className = "com-login-form" >
                <div className = "favicon" >
                    <p className = "icon" > M </p>
                    <p className = "favtext"> 给你想要的 </p>
                </div>
                {this.state.signIn ? this.renderSignIn() : this.renderSignUp() }
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm
