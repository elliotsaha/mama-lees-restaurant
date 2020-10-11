import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "@material-ui/core/Button"
import Img from "gatsby-image"
import Layout from "../components/layout"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#E1E1EB",
      zIndex: 1,
    },
    imageContainer: {
      overflow: "hidden",
    },
    imageOuter: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "45%",
      height: "100%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
    image: {
      height: "105%",
      objectFit: "cover",
      filter: "brightness(40%)",
    },
    text: {
      flexDirection: "column",
      overflow: "hidden",
      textTransform: "uppercase",
      letterSpacing: "1.5rem",
      marginLeft: "0.75rem",
      textAlign: "center",
      width: "100%",
      height: "87vh",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "5rem",
      lineHeight: "6rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
      [theme.breakpoints.down(950)]: {
        fontSize: "2.5rem",
        lineHeight: "4rem",
      },
      [theme.breakpoints.down(680)]: {
        fontSize: "2rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down(530)]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
        letterSpacing: "0.5rem",
        marginLeft: "0.05rem",
      },
    },
    buttonContainer: {
      lineHeight: 0,
      marginTop: "0.8rem",
      textAlign: "center",
    },
    button: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 600,
      color: "white",
      background: "linear-gradient(to right, #CE995D, #CE995D) no-repeat",
      padding: "0.8rem",
      textTransform: "none",
      fontSize: "1rem",
      paddingRight: "1.25rem",
      paddingLeft: "1.25rem",
      [theme.breakpoints.down(872)]: {
        fontSize: "0.9rem",
        padding: "0.65rem",
      },
    },
    link: {
      textDecoration: 'none',
    },
  })
)
export default function PanelOne() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "rice.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 65) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <div className={classes.imageOuter}>
            <Img
              fluid={data.image.childImageSharp.fluid}
              className={classes.image}
              loading="eager"
              alt="thankyou"
            />
          </div>
        </div>
        <div>
          <div className={classes.text}>
            Thank You{" "}
            <div className={classes.buttonContainer}>
              <Link to="/" className={classes.link}>
                <Button className={classes.button}>
                  Back To Homepage &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
