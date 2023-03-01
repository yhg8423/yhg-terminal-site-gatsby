import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Command from "../components/command"
import './publications.css'

const ProjectPage = () => {
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
    return(
        <Layout>
            <br/>
            <Command command="ls -l publications"></Command>
            <br/>
            {edges.map((node, i) => {
                if(node.node.frontmatter.type === "Full Papers") {
                    return (
                        <div className="publications_result">
                            <span style={{fontSize: "25px", fontWeight: "bold"}}>{node.node.frontmatter.type}</span><br/>
                            <div className="publications_html" dangerouslySetInnerHTML={{ __html: node.node.html }}></div>
                            <br/>
                        </div>
                    )
                }
            })}
            <span style={{fontSize: "25px", fontWeight: "bold"}}>Posters & Workshop Papers</span><br/>
            {edges.map((node, i) => {
                if(node.node.frontmatter.type === "Late-Breaking Works, Posters & Workshop Papers") {
                    return (
                        <div className="publications_result">
                            <div className="publications_html" dangerouslySetInnerHTML={{ __html: node.node.html }}></div>
                            <br/>
                        </div>
                    )
                }
            })}
        </Layout>
    )
}

export default ProjectPage