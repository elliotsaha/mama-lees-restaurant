import React, { useState } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
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
      fontSize: "2.5rem",
      lineHeight: "3rem",
      marginLeft: "3rem",
      color: "white",
      letterSpacing: "0.15rem",
    },
    sub: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      textTransform: "uppercase",
      fontFamily: "Gilroy, sans-serif",
      letterSpacing: "0.75rem",
    },
    button: {
      color: "#CE995D",
      fontFamily: "Gilroy",
      letterSpacing: "0.2rem",
    },
    buttonActive: {
      color: "#CE995D",
      fontFamily: "Gilroy",
      letterSpacing: "0.2rem",
      fontWeight: "bold",
    },
    buttonContainer: {
      marginLeft: "4rem",
    },
  })
)
export default function PanelTwo() {
  const settings = {
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
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className={classes.sub}>Our Menu</div>
        Our Authentic <br />
        and Fresh Korean Cuisines
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.button}>Mains</Button>
        <Button className={classes.button}>Fried</Button>
        <Button className={classes.button}>Sides</Button>
        <Button className={classes.button}>Bento</Button>
      </div>
      
    </div>
  )
}
