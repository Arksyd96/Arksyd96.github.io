import React from "react";
import styled from "@emotion/styled";
import SectionWrapper from "./SectionWrapper";
import Title from "../Components/Title";
import Button from "../Components/Button";
import { css } from "@emotion/css";

const input_style = css`
    align-self: center;
    display: block;
    width: 40vw;
    font-family: inherit;
    border: none;
    border-radius: 2px;
    padding: 0.6em 0.3em;
    background: transparent;
    backdrop-filter: blur(6px);
    color: #ffffff;
    font-size: 1.2em;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
    margin: 0.6em;
    transition: box-shadow 0.2s ease-in-out;
    ::placeholder {
        color: rgba(30, 30, 30, 0.5);
    }
    :focus {
        outline: none;
        box-shadow: 0px 0px 4px 4px rgba(50, 20, 0, 0.25);
    }
    @media (max-width: 600px) {
        width: 100%;
        margin: 0.5em 0;
        box-sizing: border-box;
    }
`;

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
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

const GetInTouch = styled.h2`
    font-size: 1.8em;
    font-weight: 600;
    margin-bottom: 1em;
    color: orange;
    @media (max-width: 768px) {
        margin-bottom: 0.5em;
        text-align: center;
    }
`;

const Outro = styled.p`
    font-size: 1.1em;
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: justify;
    color: black;
    width: 90%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContactInfo = styled.div`
    list-style: none; 
    margin: 0; 
    padding: 0;
    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    color: orange;
    font-weight: bold;
    :after {
        content: "";
        display: block;
        position: relative;
        opavity: 0.5;
        height: 1px;
        width: 0%;
        background-color: orange;
        transition: width 0.5s ease;
    }
    :hover:after {
        width: 100%;
    }
`;

const Contact = () => {
	let message = {
		to: 'aghiles.kebaili.1998@gmail.com',
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
        <SectionWrapper id="contact" offset={2500} minHeight="100vh" apply color='transparent'>
            <Title number="3" color="black">Contact</Title>
            <Layout>
                <div>
                    <div>
						<GetInTouch>Get in touch</GetInTouch>
						<Outro>
                            I'm currently working full-time at the{'  '}
                            <Link href="https://www.stellantis.com/fr"
                                target="_blank">
                                Henri Becquerel Cancer Center
                            </Link> , but I'm open to any proposals. 
                            Feel free to send me a message; my inbox is always open, 
                            whether you have a question or just want to say hi!
						</Outro>
					</div>
                    <ContactInfo>
                        <Icon className="based-in-container">Rouen
                        , France</Icon>
                        {/* <Icon className="phone-container">+33 605 58 15 71</Icon> */}
                        <Icon className="email-container">aghiles.kebaili@univ-rouen.fr</Icon>
                    </ContactInfo>
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
