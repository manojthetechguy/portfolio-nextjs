import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import styles from "../styles/Home.module.css";

const Skills = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="h4" style={{ textDecoration: "underline" }}>
          Skills
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} lg={6}>
        <List>
          <ListItem>
            <Typography variant="h6">Languages/Libraries</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/js-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Javascript</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/node-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Node.js</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/react-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>React.js</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText>Express.js</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/html-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>HTML</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/css-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>CSS</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/redux-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Redux</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/nextjs-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Next.js</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/sql-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>SQL</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/graphql-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>GraphQL</ListItemText>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={6} sm={6}>
        <List>
          <ListItem>
            <Typography variant="h6">Tools</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/github-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Github</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/postman-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Postman</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/teradata-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Notebooks (Teradata)</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Typography variant="h6">Other Interests</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/java-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Java</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                src="/backgroundimages/spring-icon.png"
                className={styles.icon}
              />
            </ListItemIcon>
            <ListItemText>Spring</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Skills;
