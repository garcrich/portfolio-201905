import Nav from './Nav';
import Footer from './Footer';
import '../../styles/styles.scss';

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