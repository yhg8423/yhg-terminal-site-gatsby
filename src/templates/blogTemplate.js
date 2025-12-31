import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Command from "../components/command"
import "./post.css"

export default function Template({ data }) {
  const { markdownRemark: { frontmatter, html } } = data;
  console.log(data, html)
  const tags = frontmatter.tags;
  const thumbnail = frontmatter.thumbnail?.childImageSharp?.fixed?.src;

  return (
    <Layout>
        {thumbnail && (
          <Helmet>
            <meta property="og:image" content={thumbnail} />
            <meta name="twitter:image" content={thumbnail} />
          </Helmet>
        )}
        <br/>
        <Command command={"vi " + frontmatter.title + " (" + frontmatter.date +")"}></Command>
        <br/>
        <div className="post">
            <div>
              <h1>{frontmatter.title}</h1>
              <span style={{fontSize: "25px"}}>{frontmatter.subtitle}</span>
            </div>
            <br/>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        subtitle
        tags
        category
        thumbnail {
          childImageSharp {
            fixed(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
