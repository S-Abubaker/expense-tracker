import {
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const useStyles = makeStyles({
  formFields: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export const AddTransaction = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const clear = () => {
    setText("");
    setAmount(0);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    await addTransaction(newTransaction);
    clear();
  };

  return (
    <>
      <Typography variant="h5">New transaction</Typography>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          required
          className={classes.formFields}
          placeholder="Enter some text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          type="number"
          variant="standard"
          fullWidth
          className={classes.formFields}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Typography variant="body2" align="right">
          --negative ~ expense--
          <br />
          --positive ~ income--
          <br />
        </Typography>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.formFields}
        >
          Add transaction
        </Button>
      </form>
    </>
  );
};
