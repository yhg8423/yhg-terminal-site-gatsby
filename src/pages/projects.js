import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Command from "../components/command"

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: { path: { eq: "/projects" } } }) {
              edges {
                node {
                    html
                    frontmatter {
                        path
                        name
                        type
                        status
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
            <Command command="ls -l projects, works, activities"></Command>
            <br/>
            {edges.map((node, i) => {
                if(node.node.frontmatter.status === "ongoing") {
                    return (
                        <div className="projects_result">
                            <span style={{fontSize: "25px", fontWeight: "bold"}}>{node.node.frontmatter.name}</span><br/>
                            <span>#{node.node.frontmatter.type}  #{node.node.frontmatter.status}</span><br/>
                            <div className="projects_html" dangerouslySetInnerHTML={{ __html: node.node.html }}></div>
                            <br/>
                        </div>
                    )
                }
            })}
            {edges.map((node, i) => {
                if(node.node.frontmatter.status === "finished") {
                    return (
                        <div className="projects_result">
                            <span style={{fontSize: "25px", fontWeight: "bold"}}>{node.node.frontmatter.name}</span><br/>
                            <span>#{node.node.frontmatter.type}  #{node.node.frontmatter.status}</span><br/>
                            <div className="projects_html" dangerouslySetInnerHTML={{ __html: node.node.html }}></div>
                            <br/>
                        </div>
                    )
                }
            })}
        </Layout>
    )
}

export default ProjectPage