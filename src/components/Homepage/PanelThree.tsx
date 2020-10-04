import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#16181E",
      position: "relative",
      overflow: 'hidden',
    },
    title: {
      fontFamily: "Playfair Display",
      color: "white",
      fontSize: "5rem",
      lineHeight: "6.5rem",
      fontWeight: "bold",
      [theme.breakpoints.down(470)]: {
        fontSize: '4rem',
        lineHeight: '4.5rem',
        paddingBottom: '1rem',
      },
    },
    subtitle: {
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.2rem",
      lineHeight: "1.5rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: "1rem",
      [theme.breakpoints.down(470)]: {
        fontSize: '1rem',
      },
    },
    titleContainer: {
      textAlign: "center",
    },
    paragraph: {
      paddingTop: "1rem",
      color: "white",
      maxWidth: "30rem",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "Lato, sans-serif",
      fontWeight: 500,
      fontSize: "1.1rem",
      [theme.breakpoints.down(470)]: {
        fontSize: '1.1rem',
      },
    },
    image: {
      top: 0,
      objectFit: "cover",
      height: "30rem",
      position: "absolute",
      filter: "brightness(40%)",
      [theme.breakpoints.down(470)]: {
        height: '40rem',
      },
      [theme.breakpoints.down(330)]: {
        height: '45rem',
      },
    },
    text: {
      position: "absolute",
      zIndex: 2,
      left: 0,
      right: 0,
      top: '3rem',
      [theme.breakpoints.down(615)]: {
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
      },
    },
  })
)
export default function PanelThree() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "rice.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>Our Story</div>
          <div className={classes.subtitle}>About Us</div>
        </div>
        <div className={classes.paragraph}>
          Here at Mama Lee’s Kitchen, we offer the easiest and the best way to
          get authentic Korean food. We offer a wide variety of delicious Korean
          casual dishes and authentic side dishes. We are located on 51 Avenue,
          couple of blocks from Southgate Mall. Our Special Combo meals are a
          great way of experiencing different dishes. You can order through the
          delivery Apps like Skip The Dishes or simply walk-in for a quick
          take-out. We also do direct delivery on special orders. Come try us
          out.
        </div>
      </div>

      <Img fluid={data.image.childImageSharp.fluid} className={classes.image} />
    </div>
  )
}
