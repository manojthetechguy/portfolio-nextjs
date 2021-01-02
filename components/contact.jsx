import { Typography, Link, Grid } from "@material-ui/core";

const Contact = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="body1">
          Do you have an Idea in Mind ?
          <br />
          Be it a website for your business/Local store/Setting up payments and
          Integrations
          <br />
          or Fancy a Project ?
          <br />
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h4">
          <Link
            href="mailto:manojthetechguy@gmail.com"
            color="inherit"
            style={{ textDecoration: "underline" }}
          >
            Get in Touch
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
