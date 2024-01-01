import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Command from "../components/command"
//import './blog.css'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: { category: { eq: "blog" } } }, sort: { order: DESC, fields: frontmatter___date }) {
              edges {
                node {
                    html
                    frontmatter {
                        path
                        title
                        subtitle
                        date
                        tags
                    }
                }
              }
            }
        }
    `)

    let edges = data.allMarkdownRemark.edges
    
    console.log(edges)
    return(
        <Layout>
            <br/>
            <Command command="ls -l blog"></Command>
            <br/>
            {edges.map((node, i) => {
                return (
                    <div className="blog_posts">
                        <span style={{fontSize: "25px", fontWeight: "bold"}}><Link to={node.node.frontmatter.path}>{node.node.frontmatter.title}</Link></span>
                        <span style={{fontSize: "15px", fontWeight: "light", paddingLeft: "15px"}}>{node.node.frontmatter.date}</span>
                        <span style={{fontSize: "15px", fontWeight: "light", paddingLeft: "15px"}}>#{node.node.frontmatter.tags}</span>
                        <br/>
                        <span style={{fontSize: "20px"}}>{node.node.frontmatter.subtitle}</span>
                        <br/>                        
                        <br/>
                    </div>
                )
            })}
        </Layout>
    )
}

export default BlogPage