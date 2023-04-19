import React from "react";
import { func, object, string } from "prop-types";
import Grid from "@mui/material/Grid";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";

const UserAddress = ({
  onSubmit,
  onReset,
  onFormChange,
  title,
  errors,
  data,
  onInputChange,
  setData,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      onChange={onFormChange}
      styles={{ maxWidth: "800px" }}
      title={title}
      to={ROUTES.CARDS}
    >
      <Input
        name="country"
        label="country"
        error={errors.first}
        onChange={onInputChange}
        data={data}
        md={6}
      />

      <Input
        name="city"
        label="city"
        error={errors.last}
        onChange={onInputChange}
        data={data}
        md={6}
      />

      <Input
        name="street"
        label="Street"
        error={errors.password}
        onChange={onInputChange}
        data={data}
        md={6}
      />
      <Input
        name="houseNumber"
        label="House Number"
        error={errors.password}
        onChange={onInputChange}
        data={data}
        md={6}
      />

      <Grid item></Grid>
    </Form>
  );
};

UserAddress.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  onFormChange: func.isRequired,
  title: string.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
  setData: func.isRequired,
};

export default React.memo(UserAddress);
