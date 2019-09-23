import React from 'react'
import Layout from 'Layouts'
import VideosActivity from "./partials/VideosActivity"
import PeopleChannel from "./partials/PeopleChannel"

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <VideosActivity />
        <PeopleChannel />
      </Layout>
    )
  }
}

export default Home
