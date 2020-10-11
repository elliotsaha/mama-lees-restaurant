import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#14161A",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      paddingTop: "1rem",
      paddingBottom: "2rem",
    },
    inner: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      paddingBottom: "1rem",
      [theme.breakpoints.down(1066)]: {
        flexDirection: "column-reverse",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      },
    },
    image: {
      width: "6rem",
      margin: 0,
      marginTop: "0.5rem",
      [theme.breakpoints.down(1066)]: {
        display: "none",
      },
    },
    textBlocks: {
      paddingTop: "1.25rem",
    },
    bottom: {
      textAlign: "center",
      [theme.breakpoints.down(1066)]: {
        textAlign: "left",
        paddingLeft: "2rem",
        maxWidth: "25rem",
        paddingRight: "2rem",
      },
    },
    link: {
      color: "white",
        
    },
  })
)

export default function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.textBlocks}>
          Location
          <br />
          10633 51 Ave NW
          <br />
          Edmonton, AB
          <br />
          T6H 0K8
        </div>
        <div className={classes.textBlocks}>
          TEL: (780) 498-1222
          <br />
          MON-SAT: 11:00-8:00
          <br/>
          SUN: CLOSED
        </div>
        <div className={classes.textBlocks}>
          <a
            className={classes.link}
            href="https://www.doordash.com/store/Mama-Lee-s-Kitchen-Edmonton-149841/en-CA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Doordash
          </a>
          <br />
          <a
            className={classes.link}
            href="https://www.skipthedishes.com/mama-lees-kitchen-avenue-northwest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skip The Dishes
          </a>
          <br />
          <a
            className={classes.link}
            href="https://www.ubereats.com/ca/edmonton/food-delivery/mama-lees-kitchen/kIzsK0TZSgCv3gu9Lol0mw?ad_id=459292784604&campaign_id=10949109101&gclid=CjwKCAjw8MD7BRArEiwAGZsrBX3YsmEaXFbvdDJcVWqIkc4MKHk3NEKsPE9DuZcVgnSorqJFC2k_KRoCPxsQAvD_BwE&gclid=CjwKCAjw8MD7BRArEiwAGZsrBX3YsmEaXFbvdDJcVWqIkc4MKHk3NEKsPE9DuZcVgnSorqJFC2k_KRoCPxsQAvD_BwE&gclsrc=aw.ds&kw=&kwid=dsa-1136820532232&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMk1hbWElMjBMZWUncyUyMEtpdGNoZW4lMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKLTdUTjJVZ2ZvRk1SMEpDMFRObjItaEUlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTMuNDg4MTMlMkMlMjJsb25naXR1ZGUlMjIlM0EtMTEzLjUwNTYzJTdE&placement=&utm_campaign=CM2049465-search-google-nonbrand_32_-99_CA-National_e_all_acq_cpc_en_DSA_Exact__dsa-1136820532232_459292784604_110469673827_b_c&utm_source=AdWords_NonBrand"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uber Eats
          </a>
        </div>
        <div>
          <img src={Logo} alt="Logo" className={classes.image} />
        </div>
      </div>
      <div className={classes.bottom}>
        &copy; {new Date().getFullYear()} Mama Lees Kitchen –
        Mamaleeskitchen.com All Rights Reserved.
      </div>
    </div>
  )
}
