import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h5' >Expense Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};
