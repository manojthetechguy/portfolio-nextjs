import Head from "next/head";
import clsx from "clsx";

import AboutMe from "../components/aboutme";
import Header from "../components/header";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Social from "../components/social";
import Youtube from "../components/youtube";

import styles from "../styles/Home.module.css";
import { Typography } from "@material-ui/core";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manoj Dinesh</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <Header />
        </header>
        <section
          className={clsx(styles.aboutme, styles.sitesection)}
          id="aboutme"
        >
          <AboutMe />
        </section>
        <section className={clsx(styles.social)}>
          <Social />
        </section>
        <section
          id="experience"
          className={clsx(styles.experience, styles.sitesection)}
        >
          <Experience />
        </section>
        <section
          id="skills"
          className={clsx(styles.skills, styles.sitesection)}
        >
          <Skills />
        </section>
        <section
          id="contactme"
          className={clsx(styles.contactme, styles.sitesection)}
        >
          <Contact />
        </section>
        <section
          id="youtube"
          className={clsx(styles.youtube, styles.sitesection)}
        >
          <Youtube />
        </section>
        <footer>
          <hr />
          <Typography variant="body2" color="initial">
            COPYRIGHT © 2020 MANOJ DINESH - ALL RIGHTS RESERVED.
          </Typography>
        </footer>
      </main>
    </div>
  );
}
