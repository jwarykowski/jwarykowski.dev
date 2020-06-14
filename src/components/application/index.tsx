import {
  Button,
  Container,
  Hero,
  Image,
  Link,
  SubTitle,
  Tabs,
  Title,
} from 'reactbulma'
import React from 'react'

export default function Application() {
  return (
    <Hero fullheight medium primary>
      <Hero.Body>
        <Container>
          <Title is="1" spaced>
            jonathan warykowski
          </Title>
          <SubTitle>
            <p>
              A British software developer{' '}
              <Link href="https://lighthouse.io">@lighthouse.io</Link> in
              Melbourne, Australia.
            </p>
            <p>
              Loves{' '}
              <Link href="https://en.wikipedia.org/wiki/JavaScript">#JS</Link>,{' '}
              <Link href="https://www.richmondfc.com.au">#Tigers</Link>,{' '}
              <Link href="https://www.nufc.co.uk">#NUFC</Link> and the
              occasional{' '}
              <Link href="https://en.wikipedia.org/wiki/Fig_roll">
                #FigRoll
              </Link>
              .
            </p>
          </SubTitle>
          <Button class="button is-primary is-inverted">
            <Link href="mailto:name@rapidtables.com">Contact Me</Link>
          </Button>
        </Container>
      </Hero.Body>
      <Hero.Foot>
        <Container>
          <Tabs>
            <ul>
              <li>
                <strong>
                  <a
                    href="https://github.com/jwarykowski/.dotfiles"
                    target="_blank"
                  >
                    .dotfiles
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a href="https://github.com/jwarykowski" target="_blank">
                    github
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a
                    href="https://www.linkedin.com/in/jonathanwarykowski/"
                    target="_blank"
                  >
                    linkedIn
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a href="https://twitter.com/jwarykowski" target="_blank">
                    twitter
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
