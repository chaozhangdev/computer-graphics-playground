import React from "react";
import "./controller-style.scss";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

import init from "../Init";

export default function Controller() {
  const PrettoSlider = withStyles({
    root: {
      color: "#444F5A",
      height: 4,
      width: 300,
      marginLeft: 15,
      marginBottom: 5,
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -6,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  const reload = () => {
    window.location.reload();
    localStorage.setItem("firstTime", "no");
  };

  const updateValue = (name, value) => {
    let current = parseFloat(localStorage.getItem(name));
    localStorage.setItem(name, current < 0 ? 0 : (current += value));
    reload();
  };

  return (
    <div className="controller-wrapper">
      <Box m={5}>
        <Typography variant="h4">3D Computer Graphics Playground</Typography>
      </Box>

      <Box>
        {/* title  */}
        <Box textAlign="center" m={2} component="div" display="inline">
          <Typography variant="h5">OBJECT CONTROLLER</Typography>
        </Box>

        {/* reset button  */}
        <Box m={2} textAlign="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              init();
              reload();
            }}
          >
            reset all properties
          </Button>
        </Box>

        {/* shape  */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Object Shape:</Typography>
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
        </Box>

        {/* speed  */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Rotation Speed:</Typography>
          <Box m={2}>
            <Button
              variant="contained"
              onClick={() => updateValue("speed", 0.02)}
            >
              +
            </Button>
          </Box>
          <Box m={2}>
            <Button
              variant="contained"
              onClick={() => updateValue("speed", -0.02)}
            >
              -
            </Button>
          </Box>
        </Box>

        {/* length  */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Object Length: </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={5}
            step={0.1}
            defaultValue={localStorage.getItem("length")}
            onChangeCommitted={(e, value) => {
              localStorage.setItem("length", value);
              reload();
            }}
          />
        </Box>

        {/* width  */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Object Width: </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={5}
            step={0.1}
            defaultValue={localStorage.getItem("width")}
            onChangeCommitted={(e, value) => {
              localStorage.setItem("width", value);
              reload();
            }}
          />
        </Box>

        {/* height  */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Object Height: </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={5}
            step={0.1}
            defaultValue={localStorage.getItem("height")}
            onChangeCommitted={(e, value) => {
              localStorage.setItem("height", value);
              reload();
            }}
          />
        </Box>

        {/* ambient light  */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Ambient Light Intensity: </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={3}
            step={0.1}
            defaultValue={localStorage.getItem("ambientLight")}
            onChangeCommitted={(e, value) => {
              localStorage.setItem("ambientLight", value);
              reload();
            }}
          />
        </Box>

        {/* spotLight light x */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Spot Light X Axis:</Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={100}
            min={-100}
            defaultValue={localStorage.getItem("spotLightX")}
            onChangeCommitted={(e, value) => {
              localStorage.setItem("spotLightX", value);
              reload();
            }}
          />
        </Box>
        {/* spotLight light  y */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Spot Light Y Axis: </Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={100}
            min={-100}
            defaultValue={localStorage.getItem("spotLightY")}
            onChangeCommitted={(e, value) => {
              localStorage.setItem("spotLightY", value);
              reload();
            }}
          />
        </Box>
        {/* spotLight light z */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
        >
          <Typography variant="p">Spot Light Z Axis:</Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            max={100}
            min={-100}
            defaultValue={localStorage.getItem("spotLightZ")}
            onChangeCommitted={(e, value) => {
              localStorage.setItem("spotLightZ", value);
              reload();
            }}
          />
        </Box>
      </Box>

      <Box m={3}>
        <Typography variant="p">
          Made by <a href="https://chao.gg">Chao </a> with ❤️ & 🍱
        </Typography>
      </Box>
    </div>
  );
}
