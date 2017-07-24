'use strict'

import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Utils from '../common/utils.js';
import fetch from 'isomorphic-fetch'
import eventProxy from '../common/eventProxy.js';

const FormItem = Form.Item;

require('./index.less');

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			password:'',
			repassword:''
		}
	}
	handleSubmit = (e) => {
	   e.preventDefault();
	   this.props.form.validateFields((err, values) => {
	     if (!err) {
	       console.log('Received values of form: ', values);
			fetch('/users/signIn',{
				method:'POST',
				headers:{
					'Accept':'application/json',
					'Content-Type': 'application/json'
				},
				body:JSON.stringify(values)
			}).then(response=>{
				if (response.status==200) {
					this.closeLoginPopup(values.name);
					console.log(123,response)
				}
			}).catch(err=>{
				console.error(err);
				this.closeLoginPopup();
			})
	     }
	   });
	}

	changeFormToRegister(e){
		e.preventDefault();
		let element=document.getElementsByClassName('overlay')[0];
		Utils.removeClass(element.getElementsByClassName('login active')[0],'active');
		Utils.addClass(element.getElementsByClassName('register')[0],'active');
	}
	register(e){
		e.preventDefault();

		if (this.state.password===this.state.repassword) {
			console.log('ok');
			let name=this.state.name,
				password=this.state.password
			//触发提交信息的action
			fetch('/users/signup',{
				method:"POST",
				headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/x-www-form-urlencoded'
				 },
				body:JSON.stringify({
					name:name,
					password:password
				})
			})
			.then(response=>{
				if(response.status==200){
					let result = response.json()
					console.log(1111,result)
				}
			})
		}else{
			console.log(' 密码不匹配 ')
		}
	}

	handleChange(event){

		this.setState({
			[event.target.name]:event.target.value
		})
	}

	// inputBlur(){
	// 	if (this.state.password===this.state.repassword) {
	// 		console.log('ok');
	// 	}else{
	// 		console.log(' 密码不匹配 ')
	// 	}
	// }
	//提交后，触发
	closeLoginPopup=(name)=>{
		eventProxy.trigger('Login::Close',{name:name});
	}


	render(){
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="com-login-form">
				<div className="favicon">
                    <p className="icon">M</p>
                    <p className="favtext">给你想要的</p>
                </div>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
			          {getFieldDecorator('name', {
			            rules: [{ required: true, message: 'Please input your username!' }],
			          })(
			            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
			          )}
			        </FormItem>
			        <FormItem>
	                  {getFieldDecorator('password', {
	                    rules: [{ required: true, message: 'Please input your Password!' }],
	                  })(
	                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
	                  )}
	                </FormItem>
	                <FormItem>
                      
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                      </Button>
                      Or <a href="">register now!</a>
                    </FormItem>
				</Form>
				
			</div>
		)
	}
}
const WrappedNormalLoginForm = Form.create()(LoginForm);
export default WrappedNormalLoginForm