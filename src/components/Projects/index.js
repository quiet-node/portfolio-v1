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
  Project6Background,
} from './ProjectsElements';

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ProjectsContainer id='project'>
      <ProjectsWrapper>
        <ProjectsH1 data-aos='fade-right' data-offset='300'>
          Projects.
        </ProjectsH1>
        <Divider
          data-aos='fade-left'
          data-offset='400'
          data-aos-delay='300'
          light='true'
        />
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
        </ProjectsRow>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
