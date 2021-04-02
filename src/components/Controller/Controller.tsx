import React from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function Controller() {
  return (
    <div>
      <Box textAlign="center" m={2}>
        <Typography variant="h3">Responsive h3</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box m={2}>
          <Button variant="contained">Default</Button>
        </Box>
        <Box m={2}>
          <Button variant="contained">Default</Button>
        </Box>
      </Box>
    </div>
  );
}
