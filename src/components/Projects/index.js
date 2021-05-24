import React, { useEffect } from "react";
import { Divider } from "../Divider";
import { IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsH1,
  ProjectsRow,
  Project,
  ProjectInfo,
  ProjectH1,
  ProjectP,
  ProjectButton,
  Project1Background,
  Project2Background,
  Project3Background,
  Project4Background,
  Project5Background,
  Project6Background,
} from "./ProjectsElements";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectsH1 data-aos="fade-right" data-offset="300">
          Projects.
        </ProjectsH1>
        <Divider data-aos="fade-left" data-offset="400" data-aos-delay="300" />
        <ProjectsRow>
          <Project
            data-aos="fade-right"
            data-offset="1500"
            data-aos-delay="300"
          >
            <Project1Background></Project1Background>
            <ProjectInfo>
              <ProjectH1>Old Portfolio</ProjectH1>
              <ProjectP> HTML / CSS </ProjectP>
              <ProjectButton>
                {" "}
                View project <IoIosArrowForward />{" "}
              </ProjectButton>
            </ProjectInfo>
          </Project>

          <Project data-aos="fade-down" data-offset="1500" data-aos-delay="500">
            <Project2Background></Project2Background>
            <ProjectInfo>
              <ProjectH1>AnimalGame</ProjectH1>
              <ProjectP> HTML / CSS / JS</ProjectP>
              <ProjectButton>
                {" "}
                View project <IoIosArrowForward />{" "}
              </ProjectButton>
            </ProjectInfo>
          </Project>

          <Project data-aos="fade-left" data-offset="1500" data-aos-delay="700">
            <Project3Background></Project3Background>
            <ProjectInfo>
              <ProjectH1>DriveThru Menu</ProjectH1>
              <ProjectP> HTML / CSS / JS</ProjectP>
              <ProjectButton>
                {" "}
                View project <IoIosArrowForward />{" "}
              </ProjectButton>
            </ProjectInfo>
          </Project>

          <Project
            data-aos="fade-right"
            data-offset="1400"
            data-aos-delay="400"
          >
            <Project4Background></Project4Background>
            <ProjectInfo>
              <ProjectH1>World Time App</ProjectH1>
              <ProjectP> Flutter </ProjectP>
              <ProjectButton>
                {" "}
                View project <IoIosArrowForward />{" "}
              </ProjectButton>
            </ProjectInfo>
          </Project>

          <Project data-aos="fade-up" data-offset="1400" data-aos-delay="600">
            <Project5Background></Project5Background>
            <ProjectInfo>
              <ProjectH1>Pizza Ordering</ProjectH1>
              <ProjectP> HTML / CSS / JS</ProjectP>
              <ProjectButton>
                {" "}
                View project <IoIosArrowForward />{" "}
              </ProjectButton>
            </ProjectInfo>
          </Project>

          <Project data-aos="fade-left" data-offset="1400" data-aos-delay="800">
            <Project6Background></Project6Background>
            <ProjectInfo>
              <ProjectH1>Store Management</ProjectH1>
              <ProjectP> Java </ProjectP>
              <ProjectButton>
                {" "}
                View project <IoIosArrowForward />{" "}
              </ProjectButton>
            </ProjectInfo>
          </Project>
        </ProjectsRow>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
