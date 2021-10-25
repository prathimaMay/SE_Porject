import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import { Form, Input, Button, Checkbox} from 'antd';
import { Link } from 'react-router-dom';
import Home from "./Home";


class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
      }
  }

componentDidMount() {
    console.log('Loading')

    window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
            client_id : "48185425813-60iv6vd4qad5o6o8orre8qsl6bvdpgia.apps.googleusercontent.com"
        })
        console.log('API Inited')

        window.gapi.load('signin2', () => { 
            const params = {
                onSuccess: () => {
                    console.log('User has signedin!')
                }
            }
            window.gapi.signin2.render('g-signin-button', {params})
        })
    })

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
        <Input />
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
        <Input.Password />
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
        <Button type="primary" htmlType="submit" className="Login-button" onClick="./Home.js">
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

          <div id='g-signin-button'>Signin with Google</div>

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