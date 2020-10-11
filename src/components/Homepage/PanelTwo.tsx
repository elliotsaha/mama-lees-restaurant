import React, { useState } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"
import Slider from "react-slick"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#16181E",
      paddingTop: "2rem",
      overflow: "auto",
      paddingBottom: "2rem",
    },
    title: {
      borderLeft: "0.5rem solid #CE995D",
      fontFamily: "Playfair Display, sans-serif",
      fontWeight: "bold",
      paddingLeft: "1rem",
      fontSize: "3.75rem",
      lineHeight: "4rem",
      marginLeft: "2.25rem",
      color: "white",
      marginRight: '0.25rem',
      letterSpacing: "0.15rem",
      [theme.breakpoints.down(690)]: {
        marginLeft: '0.8rem',
        fontSize: '3rem',
        lineHeight: '3.4rem',
      },
      [theme.breakpoints.down(510)]: {
        marginLeft: '0.8rem',
        fontSize: '2.75rem',
        lineHeight: '3.3rem',
      },
      [theme.breakpoints.down(442)]: {
        marginLeft: '0.8rem',
        fontSize: '2.2rem',
        lineHeight: '2.7rem',
      },
      [theme.breakpoints.down(356)]: {
        marginLeft: '0.8rem',
        fontSize: '1.9rem',
        lineHeight: '2.3rem',
      },
    },
    sub: {
      paddingLeft: "0.5rem",
      fontSize: "1.1rem",
      lineHeight: "1.5rem",
      textTransform: "uppercase",
      fontFamily: "Gilroy, sans-serif",
      letterSpacing: "1rem",
      [theme.breakpoints.down(690)]: {
        paddingLeft: '0.2rem'
      },
    },
    image: {
      borderRadius: '0.15rem',
      width: "100%",
      objectFit: "cover",
      height: "22rem",
      marginLeft: '1.25rem',
      marginRight: '1.25rem',
      [theme.breakpoints.down(1200)]: {
        marginLeft: '0.8rem',
        marginRight: '0.8rem',
      },
    },
    imageCarousel: {
      marginTop: "3rem",
    },
    imageFlex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  })
)
export default function PanelTwo() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/(Featured)/" } }
        sort: { fields: [frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 75) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0px",
    touchMove: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "0px",
          touchMove: false,
          swipe: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "0px",
          touchMove: false,
          swipe: false,
        },
      },
      {
        breakpoint: 690,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          pauseOnHover: false,
          autoplaySpeed: 1000,
          centerMode: true,
          centerPadding: "0px",
          touchMove: false,
          swipe: false,
        },
      },
    ],
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className={classes.sub}>Welcome Home</div>
        Our Authentic <br />
        and Fresh Korean Cuisines
      </div>
      <div className={classes.imageCarousel}>
        <div>
          <Slider {...settings}>
            {data.allMarkdownRemark.edges.map((obj: any) => {
              return (
                <div key={obj.node.frontmatter.title}>
                  <div className={classes.imageFlex}>
                    <Img
                      fluid={obj.node.frontmatter.image.childImageSharp.fluid}
                      alt={obj.node.frontmatter.title}
                      className={classes.image}
                    />
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
