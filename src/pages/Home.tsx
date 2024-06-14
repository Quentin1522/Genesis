import { useState, useEffect} from "react";
import Loader from "../components/loader/Loader";
import Header from "../components/header/header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";

const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="wrapperHome">
            {loading ? <Loader/> : (
                <>
                    <Header/>
                    <Banner/>
                    <Footer/>  
                </>
            )}
        </div>
    );
};

export default Home;