import React from 'react';
import 'antd/dist/antd.css';
import { Steps, Button, message, Form, Input, Checkbox } from 'antd';

const { Step } = Steps;

const steps = [
  {
    id: 0,
    title: 'User Details'
  },
  {
    id: 1,
    title: 'Security Code'
  },
  {
    id:2,
    title: 'SetUp New Password'
  },
];

const ForgotPassword = () => 
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
    function getStepForms(stepId)
    {
        let formItems;
        if(stepId == 0)
        {
            formItems = <div><Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please enter your User Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>    
          
          <Form.Item
            label="What is your best friend's name ?"
            name="securityquestion"
            rules={[
              {
                required: true,
                message: 'Please answer the Security question!',
              },
            ]}
          >
          <Input />
          </Form.Item>
          </div>
        return formItems;
        }
        else if(stepId == 1)
        {
            formItems = <div><Form.Item
            label="SecurityCode"
            name="securitycode"
            rules={[
              {
                required: true,
                message: 'Please enter the security code sent to you Email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          </div>
        return formItems;
        }

        else
        {
            formItems = <div><Form.Item
            label="NewPassword"
            name="newpassword"
            rules={[
              {
                required: true,
                message: 'Please enter new password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          
          <Form.Item
            label="ConfirmPassword"
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: 'Please confirm password!',
              },
            ]}
          >
          <Input />
          </Form.Item>

          <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className="Login-button">
          Login
        </Button>
      </Form.Item>
          </div>;
            return formItems;
        }

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
      <div className="steps-content forgot-steps-content">        
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout='vertical'
    >
    {getStepForms(steps[current].id)}
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
export default ForgotPassword;