import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { MainChannelView, MainDocumentView, ChannelView } from 'Containers'

const Wrapper = styled.section`
  background: #fff2fe;
  padding: 2rem 0 4rem 2rem;
`

class PeopleChannel extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col md="8">
              <Row>
                <Col md="12">
                  <MainChannelView title="People" subtitle="View All" moreIcon="all_out" moreLabel="Show Your Work" />
                </Col>
                <Col md="12" style={{ marginTop: '50px' }}>
                  <MainDocumentView title="Documents" subtitle="Browse All Document" moreIcon="add_circle_outline" moreLabel="Share Your Document" />
                </Col>
              </Row>
            </Col>
            <ChannelView />
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default PeopleChannel