import React from "react";
import { Link } from "react-router-dom"
import Layout from "../layout/Layout"
import { Button, Form, Grid, Header } from 'semantic-ui-react'

const ForgotPassword = () => {
    const [email, setEmail] = React.useState<string>('')
    const [isAllowed, setIsAllowed] = React.useState<boolean>(false)
    /**
     * Verifying email submitted by user
     */
    const handlerRecoveryPass = () => {
      // if email is not being passing block the submit
      if (email === undefined || email === '') return
      //verifying e-mail passed
      if (email !== 'joe@email.com') {
        setIsAllowed(true);
        return;
      }
      setIsAllowed(false);
    }
    return (
      <Layout>
        <Grid className="login" columns={2} verticalAlign="middle">
          <Grid.Column width={5}>
  
          </Grid.Column>
          <Grid.Column width={8} className="login-container">
            <Header as='h2' color='black' textAlign='center'>
              Recovery password
            </Header>
            {/* Show a message if data is incorrect */}
            {isAllowed &&
              <Header as='h4' icon color='red' textAlign='center'>
                E-mail not found!
              </Header>
            }
            <Form size='large' className="login-form" onSubmit={handlerRecoveryPass}>
              <div style={{ textAlign: 'left' }}>
                <label>E-mail</label>
              </div>
              <Form.Input
                fluid
                placeholder='joe@email.com'
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <div style={{ paddingLeft: 15, paddingRight: 15, marginTop: 30 }}>
                <Button style={{ backgroundColor: '#1aebb6' }} fluid size='large' type="submit">
                  Recovery
                </Button>
                <br />
                <Link to={'/'}>Back to login</Link>
              </div>
            </Form>
          </Grid.Column>
          <Link to={'need-help'} className="need-help">Need help?</Link>
        </Grid>
    </Layout>
  )
}

export default ForgotPassword
