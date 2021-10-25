import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import { Form, Input, Button, Checkbox} from 'antd';
import { Link } from 'react-router-dom';
import Home from "./Home";
import AuthenticationService from "./AuthenticationService";
import AuthenticationLogin from "./AuthenticationLogin";



class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username:null,
          password:null,
          login:false,
          store:null
      }
      //redirect to homw if already logged in
      if (AuthenticationLogin.currentuservalue) {
          this.props.history.push('/');
      }
  }

  responseGoogle=(response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  handleSubmit = e => {
      e.preventDefault();
  }

     
render() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
 return (
    <div className="Div-form">
    <Form className="login-form"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onSubmit={this.handleSubmit}

      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
       >
        <Input onChange={(e) => {this.setState({username:e.target.value})}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        
        >
        <Input.Password onChange={(e) => {this.setState({password:e.target.value})}}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Link to='/home'>
        <Button type="primary" htmlType="submit" className="Login-button" onClick={() => {this.AuthenticationLogin.login()}}>
          Sign In
        </Button>
        </Link>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div>
          <GoogleLogin
          clientId="48185425813-60iv6vd4qad5o6o8orre8qsl6bvdpgia.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
        </div>
      </Form.Item>
      
      <div className="Sign-up">
      <Link to='/forgotpassword'>
        <a className="Forgot-password" href="./components/ForgotPassword.js">Forgot password</a>
        </Link>
        <Link to='/signup'>
        <a href="./components/SignUp.js" id="Sign-up-link">SignUp</a>
        </Link>
        </div>
    </Form>
    </div>
  );
}
}

export default Login;