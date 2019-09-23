import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { NewsActivity } from "Components"

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1.5px solid #ba349f;
  margin-bottom: 0.5rem;
  > div {
    font-size: 0.8em;
    color: #ba349f;
  }
`

const Wrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 430px;
  box-sizing: border-box;
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`

class ActivityView extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const urlFetch = fetch('https://api.tvmaze.com/search/shows?q=batman')

    urlFetch.then(res => {
      if (res.status === 200) {
        return res.json()
      }
    }).then(resJson => {
      const datum = resJson.map(item => item.show)
      this.setState({
        data: datum
      })
    })
  }
  render() {
    return (
      <Col md="4">
        <Row>
          <Col md="12">
            <Flex>
              <h3>Activity</h3>
              <div>View Timelines / Filter Activies</div>
            </Flex>
          </Col>
        </Row>
        <Wrapper>
          {
            this.state.data.map((item, i) => {
              return (
                <NewsActivity title={item.name} desc={item.summary} time={item.type} key={i} image={item.image.original} />
              )
            })
          }
        </Wrapper>
      </Col>
    )
  }
}

export default ActivityView