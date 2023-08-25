import './index.css';
import Header from '../../components/Header';
import ScrollToTop from '../../components/ScrollUp';

const Under_Construction = () => {
    return (
        <>
        <ScrollToTop/>
            <Header />
            <div className="under-construction">
                <div className="title-bg">
                    <h1>Site en cours de construction...</h1>
                </div>
            </div>
        </>
    )
}

export default Under_Construction
