import { Link } from "react-router-dom"
import { Grid, Header, Icon } from "semantic-ui-react"
import Layout from "../layout/Layout"

const NeedHelp = () => {
  return (
    <Layout>
     <Header as='h2' icon color='black' textAlign='center' style={{ marginTop: 100 }}>
        <Icon name='help' circular />
        Need help?
      </Header>
      <Grid>
        <Grid.Column style={{ marginLeft: 50, marginRight: 50 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur in elit at rutrum. Quisque vulputate sagittis ante, in convallis ipsum ornare vel. Integer condimentum imperdiet sapien, et ultrices mauris rhoncus a. Pellentesque fringilla, tellus in viverra ullamcorper, orci lectus bibendum ante, vel mattis mi orci a urna. Sed viverra turpis ac purus dictum, non ultricies risus condimentum. Mauris fermentum justo eget nunc placerat laoreet. Praesent aliquet, massa nec finibus convallis, nisi lectus pulvinar quam, in tincidunt arcu odio sit amet dolor. Nam tincidunt, sem at lobortis ullamcorper, tortor magna interdum lectus, at dictum odio ligula vel odio.
          </p>
          <p>
          Suspendisse malesuada id ex eget hendrerit. Suspendisse accumsan est urna, quis vulputate dolor mollis et. Nunc dui eros, vestibulum sed mi non, blandit tempus velit. Etiam lacus velit, mollis non ex blandit, ornare sagittis ipsum. Aliquam faucibus, lectus at luctus ornare, velit magna lobortis metus, et blandit nisi nibh vel velit. Duis et ultricies lectus, at lacinia massa. Donec commodo magna id diam vulputate, eu pharetra metus blandit. Vestibulum tincidunt pharetra dictum.
          </p>
        </Grid.Column>
      </Grid>
      <Link to={'/'}>Back to login</Link>
    </Layout>
  )
}

export default NeedHelp
