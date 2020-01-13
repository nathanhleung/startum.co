import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button, { ScrollButton } from '../components/button'

import ross_exterior from '../images/ross_exterior.jpg'

const Hero = styled.div`
  padding-top: 300px;
  background: linear-gradient(rgba(0, 208, 255, 0.9), rgba(0, 208, 255, 0.9)),
    url(${ross_exterior});
  background-attachment: fixed;
  background-size: cover;
  padding-bottom: 50px;

  @media (min-width: 576px) {
    padding-top: 150px;
  }
`

const margins = `
  padding: 1.45rem 1.0875rem;
  max-width: 960px;
  margin: 0 auto;
`

const HeroContent = styled.div`
  ${margins}
  color: #fff;
`

const Process = styled.div`
  ${margins}
  padding-top: 80px;
  padding-bottom: 0;
  background-color: #fff;
  color: #111;
  text-align: center;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  flex: 1;
  padding: 10px;

  @media (min-width: 576px) {
    padding: 30px;
  }
`

const ColContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  padding-top: 40px;
  padding-bottom: 0;
  background: #fff;
  border-radius: 10px;
  height: 100%;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
`

const Icon = styled.i`
  display: block;
  font-size: 8rem;
  margin-bottom: 50px;
`

const Apply = styled.div`
  ${margins}
  background-color: #fff;
  padding-top: 0;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 576px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`

const ApplyContent = styled.div`
  background: rgb(0, 208, 255);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #fff;
  padding: 50px;
  position: relative;
  bottom: -75px;

  @media (min-width: 576px) {
    background: linear-gradient(
        rgba(0, 208, 255, 0.95),
        rgba(0, 208, 255, 0.95)
      ),
      url(${ross_exterior});

    background-attachment: fixed;
    background-size: cover;
  }
`

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero>
        <HeroContent>
          <h1>Michigan&rsquo;s only student-run startup incubator</h1>
          <p>
            We believe that the best way to learn entrepreneurship is by doing.
            StartUM is a startup incubator where you work through every step of
            the entrepreneurial process, from ideation to funding.
          </p>
          <ScrollButton to="process" duration={500} offset={10} smooth large>
            Learn More
          </ScrollButton>
        </HeroContent>
      </Hero>
      <Process id="process">
        <h2>How Does StartUM Work?</h2>
        <p>
          StartUM's curriculum has four key phases. From ideation workshops to
          StartUM grants for founders, we take you through every step of the
          startup journey.
        </p>
        <div style={{ height: '25px', width: '100%' }} />
        <Row>
          <Col>
            <ColContent>
              <Icon className="fas fa-flask" />
              <h4>1. Ideation</h4>
              <p>
                Ideation is the formation of ideas or concepts. At StartUM, you
                will be lead through numerous exercises to help you break the
                current assumptions of different business models and to discover
                the core concepts of innovation.
              </p>
            </ColContent>
          </Col>
          <Col>
            <ColContent>
              <Icon className="fas fa-users" />
              <h4>2. Customer Discovery</h4>
              <p>
                Customer discovery is the process of testing the core
                assumptions of your business by discovering who makes up your
                customer base. Through StartUM, you will learn methods of
                effectively polling and interviewing the general population to
                understand who your customers are.
              </p>
            </ColContent>
          </Col>
        </Row>
        <Row>
          <Col>
            <ColContent>
              <Icon className="fas fa-code" />
              <h4>3. Development</h4>
              <p>
                Create and launch your startup. StartUM has a plethora of
                experienced mentors with experience creating everything from
                websites and mobile apps to brick and mortar commerce and
                services who will help lead your team from conception to launch.
              </p>
            </ColContent>
          </Col>
          <Col>
            <ColContent>
              <Icon className="fas fa-rocket" />
              <h4>4. Funding</h4>
              <p>
                The University of Michigan has many of opportunities for student
                entrepreneurs to gain funding. StartUM will help connect you to
                funding opportunities at the Center for Entrepreneurship and the
                Zell Laurie Institute. StartUM also offers grants to qualified
                entrepreneurs to help get their busineseses off the ground.
              </p>
            </ColContent>
          </Col>
        </Row>
      </Process>
      <Apply>
        <ApplyContent id="apply">
          <h1>Winter 2020 Recruiting</h1>
          <p>
            <h4>Upcoming Info Sessions:</h4>
            Ross Meet the Clubs - Thursday, Jan 16th 4-6pm in Tauber Colloquium
            <br />
            Winterfest - Wednesday, Jan 22nd 4:30-7pm in Michigan League
            <br />
            Info Session #1 - Friday, Jan 17th 5-6pm in R2240
            <br />
            Info Session #2 - Thursday, Jan 23rd 8-9pm in R2210
            <br />
            <br />
            <h4>Recruiting Dates:</h4>
            Application Due - Friday, Jan 24th 11:59pm
            <br />
            Interviews [INVITE ONLY] - Monday, Jan 27th and Tuesday, Jan 28th
            (time TBD)
            <br />
            Social Event [INVITE ONLY] - Thursday, Jan 30th (time TBD)
            <br />
            First Meeting [INVITE ONLY] - Sunday, Jan 2nd (time TBD)
            <br />
            <br />
            <h4>Apply:</h4>
            Our application is open for the Winter 2020 Cohort and linked below.
            No experience is necessary and all grades and majors are welcome to
            apply. Contact the board by email if you have any questions at{' '}
            <a href="mailto:StartUMboard2020@umich.edu">
              StartUMboard2020@umich.edu
            </a>
            .
          </p>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSdlAbjXZxV-6jv_d353_R1nW0Tdtg6l9KhZk9T8pQopkQCxGw/viewform?usp=sf_link"
            target="_blank"
          >
            Apply Now
          </Button>
        </ApplyContent>
      </Apply>
    </Layout>
  )
}

export default IndexPage
