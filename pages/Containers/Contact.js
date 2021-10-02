import React from "react";
import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import Title from "../Components/Title";
import Button from "../Components/Button";
import { css } from "@emotion/css";
// import "../global-styles.css";

const input_style = css`
    align-self: center;
    display: block;
    width: 40vw;
    font-family: inherit;
    border: none;
    border-radius: 0.2em;
    padding: 0.6em 0.3em;
    background: transparent;
    backdrop-filter: blur(6px);
    color: #ffffff;
    font-size: 1.2em;
    box-shadow: 0px 0px 4px 4px rgba(150, 150, 150, 0.35);
    margin: 0.6em;
    transition: box-shadow 0.2s ease-in-out;
    ::placeholder {
        color: rgba(200, 200, 200, 0.5);
    }
    :focus {
        outline: none;
        box-shadow: 0px 0px 4px 4px rgba(150, 150, 150, 0.8);
    }
`;

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

const Icon = styled.li`
    display: flex;
    alignItems: center;
    list-style: none;
    margin: 10px 5vw 10px 0px;
    :before {
        content: '';
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        margin-right: 5px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`

const Contact = () => {
	let message = {
		to: 'aghiles.kebaili@etu.u-paris.fr',
		from: '',
		subject: '',
		body: ''
	}

	const emailOnChange = (e) => {
		message.from = e.target.value;
	}

	const subjectOnChange = (e) => {
		message.subject = e.target.value;
	}

	const bodyOnChange = (e) => {
		message.body = e.target.value;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		message.from = e.target.email.value;
		message.subject = e.target.subject.value;
		message.body = e.target.body.value;
		window.open(`mailto:${message.to}?subject=${message.subject}&body=${message.body}`);
	}

    return (
        <SectionWrapper id="contact" offset={1400} minHeight="100vh" apply>
            <Title number="3">Contact</Title>
            <Layout>
                <div>
                    <div>
						<h3 style={{fontWeight: 600, fontSize: '1.6em', color: 'orange'}}>Get in touch</h3>
						<div style={{width: '30vw', marginBottom: '20px'}}>
							I'm currently looking for internship opportunities in Paris. <br /> 
							Feel free to send me a message, my inbox is always open 
							whether for a question or just to say hi!
						</div>
					</div>
                    <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
                        <Icon className="based-in-container">Pontoise, Île-de-France, France</Icon>
                        <Icon className="phone-container">+33 605 58 15 71</Icon>
                        <Icon className="email-container">aghiles.kebaili@etu.u-paris.fr</Icon>
                    </ul>
                </div>
                <Form>
                    <input
                        className={input_style}
                        type="text"
                        id="name"
                        placeholder="Name"
                        onChange={subjectOnChange}
                    />
                    <input
                        className={input_style}
                        type="text"
                        id="email"
                        placeholder="E-mail"
                        onChange={emailOnChange}
                    />
                    <textarea
                        className={input_style}
                        style={{ height: "20vh", marginBottom: "1em", resize: 'vertical' }}
                        type="text"
                        placeholder="Message"
                        onChange={bodyOnChange}
                    />
                    <Button center orange label={"Send message"} onClick={handleSubmit}/>
                </Form>
            </Layout>
        </SectionWrapper>
    );
};

export default Contact;
