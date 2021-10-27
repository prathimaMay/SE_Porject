import React, { Component, useState } from 'react';
import 'antd/dist/antd.css';
import { Steps, Button, message, Form, Input, Checkbox, Select, Menu, Dropdown, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import  SignUpRepository from '../Repository/SignUp'

const { Step } = Steps;
const { Option } = Select;


const steps = [
  {
    id: 1,
    title: 'Personal Information'
  },
  {
    id: 2,
    title: 'Setup Credentials & Security Questions'
  },
  {
    id:3,
    title: 'Movie Preferences'
  },
];

// const securityQuestions = [
//   {
//     sqId: 1,
//     sQuestion: "What is your best friend's name ?"
//   },
//   {
//     sqId: 2,
//     sQuestion: "What is your pet name ?"
//   }
// ]

// const getGeneres = [
//   {
//     id: 1,
//     name: 'Action'
//   },
//   {
//     id: 2,
//     name: 'Romance'
//   },
//   {
//     id: 3,
//     name: 'Comedy'
//   },
//   {
//     id: 4,
//     name: 'Drama'
//   }];


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        password: '',
        sQuestionId: 0,
        sQuestionAnswer: '',
        genresSelected: '',
        securityQuestions: [],
        genres: [],
        current: 0
    }
  }

  componentDidMount() 
  {
    this.setState({ securityQuestions: SignUpRepository.getSecurityQuestions()});
    this.setState({ genere: SignUpRepository.getGenres()});
  }



render()
{
  const current = this.state.current;

  const next= () => {
      this.setState({ current: current + 1 })
  };
  
  const prev = () => {
      this.setState({ current: current - 1 })
  };

    /*const next = () => {
      this.setCurrent(current + 1);
      console.log(this.state.current)
    };
  
    const prev = () => {
      this.setCurrent(current - 1);
      console.log(this.state.current)
    };*/

    const onFinish = (values) => {
      console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const handleGenreChange = (value) => {
        console.log(`selected ${value}`);
    }

    const handleSQChange = (value) => {
      console.log(`selected ${value}`);
    }
    const createAccount = () => {
      var param = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phonenumber: this.state.phonenumber,
        email: this.state.email,
        password: this.state.password,
        sQuestionId: this.state.sQuestionId,
        sQuestionAnswer: this.state.sQuestionAnswer,
        genresSelected: this.state.genres,
      }
      return SignUpRepository.createAccount(param);

    }
    
    const getSecurityQuestionsTemplate = () =>
    {
      let sQuestions;
      sQuestions = <div>
      <Form.Item
      label="Setup Security Question"
      name="securityquestion"
        rules={[
          {
            required: true,
            message: 'Please enter your Answer!',
          },
        ]}
      >
        <Select
                  mode="single"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Select Security Question"
                  // onChange={handleSQChange}
                  value={this.state.sQuestionId}
                >
                  {this.state.securityQuestions && this.state.securityQuestions.map((question) => <Option key={question.sqId}>{question.sQuestion}</Option>)}
      </Select>  
      <Input value={this.state.sQuestionAnswer}/>
      </Form.Item>
      </div>
      return sQuestions;
    } 

    const getStepFormItems = (stepId) =>
    {
        let formItems;
        if(stepId === 1)
        {
            formItems = <div><Form.Item
            label="First Name"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please enter your First Name!',
              },
            ]}
          >
          <Input value={this.state.firstname}/>
          </Form.Item>
    
          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please enter your Last Name!',
              },
            ]}
          >
          <Input value={this.state.lastname}/>
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: 'Please enter your Phone Number!',
              },
            ]}
          >
          <Input value={this.state.phonenumber}/>
          </Form.Item>
          
          </div>
    
          
          return formItems;
        }
        else if(stepId === 2)
        {
            formItems = <div><Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your Email!',
              },
            ]}
          >
            <Input value={this.state.email}/>
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          >
          <Input.Password value={this.state.password}/>
          </Form.Item>
          {getSecurityQuestionsTemplate()}

          </div>;
        }
        else if(stepId === 3)
          {
            formItems = <div>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="Select Generes"
                  // onChange={handleGenreChange}
                >
                  {this.state.genres && this.state.genres.map((genere) => <Option key={genere.id}>{genere.name}</Option>)}
                </Select>
            </div>
          }
            return formItems;

    }
    return (
        <div className='signup-container'>
            <div className='steps'>
            <Steps current={current}>
                { steps.map(item => (
                <Step key={item.title} title={item.title} />
                )) }
            </Steps>
            </div>
      <div className="steps-content">        
    <Form
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
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    {getStepFormItems(steps[current].id)}
    </Form>
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={createAccount}>
            Create Account
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      </div>
    );
}
}
export default SignUp;