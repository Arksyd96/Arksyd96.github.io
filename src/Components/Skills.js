import React from 'react'
import styled from '@emotion/styled'
import SectionWrapper from '../Containers/SectionWrapper';
import Title from './Title'

const skills = require('../../static-data/skills.json')

const SkillsList = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, 25vw);
    transition: all 0.3s ease-in-out;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, 100%);
    }
`;

const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const SkillTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
`;

const SkillDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
`;

const SkillLogo = styled.span`
    background-color: #FFFFFF;
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 4px 4px rgba(150, 150, 150, 0.35);
`;

const Image = styled.img`
    width: ${props => props.size};
    height: ${props => props.size};
    align-self: center;
`;


const Skills = props => {
    return (
        <SectionWrapper id="home" offset={500} minHeight="100vh" color="orange">
            <Title number="3" color="#FFFFFF">
                Skills
            </Title>
            <SkillsList>
                {skills.map((skill, key) => {
                    return (
                        <Skill key={key}>
                            <SkillLogo>
                                <Image src={skill.link} size={skill.size}/>
                            </SkillLogo>
                            <SkillTitle>{skill.skill}</SkillTitle>
                            <SkillDescription>{skill.description}</SkillDescription>
                        </Skill>
                    )
                })}
            </SkillsList>
        </SectionWrapper>
    )
}

export default Skills;