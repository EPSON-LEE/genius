import React from "react"
import Parallax from "react-springy-parallax"

export default class App extends React.Component {
  render() {
    const styles = {
      fontFamily: "Menlo-Regular, Menlo, monospace",
      fontSize: 14,
      lineHeight: "10px",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
    return (
      <Parallax ref="parallax" pages={3}>
        <Parallax.Layer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#243B4A" }}
        />
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(1)}
        >
          你!
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={-0.1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(2)}
        >
          是谁？
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(0)}
        >
          嗯？
        </Parallax.Layer>
      </Parallax>
    )
  }
}
