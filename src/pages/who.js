import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Command from "../components/command"
import './who.css'

const WhoPage = () => {
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(frontmatter: { path: { eq: "/who" } }) {
              html
              frontmatter {
                path
                name
                email
                facebook
                twitter
                instagram
                git
                linkedin
                cv
                cv_developer
              }
            }
        }
    `)

    return(
        <Layout>
            <br/>
            <Command command="who"></Command>
            <div className="who_result">
                <span style={{fontSize: "25px"}}>{data.markdownRemark.frontmatter.name}</span><br/>
                <span>{data.markdownRemark.frontmatter.email}</span><br/>
                <span>
                    <a href={data.markdownRemark.frontmatter.facebook}>Facebook</a> / <a href={data.markdownRemark.frontmatter.twitter}>Twitter</a> / 
                    <a href={data.markdownRemark.frontmatter.instagram}> Instagram</a> / <a href={data.markdownRemark.frontmatter.git}>Git</a> /
                    <a href={data.markdownRemark.frontmatter.linkedin}> Linkedin</a> / <a href={data.markdownRemark.frontmatter.cv}>CV (Researcher)</a> / 
                    <a href={data.markdownRemark.frontmatter.cv_developer}>CV (Developer)</a> 
                </span><br/>
                <br/>
                <div className="who_html" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
            </div>
        </Layout>
    )
}

export default WhoPage