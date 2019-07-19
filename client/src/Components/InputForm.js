import React, { useState } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default ({ setTopWords, setLoading }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  const handleSubmit = async e => {
    e.preventDefault();
    setTopWords([]);
    setLoading(true);
    const response = await axios.get("/getFrequency", {
      params: { noOfWords: value }
    });
    setTopWords(response.data.list);
    setLoading(false);
    setValue("");
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            value={value}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="number"
            label="number"
            type="number"
            id="number"
            onChange={e => {
              if (e.target.value) setValue(Math.abs(e.target.value));
              else setValue("");
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            disabled={value ? false : true}
          >
            Find Words Frequency
          </Button>
        </form>
      </div>
    </Container>
  );
};
