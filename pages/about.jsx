import React from 'react'
import styles from  '../styles/about.module.scss'

function About() {
  return (
    <div>
        <h1 className={styles.highlightcss} >This is my about page</h1>
        <h2 className={styles.highlightcss1} >But apply all style change with scss</h2>
        <h3 className={styles.highlightcss2} >I am an h3 tag</h3>
        <p>I am a paragraph tag</p>
    </div>
  )
}

export default About