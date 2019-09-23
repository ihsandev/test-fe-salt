import React from 'react'
import Layout from 'Layouts'
import { VideosActivity, PeopleChannel } from "./partials"

const Home = () => (
  <Layout>
    <VideosActivity />
    <PeopleChannel />
  </Layout>
)

export default Home
