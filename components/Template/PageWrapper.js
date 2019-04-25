import Nav from './Nav';
import Footer from './Footer';
import '../../styles/styles.scss';
import Head from 'next/head';

const PageWrapper = (props) => (
            <React.Fragment>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display:400,900" rel="stylesheet" />
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"
                    />
                </Head>
                <Nav />
                {props.children}
                <Footer />
            </React.Fragment>
        )
        
export default PageWrapper;