import { Container, Hero, Image, Link, SubTitle, Tabs, Title } from 'reactbulma'
import React from 'react'

export default function Application() {
  return (
    <Hero fullheight medium primary>
      <Hero.Body>
        <Container>
          <Title>jonathan chrisp</Title>
          <SubTitle>
            A British Javascript Developer{' '}
            <Link href="https://lighthouse.io">@lighthouse.io</Link> in
            Melbourne, Australia.
          </SubTitle>
        </Container>
      </Hero.Body>
      <Hero.Foot>
        <Container>
          <Tabs>
            <ul>
              <li>
                <a href="https://github.com/jonathanchrisp" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jonathanchrisp/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jonathanchrisp" target="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </Tabs>
        </Container>
      </Hero.Foot>
    </Hero>
  )
}
