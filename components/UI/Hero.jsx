import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import BgAnimation from './BackgroundAnimation';
import Link from "next/link";
import heroImg from "../../public/images/hero2.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Moses Ezechukwu</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
              I have robust experience building amazing front-end projects both independently and as part of a team.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Connect on GitHub</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="#">Linkedin</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
            <div className="hero__img"><BgAnimation /></div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
