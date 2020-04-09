import React, { useEffect, useState} from "react";
import APIService from "../Services/APIService";

//class AboutPage extends Component{
const AboutPage = () => {
    const [Message,setMessage] = useState("");
    useEffect(()=>{
        let apiservice = new APIService();
        apiservice.GetRoot().then(response => setMessage(response));
    },[Message])
    return(
        <>
            <h1>{Message}</h1>
        </>
    )
}

export default AboutPage;