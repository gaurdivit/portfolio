import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjectPlanner from "../assets/ProjectPlanner.png"
import MonsterAttack from "../assets/MonsterAttack.png"
import Movies from "../assets/Movies.png"
import TrackVisibility from 'react-on-screen';
import MoviesR from "../assets/MoviesR.png"
import Comp from "../assets/Comp.png"
import Portfolio from "../assets/portfolio.png"

import 'animate.css';

function Projects() {

  const projectsJS = [
    {
      title: "Project Planner",
      description: "",
      imgUrl: ProjectPlanner,
      link: "https://github.com/gaurdivit/VanillaJsProjects/tree/main/Planner%20app",
    },
    {
      title: "Monster Attack",
      description: "",
      imgUrl: MonsterAttack,
      link: "https://github.com/gaurdivit/VanillaJsProjects/tree/main/MonsterGame",
    },
    {
      title: "Movies Database",
      description: "",
      imgUrl: Movies,
      link: "https://github.com/gaurdivit/VanillaJsProjects/tree/main/movieDatabase",
    },
  ];

  const projectsReact = [
    {
      title: "Portfolio",
      description: "",
      imgUrl: Portfolio,
      link: "",
    },
    {
      title: "Playlist Database",
      description: "",
      imgUrl: MoviesR,
      link: "https://github.com/gaurdivit/ReactJsProjects/tree/main/songsAndMovies",
    },
    {
      title: "Components",
      description: "",
      imgUrl: Comp,
      link: "https://github.com/gaurdivit/ReactJsProjects/tree/main/comps",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <h2 data-cursor-text="Let's See">Projects</h2>
                  <p>Here are some of my projects<p>
                    For more projects, visit my github :)
                  </p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="second">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="second">ReactJS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="first">JavaScript</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectsJS.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsReact.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Projects;