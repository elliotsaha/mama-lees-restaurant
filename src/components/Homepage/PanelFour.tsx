import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from "@material-ui/core/Button"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
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
      marginLeft: '1rem',
      [theme.breakpoints.down(470)]: {
        fontSize: "1rem",
        marginLeft: '0.5rem',
        letterSpacing: "0.5rem",
      },
    },
    titleContainer: {
      textAlign: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr",
      maxWidth: "75rem",
      marginRight: "auto",
      marginLeft: "auto",
      [theme.breakpoints.down(874)]: {
        gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      },
    },
    subName: {
      textAlign: "center",
      fontFamily: "Playfair Display",
      color: "white",
      fontSize: "4.25rem",
      lineHeight: "4.75rem",
      fontWeight: "bold",
      paddingBottom: "2.5rem",
      paddingTop: '1.5rem',
      [theme.breakpoints.down(874)]: {
        fontSize: "3.1rem",
        lineHeight: "4rem",
        paddingBottom: "1rem",
      },
    },
    foodTitle: {
      paddingBottom: "0.25rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: "0.25rem",
      marginRight: '0.5rem',
      [theme.breakpoints.down(470)]: {
        fontSize: "1.3rem",
      },
    },
    foodItemNumber: {
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: "0.25rem",
      [theme.breakpoints.down(470)]: {
        fontSize: "1rem",
      },
    },
    foodMarkdownBody: {
      fontFamily: "Gilroy, sans-serif",
      paddingBottom: "1.5rem",
      fontSize: "1.1rem",
    },
    foodItemTitleContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    foodItem: {
      width: "30rem",
      [theme.breakpoints.down(1252)]: {
        width: "25rem",
      },
      [theme.breakpoints.down(1060)]: {
        width: "20rem",
      },
      [theme.breakpoints.down(874)]: {
        width: "40rem",
      },
      [theme.breakpoints.down(790)]: {
        width: "35rem",
      },
      [theme.breakpoints.down(725)]: {
        width: "30rem",
      },
      [theme.breakpoints.down(630)]: {
        width: "20rem",
      },
      [theme.breakpoints.down(365)]: {
        width: "15rem",
      },
    },
    foodItemPrice: {
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    foodItemContainer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      paddingBottom: '0.5rem',
      paddingTop: '0.5rem'
    },
    bar: {
      backgroundColor: "#CE995D",
      height: "0.2rem",
    },
    half: {
      paddingTop: "0.5rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.1rem",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: "0.15rem",
      [theme.breakpoints.down(470)]: {
        fontSize: "1rem",
      },
    },
  })
)

export default function PanelFour() {
  const data = useStaticQuery(graphql`
    query {
      bento: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/(Bento)/" } }
        sort: { fields: [frontmatter___itemnumber], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              price
              itemnumber
            }
            rawMarkdownBody
          }
        }
      }

      appetizers: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/(Appetizers)/" } }
        sort: { fields: [frontmatter___itemnumber], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              price
              itemnumber
            }
            rawMarkdownBody
          }
        }
      }

      chickenspecialties: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/(content)/(ChickenSpecialties)/" }
        }
        sort: { fields: [frontmatter___itemnumber], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              price
              itemnumber
              halfprice
            }
            rawMarkdownBody
          }
        }
      }

      rice: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/(Rice)/" } }
        sort: { fields: [frontmatter___itemnumber], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              price
              itemnumber
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Menu</div>
        <div className={classes.subtitle}>Food Items</div>
      </div>
      <div className={classes.grid}>
        <div>
          {" "}
          <div>
            <div className={classes.subName}>Bento</div>
            {data.bento.edges.map((obj: any) => {
              const price = obj.node.frontmatter.price
              return (
                <div
                  key={obj.node.frontmatter.title}
                  className={classes.foodItemContainer}
                >
                  <div className={classes.foodItem}>
                    <div className={classes.foodItemTitleContainer}>
                      <div className={classes.foodTitle}>
                        {obj.node.frontmatter.title}
                      </div>
                      <div className={classes.foodItemPrice}>
                        ${price.toFixed(2)}
                      </div>
                    </div>

                    <div className={classes.foodItemNumber}>
                      {obj.node.frontmatter.itemnumber}
                    </div>
                    <div>
                      <div className={classes.foodMarkdownBody}>
                        {obj.node.rawMarkdownBody}
                      </div>
                    </div>
                    <div>
                      <hr className={classes.bar} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <div className={classes.subName}>Rice</div>
            {data.rice.edges.map((obj: any) => {
              const price = obj.node.frontmatter.price
              return (
                <div
                  key={obj.node.frontmatter.title}
                  className={classes.foodItemContainer}
                >
                  <div className={classes.foodItem}>
                    <div className={classes.foodItemTitleContainer}>
                      <div className={classes.foodTitle}>
                        {obj.node.frontmatter.title}
                      </div>
                      <div className={classes.foodItemPrice}>
                        ${price.toFixed(2)}
                      </div>
                    </div>

                    <div className={classes.foodItemNumber}>
                      {obj.node.frontmatter.itemnumber}
                    </div>
                    <div>
                      <div className={classes.foodMarkdownBody}>
                        {obj.node.rawMarkdownBody}
                      </div>
                    </div>
                    <div>
                      <hr className={classes.bar} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          {" "}
          <div>
            <div className={classes.subName}>Chicken</div>
            {data.chickenspecialties.edges.map((obj: any) => {
              const price = obj.node.frontmatter.price
              const halfprice = obj.node.frontmatter.halfprice
              return (
                <div
                  key={obj.node.frontmatter.title}
                  className={classes.foodItemContainer}
                >
                  <div className={classes.foodItem}>
                    <div className={classes.foodItemTitleContainer}>
                      <div className={classes.foodTitle}>
                        {obj.node.frontmatter.title}
                      </div>
                      <div className={classes.foodItemPrice}>
                        ${price.toFixed(2)}
                      </div>
                    </div>

                    <div className={classes.foodItemNumber}>
                      {obj.node.frontmatter.itemnumber}
                    </div>
                    <div>
                      <div className={classes.foodMarkdownBody}>
                        {obj.node.rawMarkdownBody}
                        {obj.node.frontmatter.halfprice ? (
                          <div className={classes.half}>
                            Half For ${halfprice.toFixed(2)}
                          </div>
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>
                    <div>
                      <hr className={classes.bar} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div>
            <div className={classes.subName}>Appetizers</div>
            {data.appetizers.edges.map((obj: any) => {
              const price = obj.node.frontmatter.price
              return (
                <div
                  key={obj.node.frontmatter.title}
                  className={classes.foodItemContainer}
                >
                  <div className={classes.foodItem}>
                    <div className={classes.foodItemTitleContainer}>
                      <div className={classes.foodTitle}>
                        {obj.node.frontmatter.title}
                      </div>
                      <div className={classes.foodItemPrice}>
                        ${price.toFixed(2)}
                      </div>
                    </div>

                    <div className={classes.foodItemNumber}>
                      {obj.node.frontmatter.itemnumber}
                    </div>
                    <div>
                      <div className={classes.foodMarkdownBody}>
                        {obj.node.rawMarkdownBody}
                      </div>
                    </div>
                    <div>
                      <hr className={classes.bar} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
