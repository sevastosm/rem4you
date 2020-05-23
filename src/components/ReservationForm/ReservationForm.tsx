import * as React from "react";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import logo from "../../assets/logo.jpg";

import "../../styles/datepicker.scss";
import "../../styles/style.scss";
import firebaseDb from "../../firebaseconfig"


import { addDates, addUsers,getUsers } from "./helpers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: "auto",
        width: "40ch",
        fontFamily: "sans-serif",
      },
    },
    wraper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    field: {
      marginTop: theme.spacing(2),
      width: "100%",
      maxWidth: "250px",
    },
    label: {
      textAlign: "center",
      width: "100%",
    },
  })
);

export default function ReservationForm() {
 
  const [myData,setData]=React.useState(null)

  const classes = useStyles();

  const handleClick = (day: any) => {
    console.log(day);
  };
  const handleFormClick = (e) => {
    e.preventDefault();
    addDates();
    const users = [
      {
        date: "12-05-2020",
        name: "sevastos",
        surname: "matzouranis",
        count: 4,
      },
      {
        date: "12-05-2020",
        name: "adriana",
        surname: "matzouranis",
        count: 4,
      },
    ];
    addUsers(users);
  };

  React.useEffect(() => {
   firebaseDb.child('users').on('value',snapshot => {
    const data=snapshot.val()
    if(data) {
      setData(data)
    }
})
    
  })

  const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;

    return (
      <div className="date-wraper">
        
        <DayPickerInput onDayChange={(day) => handleClick(day)} />
        <span className="counter">ΘΕΣΕΙΣ: 23</span>

      </div>
    );
  };

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
    <span>{myData} jdfljslflk</span>
      <div className={classes.wraper}>
        <TextMaskCustom />

        <TextField
          className={classes.field}
          id="outlined-basic"
          label="ΕΠΩΝΥΜΟ"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="ΟΝΟΜΑ"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.field}
          id="outlined-number"
          label="ΑΡΙΘΜΟΣ ΑΤΟΜΩΝ"
          type="number"
          onFocus={(e) => e.preventDefault()}
          variant="outlined"
        />
        <div className={classes.field}>
          <Box display="flex" justifyContent="center">
            <Button
              onClick={(e) => handleFormClick(e)}
              variant="contained"
              color="primary"
            >
              ΑΠΟΣΤΟΛΗ
            </Button>
          </Box>
        </div>
        <div className={classes.field}>
          <Box display="flex" justifyContent="center">
            <img className="logo" src={logo} alt="Logo" />
          </Box>
        </div>
      </div>
    </form>
  );
}
