import React, { Component } from 'react'
import styled from 'styled-components'
import { ChannelItem } from 'Components'
import { Row, Col } from 'reactstrap'
import fetch from 'isomorphic-unfetch'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1.4rem;
  overflow-y: auto;
  overflow-x: hidden;
  height: 600px;
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

class ChannelView extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    const urlFetch = fetch(`http://api.tvmaze.com/seasons/1/episodes`)
    urlFetch.then(res => {
      if (res.status === 200) {
        return res.json()
      }
    }).then(resJson => {
      this.setState({
        data: resJson
      })
    })
  }
  render() {
    console.log(this.state.data)
    return (
      <Col md="4">
        <Row>
          <Col md="12">
            <Flex>
              <h3>Channels</h3>
              <div>Browse All Channel</div>
            </Flex>
          </Col>
        </Row>
        <Wrapper>
          {
            this.state.data.splice(0, 20).map((item, i) => {
              return (
                <ChannelItem key={i} label={item.name} image={item.image.original} />
              )
            })
          }
        </Wrapper>
      </Col>
    )
  }
}

export default ChannelView