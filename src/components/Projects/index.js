import React, { useEffect } from 'react';
import { Divider } from '../Divider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsH1,
  ProjectsRow,
  Project,
  ProjectInfo,
  ProjectH1,
  ProjectP,
  ProjectButtons,
  ProjectButton,
  Project1Background,
  Project2Background,
  Project3Background,
  Project4Background,
  Project5Background,
  Project6Background,
} from './ProjectsElements';

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectsH1 data-aos='fade-right' data-offset='300'>
          Projects.
        </ProjectsH1>
        <Divider data-aos='fade-left' data-offset='400' data-aos-delay='300' />
        <ProjectsRow>
          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='300'>
            <Project6Background></Project6Background>
            <ProjectInfo>
              <ProjectH1>Dev Meet Up</ProjectH1>
              <ProjectP> MERN stack </ProjectP>
              <ProjectButtons>
                <ProjectButton href='https://serene-retreat-94411.herokuapp.com/'>
                  {' '}
                  Live{' '}
                </ProjectButton>
                <ProjectButton href='https://github.com/lgad31vn/MERN-WebDevMeetUp'>
                  {' '}
                  GitHub{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='400'>
            <Project4Background></Project4Background>
            <ProjectInfo>
              <ProjectH1>World Time App</ProjectH1>
              <ProjectP> Flutter </ProjectP>
              <ProjectButton href='https://github.com/lgad31vn/WorldTimeApis'>
                {' '}
                GitHub{' '}
              </ProjectButton>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1500' data-aos-delay='500'>
            <Project1Background></Project1Background>
            <ProjectInfo>
              <ProjectH1>Tic Tac Toe</ProjectH1>
              <ProjectP> TypeScript/NextJs </ProjectP>
              <ProjectButtons>
                <ProjectButton href='https://tictactoe2304.netlify.app/'>
                  {' '}
                  Live
                </ProjectButton>
                <ProjectButton href='https://github.com/lgad31vn/tic-tac-toe-next-ts'>
                  {' '}
                  GitHub{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1500' data-aos-delay='500'>
            <Project2Background></Project2Background>
            <ProjectInfo>
              <ProjectH1>AnimalGame</ProjectH1>
              <ProjectP> HTML / CSS / JS</ProjectP>
              <ProjectButtons>
                <ProjectButton href='https://demoanimalgame.netlify.app'>
                  {' '}
                  Live{' '}
                </ProjectButton>
                <ProjectButton href='https://github.com/lgad31vn/JS-animalGame'>
                  {' '}
                  GitHub{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1500' data-aos-delay='700'>
            <Project3Background></Project3Background>
            <ProjectInfo>
              <ProjectH1>DriveThru Menu</ProjectH1>
              <ProjectP> HTML / CSS / JS</ProjectP>
              <ProjectButtons>
                <ProjectButton href='https://logandrivethru.netlify.app'>
                  {' '}
                  Live{' '}
                </ProjectButton>
                <ProjectButton href='https://github.com/lgad31vn/JS-driveThru'>
                  {' '}
                  GitHub{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='600'>
            <Project5Background></Project5Background>
            <ProjectInfo>
              <ProjectH1>Pizza Ordering</ProjectH1>
              <ProjectP> HTML / CSS / JS</ProjectP>
              <ProjectButtons>
                <ProjectButton href='https://pizzaordering.netlify.app'>
                  {' '}
                  Live{' '}
                </ProjectButton>
                <ProjectButton href='https://github.com/lgad31vn/JS-pizzaOrderForm'>
                  {' '}
                  GitHub
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>
        </ProjectsRow>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
