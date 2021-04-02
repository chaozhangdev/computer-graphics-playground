import React from 'react'
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function Controller() {

  const init = () => {
    localStorage.setItem("speed", 0.02);
    localStorage.setItem("shape", "box");
  };
  
  const reload = () => {
    window.location.reload();
    localStorage.setItem("firstTime", "no");
  };
  
  return (
    <div>
    <Box textAlign="center" m={2}>
      <Typography variant="h3">Responsive h3</Typography>
    </Box>

    <Box m={2}>
      <Button
        variant="contained"
        onClick={() => {
          init();
          reload();
        }}
      >
        reset
      </Button>
    </Box>

    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box m={2}>
        <Button
          variant="contained"
          onClick={() => {
            localStorage.setItem("shape", "box");
            reload();
          }}
        >
          Box Geometry
        </Button>
      </Box>

      <Box m={2}>
        <Button
          variant="contained"
          onClick={() => {
            localStorage.setItem("shape", "");
            window.location.reload();
          }}
        >
          Sphere Geometry
        </Button>
      </Box>

      <Box m={2}>
        <Button
          variant="contained"
          onClick={() => {
            let currentSpeed = parseFloat(localStorage.getItem("speed"));
            localStorage.setItem("speed", (currentSpeed += 0.02));
            reload();
          }}
        >
          +
        </Button>
      </Box>

      <Box m={2}>
        <Button
          variant="contained"
          onClick={() => {
            let currentSpeed = localStorage.getItem("speed");
            localStorage.setItem(
              "speed",
              currentSpeed <= 0 ? 0 : currentSpeed - 0.02
            );
            reload();
          }}
        >
          -
        </Button>
      </Box>
    </Box>
</div>
  )
}
