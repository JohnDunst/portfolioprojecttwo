import React from 'react';
import {useEffect , useState} from 'react';
import axios from 'axios';
import App from '../App';





function About  () {
    // Define the click event handler
    cconst [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Paragraph>{advice}</Paragraph>
        </Wrapper>
    );
};
export default About;