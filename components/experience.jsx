import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import styles from "../styles/Home.module.css";

const Experience = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="h4" style={{ textDecoration: "underline" }}>
          Professional Experience
        </Typography>
      </Grid>
      <Grid item>
        <List>
          <ListItem>
            <ListItemIcon>
              <img
                className={styles.icon}
                src="/backgroundimages/paypal-icon.png"
                alt="PayPal"
              ></img>
            </ListItemIcon>
            <ListItemText>
              PayPal - Software Engineer 2 (2019 Feb - Present)
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className={styles.icon}
                src="/backgroundimages/hpe-icon.png"
                alt="Hewlett Packard Enterprise"
              ></img>
            </ListItemIcon>
            <ListItemText>
              Hewlett Packard Enterprise / Micro Focus - Software Engineer 1 and
              2 (2016 Sep - 2019 Feb)
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className={styles.icon}
                src="/backgroundimages/bmsce-icon.png"
                alt="B.M.S College of Engineering"
              ></img>
            </ListItemIcon>
            <ListItemText>
              B.M.S College of Engineering (CGPA - 9.14) (Graduated in 2016)
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Experience;
