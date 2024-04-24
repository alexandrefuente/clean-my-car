import { Header, HeaderSubheader, Icon } from "semantic-ui-react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main">
      <div className="bg-green">
        <div className="logo">
          <div>
            <Header as={'h2'} icon color="black" textAlign="center">
              <Icon name="tint" />
              CleanMyCar
              <HeaderSubheader>
                India's first waterless <br /> car cleaning company
              </HeaderSubheader>
            </Header>
          </div>
        </div>
      </div>
      <div>
        { children }
      </div>
    </div>
  )
}

export default Layout
