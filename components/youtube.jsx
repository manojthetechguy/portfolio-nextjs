import { Box, Grid, Link, List, ListItem, Typography } from "@material-ui/core";

const Youtube = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} sm={12}>
        <Box>
          <Link
            href="https://www.youtube.com/channel/UCZBVJiw9u1FiQ8x-wxKzJMw"
            target="_blank"
          >
            <Typography variant="h4" color="inherit">
              My Youtube Channel
            </Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item>
        <List>
          <ListItem>
            <Link
              href="https://www.youtube.com/watch?v=f5Gpnqj-x-c"
              target="_blank"
            >
              <Typography variant="h6" color="inherit">
                1. Integrate PayPal Checkout in your website - React
              </Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.youtube.com/playlist?list=PLIOH5LhDFzuukOE5FA0zTRPgaZrkZhFuj"
              target="_blank"
            >
              <Typography variant="h6" color="inherit">
                2. Rest to GraphQL Migration Series
              </Typography>
            </Link>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Youtube;
