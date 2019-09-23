import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { MainVideosView, ActivityView } from 'Containers'
import fetch from 'isomorphic-unfetch'

const Wrapper = styled.section`
  background:  #fff2fe; 
  padding: 2rem 0;
`

const VideosActivity = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md="8">
            <MainVideosView title="Videos" subtitle="Browse All Videos" moreIcon="cloud_upload" moreLabel="Upload Your Own Videos" />
          </Col>
          <ActivityView />
        </Row>
      </Container>
    </Wrapper>
  )
}

export default VideosActivity