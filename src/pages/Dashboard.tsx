import { Button, Header, Icon } from "semantic-ui-react"
import Layout from "../layout/Layout"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  const data = localStorage.getItem('user');
  const [user] = useState<string>(data as string)

  // In the userEffect on mount page verify if has user
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [navigate, user])

  // Make a user logout clearing the localstorage
  const logout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }
  return (
    <Layout>
      <Header style={{ marginTop: 30 }}>
        User logged: {user}
        <Button icon color="red" onClick={ logout } style={{ marginLeft: 10 }}>
          <Icon name='power off' />
        </Button>
      </Header>
    </Layout>
  )
}

export default Dashboard
