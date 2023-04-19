import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyForms() {
  const navigate = useNavigate();
  const initialForm = {
    firstName: "",
    lastName: "",
  };

  //   const joi = required("joi");
  const schema = {
    firstName: Joi.string().max(10),
    lastName: Joi.string().min(2).max(10),
  };

  const userSchema = Joi.object(schema);

  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  /*   const { error } = userSchema.validate(data); */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    const errorMessage = validateProperty(e.target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /*  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
    }
  }; */

  const resetForm = () => {
    console.log("Resetting Form...");
    setData(initialForm);
    console.log("Reset State:", data);
  };

  const handleCancel = (to) => {
    navigate(to);
  };

  const validateProperty = (e) => {
    const { name, value } = e;
    console.log(value);
    const obj = { [name]: value };
    const joiObj = Joi.object({ [name]: schema[name] });
    const { error } = joiObj.validate(obj);
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const schemaObj = Joi.object(schema);
    const { error } = schemaObj.validate(data);
    return error ? true : false;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          padding: 5,
          border: "solid 1px",
          alignItems: "center",
          justifyContent: "space-evenly",
          pt: 2,
        }}
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();

          console.log("form submitted");
        }}
      >
        <Typography>First name</Typography>
        <TextField
          sx={{ m: 2 }}
          name="firstName"
          onChange={handleChange}
          value={data["firstName"]}
        />
        <Typography>Last name</Typography>
        <TextField
          sx={{ m: 2 }}
          name="lastName"
          onChange={handleChange}
          value={data["lastName"]}
        />
        <Box>
          <Button onClick={resetForm}>Reset</Button>
          <Button>Cancel</Button>
          <Button
            type="submit"
            onClick={() => {
              console.log(data);
            }}
            disabled={validateForm()}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

/* My HomeWork */
/* 
import { Box, Button, Input, TextField, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import React, { useState } from "react";
import FormButton from "./FormButton";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const initialForm = {
    firstName: "",
    lastName: "",
  };

  const [data, setData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  console.log("Current State:", data);

  const resetForm = () => {
    console.log("Resetting Form...");
    setData(initialForm);
    console.log("Reset State:", data);
  };

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          padding: 5,
          border: "solid 1px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography>First name</Typography>
        <TextField
          sx={{ border: "solid 1px" }}
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
        />
        <Typography>Last name</Typography>
        <TextField
          sx={{ border: "solid 1px" }}
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
        />
        <FormButton onClick={resetForm}>
          <LoopIcon />
          reset
        </FormButton>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 1, color: red[700] }}
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}
 */

/* CLASS */

/* 
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function MyForm2() {
  const INITIAL_FORM = {
    firstName: "",
    lastName: "",
  };
  const schema = {
    firstName: Joi.string().max(10),
    lastName: Joi.string().min(2).max(10),
  };

  const [data, setData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = validateProperty(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: "" }));
    }
  };

  const handleReset = () => {
    setData(INITIAL_FORM);
  };

  const handleCancel = (to) => {
    navigate(to);
  };

  const validateProperty = (target) => {
    const obj = { [target.name]: target.value };
    const joiObj = Joi.object({ [target.name]: schema[target.name] });
    const { error } = joiObj.validate(obj);
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const schemaObj = Joi.object(schema);
    const { error } = schemaObj.validate(data);
    return error ? true : false;
  };

  console.log(errors);
  return (
    <>
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
        }}
      >
        <Typography>My Form</Typography>
        <Box>
          <TextField
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data["firstName"] ? data["firstName"] : ""}
            helperText={errors["firstName"]}
            error={Boolean(errors["firstName"])}
          />
          <TextField
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data["lastName"] ? data["lastName"] : ""}
            helperText={errors["lastName"]}
            error={Boolean(errors["lastName"])}
          />
        </Box>
        <Box>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={() => handleCancel("/")}>Cancel</Button>
          <Button type="submit" disabled={validateForm()}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
} */
