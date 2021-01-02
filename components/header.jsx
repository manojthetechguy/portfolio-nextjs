import { Box, Link, Typography } from "@material-ui/core";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <Box className={styles.title}>
      <Typography variant="h5" className={styles.name}>
        Manoj Dinesh
      </Typography>

      <nav className={styles.navigation}>
        <Typography>
          <Link className={styles.navlink} href="#aboutme" color="inherit">
            About Me
          </Link>
          <Link className={styles.navlink} href="#experience" color="inherit">
            Experience
          </Link>
          <Link className={styles.navlink} href="#contactme" color="inherit">
            Contact Me
          </Link>
          <Link className={styles.navlink} href="#youtube" color="inherit">
            Youtube
          </Link>
        </Typography>
      </nav>
    </Box>
  );
};

export default Header;
