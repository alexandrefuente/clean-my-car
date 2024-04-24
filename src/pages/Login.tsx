import React from "react";
import { Link, useNavigate } from "react-router-dom"
import Layout from "../layout/Layout"
import { Button, Form, Grid, Header } from 'semantic-ui-react'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [isAllowed, setIsAllowed] = React.useState<boolean>(false)
  /**
   * Verifying email and password submitted by user
   */
  const handlerLogin = () => {
    if (email !== 'joe@email.com' || password !== '123456') {
      setIsAllowed(true)
      return;
    }
    localStorage.setItem('user', email);
    navigate("/dashboard")
    setIsAllowed(false)
  }
  return (
    <Layout>
      <Grid className="login" columns={2} verticalAlign="middle">
        <Grid.Column width={5}>
        </Grid.Column>
        <Grid.Column width={8} className="login-container">
          <Header as='h2' color='black' textAlign='center'>
            Log in
          </Header>
          {/* Show a message if data is incorrect */}
          {isAllowed &&
            <Header as='h4' icon color='red' textAlign='center'>
              Bad credentials. Please login again.
            </Header>
          }
          <Form size='large' className="login-form" onSubmit={handlerLogin}>
            <div style={{ textAlign: 'left' }}>
              <label>E-mail</label>
            </div>
            <Form.Input
              fluid
              placeholder='joe@email.com'
              onChange={(e) => setEmail(e.target.value)}
              required={true}
              type="email"
            />
            <div style={{ textAlign: 'left' }}>
              <label>Password</label>
            </div>
            <Form.Input
              fluid
              placeholder='Enter your Password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <div style={{ marginTop: -10, marginBottom: 10, width: '100%', textAlign: 'right' }}>
              <Link to={'forgot-password'} style={{ color: 'black', fontSize: 13 }}>
                forgot password?
              </Link>
            </div>
            <div style={{ paddingLeft: 15, paddingRight: 15, marginTop: 30 }}>
              <Button style={{ backgroundColor: '#1aebb6' }} fluid size='large' type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Grid.Column>
        <Link to={'need-help'} className="need-help">Need help?</Link>
      </Grid>
    </Layout>
  )
}

export default Login
