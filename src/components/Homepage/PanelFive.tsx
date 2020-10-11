import React, { useState, useRef, useEffect } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Error from "@material-ui/icons/Error"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#16181E",
      paddingTop: "2rem",
      overflow: "auto",
      paddingBottom: "2rem",
      color: "white",
    },
    title: {
      fontFamily: "Playfair Display",
      color: "white",
      fontSize: "5rem",
      lineHeight: "6.5rem",
      fontWeight: "bold",
      [theme.breakpoints.down(470)]: {
        fontSize: "4rem",
        lineHeight: "4.5rem",
        paddingBottom: "1rem",
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
      marginLeft: "1rem",
      [theme.breakpoints.down(470)]: {
        fontSize: "1rem",
        marginLeft: "0.5rem",
        letterSpacing: "0.5rem",
      },
    },
    titleContainer: {
      textAlign: "center",
    },
    error: {
      verticalAlign: "middle",
      width: "1rem",
      marginRight: "0.5rem",
      marginLeft: "-0.8rem",
    },
    formContainer: {
      margin: "auto",
      padding: "3rem",
      [theme.breakpoints.down(1100)]: {
        padding: 0,
        margin: "auto",
        gridColumnStart: "1",
        gridColumnEnd: "3",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
      },
    },
    helperText: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
    },
    textField: {
      paddingBottom: "1.5rem",
      display: "block",
      "& label.Mui-focused": {
        color: "#CE995D",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#CE995D",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#CE995D",
      },
      "& .MuiOutlinedInput-root": {
        width: "30rem",
        [theme.breakpoints.down(600)]: {
          width: "20rem",
        },
        [theme.breakpoints.down(360)]: {
          width: "16rem",
        },
        "& fieldset": {
          borderColor: "#CE995D",
          borderWidth: "0.2rem",
        },
        "&:hover fieldset": {
          borderColor: "#CE995D",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#CE995D",
          borderWidth: "0.2rem",
        },
      },
    },
    textFieldError: {
      paddingBottom: "1.5rem",
      display: "block",
      "& label.Mui-focused": {
        color: "#CE995D",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& label": {
        color: "#CE995D",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bold",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#CE995D",
      },
      "& .MuiOutlinedInput-root": {
        width: "29rem",
        [theme.breakpoints.down(600)]: {
          width: "20rem",
        },
        "& fieldset": {
          borderColor: "#CE995D",
          borderWidth: "0.2rem",
        },
        "&:focus fieldset": {
          borderColor: "#CE995D",
          borderWidth: "0.2rem",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#CE995D",
          borderWidth: "0.2rem",
        },
      },
    },
    button: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      color: "white",
      padding: "0.7rem",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      display: "block",
      textTransform: "none",
      transition: "all 1s ease",
      background: "#CE995D",
      "&:hover": {
        transition: "all 1s ease",
        background: "#CE995D",
      },
    },
    container: {
      display: "flex",
    },
  })
)
export default function PanelFive() {
  const classes = useStyles()
  // States for form fields and error handling
  const [name, setName] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [nameError, setNameError] = useState(<React.Fragment />)

  const [email, setEmail] = useState("")
  const [isEmailError, setIsEmailError] = useState(false)
  const [emailError, setEmailError] = useState(<React.Fragment />)

  const [paragraph, setParagraph] = useState("")
  const [isParagraphError, setIsParagraphError] = useState(false)
  const [paragraphError, setParagraphError] = useState(<React.Fragment />)

  // Setting the form field to state
  const onNameChange = (event: any) => {
    setName(event.target.value)
  }

  const onEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const onParagraphChange = (event: any) => {
    setParagraph(event.target.value)
  }

  // On submit function function for error handling
  const onSubmit = (e: any) => {
    setIsEmailError(false)
    setIsNameError(false)
    setIsParagraphError(false)
    if (name === "") {
      e.preventDefault()
      setIsNameError(true)
      setNameError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) !== true
    ) {
      e.preventDefault()
      setIsEmailError(true)
      setEmailError(
        <div>
          <Error className={classes.error} />
          <span>Invalid Email</span>
        </div>
      )
    }
    if (paragraph === "") {
      e.preventDefault()
      setIsParagraphError(true)
      setParagraphError(
        <div>
          <Error className={classes.error} />
          <span>Required Field</span>
        </div>
      )
    }
  }
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "googlemap.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Contact</div>
        <div className={classes.subtitle}>Or Visit Us</div>
      </div>
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thankyou"
          >
            <input type="hidden" name="bot-field" />{" "}
            {/*Hidden Input for bot detection*/}
            <div>
              {/*Text field for Name*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={
                  isNameError ? classes.textFieldError : classes.textField
                }
                name="Name"
                label="Name"
                value={name}
                onChange={onNameChange}
                helperText={nameError}
                error={isNameError}
                variant="outlined"
                color="secondary"
              />
            </div>
            <div>
              {/*Text field for Email*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                className={
                  isEmailError ? classes.textFieldError : classes.textField
                }
                name="Email"
                label="Email"
                value={email}
                onChange={onEmailChange}
                helperText={emailError}
                error={isEmailError}
                variant="outlined"
              />
            </div>
            <div>
              {/*Text field for Message*/}
              <TextField
                InputProps={{
                  style: {
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: "bold",
                    color: "white",
                  },
                }}
                FormHelperTextProps={{
                  className: classes.helperText,
                }}
                multiline
                rows={10}
                className={
                  isParagraphError ? classes.textFieldError : classes.textField
                }
                name="Message"
                label="Message"
                value={paragraph}
                onChange={onParagraphChange}
                helperText={paragraphError}
                error={isParagraphError}
                variant="outlined"
              />
            </div>
            <div>
              <div>
                {/*Submit Button*/}
                <Button
                  type="submit"
                  className={classes.button}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
