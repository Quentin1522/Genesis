import { useEffect } from "react";
import "../loader/loader.scss"

const Loader = () => {
    useEffect  (() => {
        document.body.classList.add('no-scoll');

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className="wrapperLoader">
            <h1>dub</h1>
        </div>
    );
};

export default Loader;