import React from 'react'
import styled from 'styled-components'
import Link from "next/link"

const MainWrap = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in;
  &:hover {
    > div:nth-of-type(1) {
      transform: scale(1.1);
    }
  }
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
  padding: 10px 10px 0 10px;
  color: #fff;
`

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
  background-size: cover;
`

const Title = styled.h3`
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  transition: all 0.3s ease;
  &:hover {
    a {
      display: flex;
      align-items: center;
      justify-items: flex-start;
      color: #ba349f;
      background: #fff;
      padding: 2px;
      border-radius: 4px;
    }
  }
`

const Author = styled.p`
  color: #ffff;
`

const Views = styled.p``

const VideosNews = ({ image, classname, name, views, title }) => {
  return (
    <MainWrap className={classname}>
      <Wrap
        style={{
          backgroundImage: `url(${image})`
        }}>
      </Wrap>
      <Wrapper>
        <Title>
          <Link href="#">
            <a>{title}</a>
          </Link>
        </Title>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Author>{name}</Author>
          <Views>{views}</Views>
        </div>
      </Wrapper>
    </MainWrap>
  )
}

export default VideosNews