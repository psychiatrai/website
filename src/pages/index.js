import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
// import Four from '../components/Four'
// import Five from '../components/Five'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="psychiatr.ai - Effective mental healthcare at scale"
          meta={[
            { name: 'description', content: 'psychiatr.ai - Effective mental healthcare at scale' },
            { name: 'keywords', content: 'psychiatrai, psychiatry, psychology, mental health, mental illness' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <Two />
        <Three />
        {/* <Four />
        <Five /> */}
      </Layout>
    )
  }
}

export default Home
