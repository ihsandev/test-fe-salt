import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { VideosNews, Icon } from 'Components'
import fetch from 'isomorphic-unfetch'


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 20vh 20vh 20vh;
  overflow: hidden;
  grid-gap: 1.1rem;
  .item {
    background-size: cover;
    background-repeat: no-repeat;
    h3 {
      font-size: 0.8em;
      padding: 0;
    }
    p {
      padding: 0;
      font-size: 0.6em;
    }
  }
  .item1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    h3 {
      font-size: 1.5em;
    }
    p {
      padding: 0;
      font-size: 0.8em;
    }
  }
  @media screen and (max-width: 600px) {
    .item1 {
        grid-column: 1 / span 3;
      }
      grid-template-rows: 20vh 20vh 20vh 20vh;
    }
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  > div {
    color: #ba349f;
  }
`
const More = styled.div`
  background-color: #b560a4;
  display: flex;
  justify-content:center;
  justify-items: center;
  align-items: center;
  color: #fff;
  padding: 0 15px;
  font-weight: bolder;
  font-size: 1em;
  cursor: pointer;
  i {
    margin-right: 1rem;
    font-size: 2em;
    cursor: pointer;
  }
  label {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    label {
      font-size: 0.7em;
    }
  }
`

class MainChannelView extends Component {
  constructor() {
    super()
    this.state = {
      channel: []
    }
  }
  componentDidMount() {
    const urlFetch = fetch(`http://api.tvmaze.com/shows/1/cast`)

    urlFetch.then(res => {
      if (res.status === 200) {
        return res.json()
      }
    }).then(resJson => {
      const datum = resJson.map(item => item.person)
      this.setState({
        channel: datum
      })
    })
  }

  render() {
    return (
      <>
        <Row>
          <Col md="8">
            <Flex>
              <h3>{this.props.title}</h3>
              <div>{this.props.subtitle}</div>
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Grid>
              {
                this.state.channel.splice(0, 5).map((item, i) => {
                  return (
                    <VideosNews title={item.name} name={item.country.name} key={i} classname={i === 0 ? 'item item1' : 'item'} image={item.image.original} />
                  )
                })
              }
              <More>
                <Icon name={this.props.moreIcon} />
                <label>{this.props.moreLabel}</label>
              </More>
            </Grid>
          </Col>
        </Row>
      </>
    )
  }
}

export default MainChannelView