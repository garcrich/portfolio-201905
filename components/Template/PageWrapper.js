import Nav from './Nav';
import Footer from './Footer';

class PageWrapper extends React.Component {
    render() {
    return (
    <React.Fragment>
        <Nav/>
        {this.props.children}
        <Footer/>
    </React.Fragment>
    )}
}

export default PageWrapper;