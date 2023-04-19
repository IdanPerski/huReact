import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import SnackbarProvider from "./providers/SnackBarProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Router from "./routes/Router";
<<<<<<< HEAD
/* import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles"; */
import UserProvider from "./user/providers/UseProvider";
import AuthorizationProvider from "./user/providers/AuthorizationProvider";
=======
import FatherComponent from "./sandbox/propTypes/FatherComponent";
import Counter from "./sandbox/stateHook/Counter";
import MyDetails from "./sandbox/stateHook/MyDetails";
import Todo from "./sandbox/stateHook/Todo";
import ThemeProvider from "./providers/ThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import UserProvider from "./users/providers/UserProvider";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

function App() {
  return (
    <div>
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>
            <UserProvider>
<<<<<<< HEAD
              {/* <AuthorizationProvider> */}
              <Layout>
                <Router />
              </Layout>
              {/* </AuthorizationProvider> */}
=======
              <Layout>
                <Router />
              </Layout>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
            </UserProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
