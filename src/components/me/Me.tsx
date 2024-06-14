import { useEffect, useState } from "react";
import "../me/me.scss";

const Me = () => {
    const [animatedTitle, setAnimatedTitle] = useState("");
    const [secondAnimatedTitle, setSecondAnimatedTitle] = useState("");

    const title = "Quentin HORNECK";
    const secondTitle = "Développeur Front-end React";

    useEffect(() => {
        let titleIndex = 0;
        let secondTitleIndex = 0;

        const titleInterval = setInterval(() => {
            if (titleIndex <= title.length) {
                setAnimatedTitle(title.substring(0, titleIndex));
                titleIndex++;
            } else {
                clearInterval(titleInterval);
            }
        }, 40);

        setTimeout(() => {
            const secondTitleInterval = setInterval(() => {
                if (secondTitleIndex <= secondTitle.length) {
                    setSecondAnimatedTitle(secondTitle.substring(0, secondTitleIndex));
                    secondTitleIndex++;
                } else {
                    clearInterval(secondTitleInterval);
                }
            }, 40);
        }, 40 * (title.length + 1));

        return () => {
            clearInterval(titleInterval);
        };
    }, []);

    return (
        <div className="wrapperMe">
            <h1>{animatedTitle}</h1>
            <h2>{secondAnimatedTitle}</h2>
        </div>
    );
};

export default Me;
