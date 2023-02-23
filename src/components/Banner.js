import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import divImg from "../assets/div1.png";

function Banner() {
  const toRotate = [
    'namaste"',
    'bonjour"',
    'hola"',
    'salve"',
    'konnichiwa"',
    'nǐn hǎo"',
    'guten tag"',
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, [delta]);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">
                <span data-cursor-text="greetings"
                  className="txt-rotate"
                  dataPeriod="1000"
                  data-rotate='[ "namaste",
                  "bonjour",
                  "hola",
                  "Salve",
                  "konnichiwa",
                  "nǐn hǎo",
                  "guten tag" ]'
                >
                  <span className="wrap">"{text}</span>
                </span>
              </span>
              <section id="hero">
                <div class="hero container">
                  <div>
                    <h1 data-cursor-text="myself">I'm Divit Gaur<span></span></h1>
                  </div>
                </div>
              </section>
              <p data-cursor-text="welcome" data-cursor-stick>
                "Hello, I am a skilled software developer with a passion for
                creating innovative and user-friendly applications. With a
                strong focus on frontend web development, Divit brings a unique
                combination of technical expertise and creative flair to every
                project. I have my expertise in both C++ and Java programming
                languages, and a deep understanding of Data Structure and
                Algorithms (DSA).
              </p>
              <button>
                <a href="#contact">Let's Connect</a>
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div data-cursor-text="that's me!" class="slideright">
              <img src={divImg} alt="Div Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
