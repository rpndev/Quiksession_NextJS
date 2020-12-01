import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "50px",
  },
  select: {
    marginTop: theme.spacing(1),
  },
  selectLabel: {
    background: "#fff",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

function EngineerForm({
  engineer,
  formError,
  submitButtonText = "Next",
  handleSubmit,
  goBack,
  preValue,
  history,
}) {
  const [fields, setFields] = useState(preValue.length ? preValue : [{}]);
  const classes = useStyles();
  const flexContainer = {
    display: "flex",
    flexDirection: "row",
  };
  //   const validateForm = () => {};
  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(fields);
  }
  function handleChangeInput(i, event) {
    const values = [...fields];
    const { name, value } = event.target;
    values[i][name] = value;
    setFields(values);
  }
  function handleAddInput() {
    const values = [...fields];
    values.push({
      engineerName: "",
      price: "",
    });
    setFields(values);
  }
  function handleRemoveInput(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  return (
    <div>
      <form noValidate>
        {fields.map((field, idx) => {
          return (
            <div
              key={`${field}-${idx}`}
              className="maindiv"
              style={flexContainer}
            >
              <div className="form-group">
                Engineer Name
                <input
                  type="text"
                  name="engineerName"
                  value={field.engineerName}
                  placeholder="Enter Engineer Name"
                  onChange={(e) => handleChangeInput(idx, e)}
                />
              </div>
              <div className="form-group">
                Price
                <input
                  type="number"
                  name="price"
                  value={field.price}
                  placeholder="Enter Price"
                  onChange={(e) => handleChangeInput(idx, e)}
                />
              </div>
              <Button type="button" onClick={() => handleAddInput()}>
                {/* <i className="fa fa-plus" aria-hidden="true" /> */}+
              </Button>
              <Button type="button" onClick={() => handleRemoveInput()}>
                {/* <i className="fa fa-times" aria-hidden="true" /> */}-
              </Button>
            </div>
          );
        })}

        <Button type="button" onClick={() => goBack()}>
          Prev
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.submit}
          color="primary"
          onClick={(e) => onSubmit(e)}
        >
          {submitButtonText}
        </Button>
      </form>
    </div>
  );
}

export default EngineerForm;
