import React, { useState } from 'react';
import '../../Modal.css';
import styled from 'styled-components/macro';
import { ExtButton } from '../Services/ButtonElement';

const Form = (props) => {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [message, setMessage] = useState("")
      const [success, setSuccess] = useState(false)
    
    
    const handleSubmit = e => {
        fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contacttest", name, email, message })
        })
        .then(() => {
            // alert("Success!")
            setSuccess(true)
        })
        .catch(error => alert(error));

        e.preventDefault();
        props.setIsModal(false)
    };


    const handleChange = e => {
        if(e.target.name === "name")
        {setName(e.target.value)}
        else if (e.target.name === "email"){
            setEmail(e.target.value)
        }
        else if (e.target.name === "message"){
            setMessage(e.target.value)
        }
    }
    

	return (
        <div id="open-modal" className="modal-window">
            <div >
                <a href="#contactpage" title="Close" className="modal-close" onClick={props.handleClick}>Close</a>
                <Formulaire className="waypoint animated pop-in" success={success} data-animation="pop-in" data-delay=".5s" id="contact-form" data-netlify="true" onSubmit={handleSubmit}>
                    <input placeholder="Name" type="text" name="name" onChange={handleChange} value={name} required/>
                    <input placeholder="Enter email" type="email" name="email" onChange={handleChange} value={email} required/>
                    <textarea placeholder="Your Message" type="text" name="message" rows="6" onChange={handleChange} value={message} required></textarea>
                    {/*  */}
                    <Submit type="submit" >SUBMIT</Submit>
                </Formulaire>
                <Success success={success}>
                    <div>
                        Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span>
                    </div>
                    <ExtButton to ='' href="#contactpage"
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={1} 
                        dark={0}
                    >Close
                    </ExtButton>
                </Success>

                <input type="hidden" name="form-name" value="contacttest" />
            </div>
        </div>
		
	);
};

export default Form;

const Formulaire = styled.form`
    display: ${({success}) => success ? 'none' : 'flex'};
    flex-direction: column;
    width: clamp(300px, 50vw, 900px);
    margin: 3rem auto;
    padding: 1rem;
    
    input, textarea {
        background: #0A192F;
        border: 0;
        box-sizing: border-box;
        color: #fff;
        display: block;
        font-size: 12pt;
        margin-bottom: 3px;
        outline: none;
        padding: 10px 15px;
        width: 100%;
        border-radius: 4px;
        border: 3px solid #0A192F;
        border-radius: 0.4rem;

        &:focus {
            box-sizing: border-box;
            border: 3px solid #64FFDA;
            box-shadow: 2px 2px #0A192F;
        }
    }
`

const Submit = styled.button`
    padding: 1.2rem;
    background: #0A192F;
    color: #64FFDA;
    border-color: #64FFDA;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    /* font-size: 25px; */

    &:hover {
            /* transform: translateY(-1.5px); */
            transition: all 0.3s ease-in-out;
            color: #0A192F;
            background: #64FFDA;
    }
`

const Success = styled.div`
    display: ${({success}) => success ? 'flex' : 'none'};
    color: #fefefe;
    flex-direction: column;
    padding: 1rem;

    & > div {
        margin: 1rem;   
    }

    a {
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
      }
`