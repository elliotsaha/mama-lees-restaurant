import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "@material-ui/core/Button"
import Img from "gatsby-image"
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
      filter: "brightness(80%)",
    },
    text: {
      flexDirection: "column",
      overflow: "hidden",
      textAlign: "center",
      width: "100%",
      height: "100vh",
      fontWeight: "bolder",
      fontSize: "5rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
    },
    title: {
      fontFamily: "Playfair Display, sans-serif",
      lineHeight: "5.75rem",
      [theme.breakpoints.down(555)]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
    },
    sub: {
      textTransform: "uppercase",
      fontFamily: "Gilroy",
      fontSize: "1.25rem",
      letterSpacing: "0.5rem",
      lineHeight: "5rem",
      [theme.breakpoints.down(555)]: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        padding: "1.5rem",
      },
    },
    icon: {
      width: "4rem",
      marginLeft: "1rem",
      marginRight: "1rem",
      borderRadius: "1rem",
      [theme.breakpoints.down(555)]: {
        marginLeft: "0.6rem",
        marginRight: "0.6rem",
        width: "3.6rem",
      },
      transition: "all 0.5s",
      "&:hover": {
        filter: "brightness(0.75)",
      },
    },
    flexContainer: {
      display: "flex",
      flexDirection: "row",
    },
    location: {
      fontSize: "1rem",
      fontFamily: "Gilroy, sans-serif",
      position: "absolute",
      bottom: "3rem",
      [theme.breakpoints.down(400)]: {
        fontSize: '0.9rem',
        marginLeft: "0.6rem",
        marginRight: "0.6rem",

      },
    },
  })
)
export default function PanelOne(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "PanelOne.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      skipthedishes: file(relativePath: { eq: "skipthedishes.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ubereats: file(relativePath: { eq: "ubereats.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      doordash: file(relativePath: { eq: "doordash.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 65) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div className={classes.imageOuter}>
          <Img
            fluid={data.image.childImageSharp.fluid}
            className={classes.image}
            loading="eager"
            alt="Buildings"
          />
        </div>
      </div>
      <div>
        <div className={classes.text}>
          <div className={classes.title}>
            Mama Lee's <br /> Kitchen
          </div>
          <div className={classes.sub}>Edmonton's Hidden Gem</div>
          <div className={classes.flexContainer}>
            <a
              href="https://www.doordash.com/store/Mama-Lee-s-Kitchen-Edmonton-149841/en-CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={data.doordash.childImageSharp.fluid}
                className={classes.icon}
              />
            </a>
            <a
              href="https://www.ubereats.com/ca/edmonton/food-delivery/mama-lees-kitchen/kIzsK0TZSgCv3gu9Lol0mw?ad_id=459292784604&campaign_id=10949109101&gclid=CjwKCAjw8MD7BRArEiwAGZsrBX3YsmEaXFbvdDJcVWqIkc4MKHk3NEKsPE9DuZcVgnSorqJFC2k_KRoCPxsQAvD_BwE&gclid=CjwKCAjw8MD7BRArEiwAGZsrBX3YsmEaXFbvdDJcVWqIkc4MKHk3NEKsPE9DuZcVgnSorqJFC2k_KRoCPxsQAvD_BwE&gclsrc=aw.ds&kw=&kwid=dsa-1136820532232&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1hbWElMjBMZWUncyUyMEtpdGNoZW4lMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKLTdUTjJVZ2ZvRk1SMEpDMFRObjItaEUlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTMuNDg4MTMlMkMlMjJsb25naXR1ZGUlMjIlM0EtMTEzLjUwNTYzJTdE&placement=&utm_campaign=CM2049465-search-google-nonbrand_32_-99_CA-National_e_all_acq_cpc_en_DSA_Exact__dsa-1136820532232_459292784604_110469673827_b_c&utm_source=AdWords_NonBrand"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={data.ubereats.childImageSharp.fluid}
                className={classes.icon}
              />
            </a>
            <a
              href="https://www.skipthedishes.com/mama-lees-kitchen-avenue-northwest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={data.skipthedishes.childImageSharp.fluid}
                className={classes.icon}
              />
            </a>
          </div>
          <div className={classes.location}>
            10633 51 Ave NW Edmonton, AB T6H 0K8 <br />
            Mon-Sat: 11:00-8:00 Sun: Closed
          </div>
        </div>
      </div>
    </div>
  )
}
