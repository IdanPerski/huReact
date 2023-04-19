import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import useForm from "../../forms/hooks/useForm";
import PersonalDetails from "../components/PersonalDetails";
import UserAddress from "../components/UserAddress";
import UserContactDetails from "../components/UserContactDetails";
import initialPersonalDetails from "../helpers/initialForms/initialPersonalDetails";
import userPersonalDetails from "../helpers/normalization/userPersonalDetailsModal";
import personalDetailsSchema from "../models/joi-schema/personalDetailsSchema";
import { getUsersFromServer } from "../services/usersApiService";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UseProvider";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";

export default function UserProfile() {
  const { user } = useUser();
  const [tabValue, setTabValue] = useState(0);
  const [editText, setEditText] = useState(initialPersonalDetails);

  const handleChange = (e) => {
    setTabValue(e.target.tabIndex);
  };

  const { value, ...rest } = useForm(
    initialPersonalDetails,
    personalDetailsSchema,
    () => console.log("user updated!"),
  );

  const getUserData = async () => {
    try {
      const userPersonalData = await getUsersFromServer();
      rest.setData(userPersonalDetails(userPersonalData));
      return userPersonalData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = getUserData();
    rest.setData(user);
  }, []);

  const handleTextChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      console.log(name);
      console.log(value);
      console.log(editText);
      setEditText((prev) => ({ ...prev, [name]: value }));
    },
    [editText],
  );

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <>
      <PageHeader title="Profile page" subtitle="profile" />
      <Box display="flex" sx={{ width: "90%", margin: "0 auto", p: 2 }}>
        <Grid container alignItems="stretch" spacing={2}>
          <Grid item xs={12} sm={4} sx={{ height: "100%" }}>
            <Card
              sx={{
                height: "100%",
              }}
            >
              <Box width={"100%"} display="flex" flexDirection="column">
                <CardHeader
                  sx={{ margin: "0 auto" }}
                  avatar={
                    <Avatar
                      sx={{
                        // bgcolor: `#${Math.floor(Math.random() * 10000).toString(
                        //   16,
                        // )}`,
                        height: "8rem",
                        width: "8rem",
                        display: "flex",
                        alignItems: "center",

                        fontSize: "3.5rem",
                      }}
                      src="/assets/images/avatar.png"
                    >
                      {/* U{user?.name} */}
                      {/* TODO - setup the user picture as you did at the rightNavigation */}
                    </Avatar>
                  }
                />
                <Typography sx={{ p: 4 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  odit corrupti dignissimos obcaecati corporis. Ipsam, totam
                  repellat. Ab adipisci quas saepe officiis iste inventore
                  dignissimos debitis recusandae amet, quaerat at?
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card sx={{ height: "100%" }}>
              <Tabs
                value={tabValue}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab tabIndex={0} label="Personal Details"></Tab>
                <Tab tabIndex={1} label="Address" />
                <Tab tabIndex={2} label="Contact" />
              </Tabs>

              {tabValue === 0 ? (
                <Box sx={{ p: 4 }}>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {
                      <PersonalDetails
                        onSubmit={rest.onSubmit}
                        onReset={rest.handleReset}
                        onFormChange={rest.validateForm}
                        title={"Edit profile"}
                        errors={value.errors}
                        onInputChange={rest.handleChange}
                        setData={rest.setData}
                        data={value.data}
                      />
                    }
                  </Grid>
                </Box>
              ) : null}
              {tabValue === 1 ? (
                <Box sx={{ p: 4 }}>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {
                      <UserAddress
                        onSubmit={rest.onSubmit}
                        onReset={rest.handleReset}
                        onFormChange={rest.validateForm}
                        title={"Edit profile"}
                        errors={value.errors}
                        onInputChange={rest.handleChange}
                        setData={rest.setData}
                        data={value.data}
                      />
                    }
                  </Grid>
                </Box>
              ) : null}
              {tabValue === 2 ? (
                <Box sx={{ p: 4 }}>
                  {
                    <UserContactDetails
                      onSubmit={rest.onSubmit}
                      onReset={rest.handleReset}
                      onFormChange={() => console.log("onFormChange")}
                      title={"Edit profile"}
                      errors={value.errors}
                      onInputChange={handleTextChange}
                      setData={rest.setData}
                      data={value.data}
                    />
                  }
                </Box>
              ) : null}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
