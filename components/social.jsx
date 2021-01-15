import { Container, IconButton, Typography, Box } from "@material-ui/core";
import {
  Instagram,
  LinkedIn,
  GitHub,
  Twitter,
  YouTube,
} from "@material-ui/icons";

const Social = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4">Social</Typography>
      </Box>
      <Box>
        <IconButton href="https://linkedin.com/in/manojthetechguy" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://github.com/manojthetechguy" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton href="https://twitter.com/manojthetechguy" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton href="https://instagram.com/manoj_d_" target="_blank">
          <Instagram />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/channel/UCZBVJiw9u1FiQ8x-wxKzJMw"
          target="_blank"
        >
          <YouTube />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Social;
