import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import TagCloud from "TagCloud";
import { useEffect } from "react";

function Skills() {
    useEffect(() => {
        const container = ".tagcloud";
        const texts = [
            "HTML",
            "CSS",
            "SASS",
            "JS",
            "React",
            "GIT",
            "Github",
            "DSA",
            "C++",
            "JAVA",
            "TailWind",
        ];

        const options = {
            radius: 300,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
        };

        TagCloud(container, texts, options);
    }, []);

    return (
        <section className="" id="">
            <Container>
                <Row className="takeItMid">
                    <Col xs={12} md={6} xl={7}>
                        <section className="skill" id="skills">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="skill-bx wow zoomIn">
                                            <h2 className="skillcolor">
                                                Skills
                                            </h2>
                                            <p>
                                                I have a good foundation in web
                                                development, particularly in
                                                front-end technologies such as
                                                HTML, CSS, SASS, and JS that are
                                                essential for creating dynamic
                                                and responsive web pages.
                                                Additionally, experience with
                                                React helps me to have a strong
                                                understanding of building modern
                                                web applications and user
                                                interfaces. My command on GIT
                                                and Github suggests that I have
                                                experience working
                                                collaboratively on projects and
                                                are comfortable with version
                                                control. I have knowledge of
                                                Data Structures and Algorithms
                                                (DSA) along with your
                                                programming skills in C++ and
                                                JAVA led to a strong background
                                                in computer science
                                                fundamentals. These skills can
                                                be applied to a wide range of
                                                projects, including developing
                                                complex web applications and
                                                creating efficient code.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <span
                            className="tagcloud"
                            data-cursor-text="move  the cursor!"
                        ></span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;
