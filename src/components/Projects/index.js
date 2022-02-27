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
          {/* start projects section */}

          <Project data-aos='fade-up' data-offset='1500' data-aos-delay='250'>
            <Project2Background></Project2Background>
            <ProjectInfo>
              <ProjectH1>Hashtology Dapp</ProjectH1>
              <ProjectP> Blockchain|React|Typescript</ProjectP>
              <ProjectButtons>
                <ProjectButton href='https://github.com/lgad31vn/Hashtology-dapp'>
                  {' '}
                  GitHub{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='350'>
            <Project5Background></Project5Background>
            <ProjectInfo>
              <ProjectH1>Search Engine App</ProjectH1>
              <ProjectP> Springboot|React|Typescript</ProjectP>
              <ProjectButtons>
                <ProjectButton href='https://github.com/lgad31vn/CSC-365-fullstack-app/blob/master/README.md'>
                  {' '}
                  GitHub
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='450'>
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

          <Project data-aos='fade-up' data-offset='1500' data-aos-delay='550'>
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

          <Project data-aos='fade-up' data-offset='1500' data-aos-delay='650'>
            <Project3Background></Project3Background>
            <ProjectInfo>
              <ProjectH1>Crowd-Sourced Transcribe</ProjectH1>
              <ProjectP> LAMP stack </ProjectP>
              <ProjectButtons>
                <ProjectButton href='http://3.134.136.76/omeka-s/s/oswego-transcribe/page/welcome'>
                  {' '}
                  Live{' '}
                </ProjectButton>
                <ProjectButton href='https://github.com/CSC380-Team-F'>
                  {' '}
                  GitHub{' '}
                </ProjectButton>
              </ProjectButtons>
            </ProjectInfo>
          </Project>

          <Project data-aos='fade-up' data-offset='1400' data-aos-delay='750'>
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
        </ProjectsRow>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
