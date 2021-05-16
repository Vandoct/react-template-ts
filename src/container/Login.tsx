import { Button, Form, Input } from 'antd';
import { LoginWrapper } from 'components/wrapper/styled';
import { FC, ReactElement } from 'react';
import { getEmailRegex } from 'utils/regex';

const Login: FC = (): ReactElement => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <LoginWrapper>
      <h1>Welcome Back</h1>
      <p>Sign in to enjoy more awesome features</p>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              pattern: getEmailRegex(),
              message: 'Please input valid email address!',
            },
          ]}>
          <Input placeholder="Email address" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" block>
            Sign in
          </Button>
        </Form.Item>
      </Form>

      <p>
        Don&apos;t have an account yet? <span>Sign up</span>
      </p>
    </LoginWrapper>
  );
};

export default Login;
