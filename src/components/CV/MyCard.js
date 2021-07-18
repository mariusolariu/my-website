import React from 'react';
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

export default function MyCard({ name, period, logo, location, website }) {
  const card = {
    width: "500px",
    maxHeight: "200px",
    display: "flex",
    flexDirection: "row",
    // border: "1px solid #333",
    // "box-shadow": "0 2px 4px rgba(0, 0, 0, 0.25)",
    // "border-radius": "5px"
  };

  const cardImage = {
    width: "10%",
    padding: "20px 10px",
    // border: "1px solid red",
  };

  const cardContent =
  {
    width: "90%",
    padding: "5px 10px",
    float: "left",
    // border: "1px solid green"
  };

  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "../../../static/admin/companies/diffblue.png" }) {
  //       childImageSharp  {
  //         fluid (maxWidth: 100, maxHeight: 100, quality: 100){
  //           aspectRatio
  //           base64
  //           sizes
  //           src
  //           srcSet
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div style={card}>
      <div style={cardImage}>
        <img
          src={`/companies/${logo}`}
          alt={name}
        />
      </div>

      <div style={cardContent}>
        <h3>{name}</h3>
        <h3>{period}</h3>
        <h3>{location}</h3>
        <h3><a href={website} target='_blank'>{website}</a></h3>
      </div>

    </div>
  )
}