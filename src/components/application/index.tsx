import { Container, Hero, Image, Link, SubTitle, Tabs, Title } from 'reactbulma'
import React from 'react'

export default function Application() {
  return (
    <Hero fullheight medium primary>
      <Hero.Body>
        <Container>
          <Title>jonathan warykowski</Title>
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
                <strong>
                  <a href="https://github.com/jwarykowski" target="_blank">
                    Github
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a
                    href="https://www.linkedin.com/in/jonathanwarykowski/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a href="https://twitter.com/jwarykowski" target="_blank">
                    Twitter
                  </a>
                </strong>
              </li>
            </ul>
          </Tabs>
        </Container>
      </Hero.Foot>
    </Hero>
  )
}
