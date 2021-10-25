import React from 'react';
import 'antd/dist/antd.css';
import { Steps, Button, message, Form, Input, Checkbox, Select } from 'antd';

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
const securityQuestions = [
  {
    sqId: 1,
    sQuestion: "What is your best friend's name ?"
  },
  {
    sqId: 2,
    sQuestion: "What is your pet name ?"
  }
]

const getGeneres = [
  {
    id: 1,
    name: 'Action'
  },
  {
    id: 2,
    name: 'Romance'
  },
  {
    id: 3,
    name: 'Comedy'
  },
  {
    id: 4,
    name: 'Drama'
  }];

const SignUp = () => 
{
    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      function handleChange(value) {
        console.log(`selected ${value}`);
      }
    
    function getSecurityQuestions()
    {
      let sQuestions;
      sQuestions = securityQuestions.map((question) => 
      <Form.Item
        label={question.sQuestion}
        name={question.sqId}
        rules={[
          {
            required: true,
            message: 'Please enter your Answer!',
          },
        ]}
      >
        <Input />
      </Form.Item>)
      return sQuestions;
    }  
    function getStepFormItems(stepId)
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
            <Input />
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
          <Input/>
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
          <Input />
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
            <Input />
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
            <Input.Password />
          </Form.Item>
          {getSecurityQuestions()}

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
                  onChange={handleChange}
                >
                  {getGeneres.map((genere) => <Option key={genere.id}>{genere.name}</Option>)}
                </Select>
            </div>
          }
            return formItems;

    }


    return (
        <div class='signup-container'>
            <div class='steps'>
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
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
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
export default SignUp;