import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Command from "../components/command"
//import './blog.css'

const ProjectPage = () => {
    /*
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: { path: { eq: "/publications" } } }) {
              edges {
                node {
                    html
                    frontmatter {
                        path
                        type
                    }
                }
              }
            }
        }
    `)

    let edges = data.allMarkdownRemark.edges
    */
    return(
        <Layout>
            <br/>
            <Command command="ls -l blog"></Command>
            <br/>
        </Layout>
    )
}

export default ProjectPage