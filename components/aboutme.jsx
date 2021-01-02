import { Grid, Typography } from "@material-ui/core";
import styles from "../styles/Home.module.css";

const AboutMe = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItem="center"
    >
      <Grid item xs={12} sm={4}>
        <img
          className={styles.myphoto}
          alt="Manoj Photo"
          src="./backgroundimages/manoj-image.png"
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h5">Hey, I'm Manoj</Typography>
        <Typography variant="h6">
          I love building things on the Internet!
        </Typography>
        <Typography variant="body1">
          <br />
          <br />
          Professional Full stack Web Engineer with over 5 years of experience
          in IT Industry.
          <br />
          <br />
          Proficient in translating complex designs into actual working and
          reliable sites with strong focus on Quality
          <br />
          <br />
          Skilled in building Web experiences on the Front end and developing
          REST APIs/ GraphQL Applications that powers those experiences
          <br />
          <br />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
