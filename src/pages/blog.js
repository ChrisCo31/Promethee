import React from 'react'
import Layout from '../components/Layout'
import BlogIndex from '../components/BlogIndex'


class Blog extends React.Component {
    render () {
        return (
            <Layout>
            < BlogIndex />     
            </Layout>
            
        )
    }
}
export default Blog