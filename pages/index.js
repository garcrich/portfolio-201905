import PageWrapper from '../components/Template/PageWrapper'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YouTube from 'react-youtube'

const Index = () => (
    <PageWrapper>
        <Container>
            <Row>
                <Col lg={4}>
                <h2>Hello Next.js</h2>
                </Col>
            </Row>
        </Container>
    </PageWrapper>
  )
  
  export default Index;