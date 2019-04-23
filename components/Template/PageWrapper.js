import Nav from './Nav';
import Footer from './Footer';
import '../../styles/styles.scss';
import Head from 'next/head';

class PageWrapper extends React.Component {
    render() {
    return (
    <React.Fragment>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Playfair+Display:400,900" rel="stylesheet"/>
        </Head>
        <Nav/>
        {this.props.children}
        <Footer/>
    </React.Fragment>
    )}
}

export default PageWrapper;