import React, { useEffect, useState } from "react"
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import CloseIcon from "@material-ui/icons/Close"
import Button from "@material-ui/core/Button"
// Drawer Icons
import BookRoundedIcon from "@material-ui/icons/BookRounded"
import InfoRoundedIcon from "@material-ui/icons/InfoRounded"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Divider } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

//Styles
const drawerWidth = 240
const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      width: "100%",
      backgroundColor: "transparent",
      textTransform: "none",
      transition: "all 0.15s ease",
      position: "fixed",
      [theme.breakpoints.down(981)]: {
        display: "none",
      },
    },
    appBarScroll: {
      width: "100%",
      transition: "all 0.15s ease",
      background: "#16181E",
      paddingBottom: "1rem",
      textTransform: "none",
      position: "fixed",
      [theme.breakpoints.down(981)]: {
        display: "none",
      },
    },
    linkContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "1rem",
    },
    itemContainer: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("lg")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    closeMenuButton: {
      marginRight: "auto",
      marginLeft: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "linear-gradient(50deg, #2C2E39, #16181E)",
    },
    inactive: {
      opacity: "50%",
      textDecoration: "none",
      paddingRight: "2.5rem",
      paddingLeft: "2.5rem",
      fontSize: "1.1rem",
      border: 0,
      boxShadow: "none",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      color: "white",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
    },
    inactiveContact: {
      paddingTop: "0.7rem",
      position: "absolute",
      right: "0",
      textDecoration: "none",
      paddingRight: "2.5rem",
      border: 0,
      boxShadow: "none",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      color: "white",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
    },
    nameContainer: {
      paddingTop: '0.35rem',
      position: "absolute",
      paddingLeft: "2.3rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      fontSize: "1.2rem",
    },
    active: {
      background: "linear-gradient(to right, #CE995D, #CE995D) no-repeat",
      opacity: "100%",
      paddingBottom: "0.5rem",
      backgroundSize: "30% 3px",
      backgroundPosition: "bottom",
    },
    appBarMobile: {
      display: "none",
      [theme.breakpoints.down(981)]: {
        position: "fixed",
        width: "100%",
        display: "block",
      },
      background: "transparent",
      transition: "all 0.15s ease",
    },
    appBarMobileScroll: {
      display: "none",
      [theme.breakpoints.down(981)]: {
        position: "fixed",
        width: "100%",
        transition: "all 0.15s ease",
        display: "block",
        background: "#16181E",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
      color: "white",
      marginLeft: "0.25rem",
      marginTop: "0.3rem",
      marginBottom: "0.3rem",
    },
    sideBarActive: {
      textDecoration: "none",
    },
    sideBarInactive: {
      color: "white",
      opacity: "80%",
      textDecoration: "none",
    },
    sideBarText: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
    },
    sideBarName: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
      color: "white",
      paddingLeft: "1rem",
      fontSize: "2.5rem",
      lineHeight: "2.7rem",
      marginBottom: "0.6rem",
    },
    socials: {
      position: "absolute",
      top: 0,
      right: 0,
      paddingTop: "0.25rem",
      marginRight: "0.5rem",
      marginTop: "0.3rem",
      display: "flex",
      flexDirection: "row",
    },
    contactButton: {
      background: "#CE995D",
      "&:hover": {
        background: "#BD3C44",
      },
      textTransform: "none",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: 700,
      color: "white",
      border: 0,
      boxShadow: "none",
      fontFamily: "Gilroy, sans-serif",
      paddingRight: "1rem",
      paddingLeft: "1rem",
    },
    socialIcons: {
      paddingLeft: "2rem",
      textDecoration: "none",
      border: 0,
      boxShadow: "none",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
    },
    socialIconsInner: {
      width: "2.5rem",
    },
    logo: {
      width: '3rem',
    },  
  })
)

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      instagram: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 1150, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1150, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fluid(maxWidth: 1150, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedIn: file(relativePath: { eq: "linkedIn.png" }) {
        childImageSharp {
          fluid(maxWidth: 1150, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const [scrollClass, setScrollClass] = useState(classes.appBar)
  const [scrollMobileClass, setScrollMobileClass] = useState(
    classes.appBarMobile
  )
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setScrollClass(classes.appBarScroll)
        setScrollMobileClass(classes.appBarMobileScroll)
      } else {
        setScrollClass(classes.appBar)
        setScrollMobileClass(classes.appBarMobile)
      }
    })
  })

  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon />,
      link: "/",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "About",
      icon: <InfoRoundedIcon />,
      link: "/about",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "Recipes",
      icon: <BookRoundedIcon />,
      link: "/recipes",
      onClick: () => {
        handleDrawerToggle()
      },
    },
  ]

  const Contact = [
    {
      text: "Contact",
      link: "/contact",
      icon: <EmailRoundedIcon />,
      onClick: () => {
        handleDrawerToggle()
      },
    },
  ]
  //Drawer
  const drawer = (
    <div>
      <List>
        <div className={classes.sideBarName}>
          Mama <br />
          Lee's
        </div>
        <Divider />
        {itemsList.map(item => {
          const { text, icon, link, onClick } = item
          return (
            <Link
              to={link}
              activeClassName={classes.sideBarActive}
              className={classes.sideBarInactive}
            >
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </Link>
          )
        })}
        <Divider />
        {Contact.map((item) => {
          const { text, icon, link, onClick } = item
          return (
            <Link
              to={link}
              activeClassName={classes.sideBarActive}
              className={classes.sideBarInactive}
            >
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </Link>
          )
        })}
      </List>
    </div>
  )

  return (
    <React.Fragment>
      <AppBar position="fixed" className={scrollClass} elevation={0}>
        <div className={classes.itemContainer}>
          <div className={classes.nameContainer}><Img fluid={data.logo.childImageSharp.fluid} className={classes.logo}/></div>
          <div className={classes.linkContainer}>
            <Link
              to="/"
              className={classes.inactive}
              activeClassName={classes.active}
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className={classes.inactive}
              activeClassName={classes.active}
              partiallyActive
            >
              Recipes
            </Link>
            <Link
              to="/about"
              className={classes.inactive}
              activeClassName={classes.active}
              partiallyActive
            >
              About
            </Link>
          </div>
          <Link to="/contact" className={classes.inactiveContact}>
            <Button className={classes.contactButton}>Contact</Button>
          </Link>
        </div>
      </AppBar>

      <AppBar position="fixed" className={scrollMobileClass} elevation={0}>
        <IconButton
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.socials}>
          <a
            href="https://www.linkedin.com/in/mamaleeskitchen/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.socialIcons}
          >
            <Img
              fluid={data.linkedIn.childImageSharp.fluid}
              className={classes.socialIconsInner}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://facebook.com/mamaleeskitchen/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.socialIcons}
          >
            <Img
              fluid={data.twitter.childImageSharp.fluid}
              className={classes.socialIconsInner}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/mamaleeskitchen/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.socialIcons}
          >
            <Img
              fluid={data.instagram.childImageSharp.fluid}
              className={classes.socialIconsInner}
              alt="Instagram"
            />
          </a>
        </div>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden lgUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon className={classes.sideBarInactive} />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  )
}
