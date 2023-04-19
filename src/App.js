import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import SnackbarProvider from "./providers/SnackBarProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Router from "./routes/Router";
/* import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles"; */
import UserProvider from "./user/providers/UseProvider";
import AuthorizationProvider from "./user/providers/AuthorizationProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>
            <UserProvider>
              {/* <AuthorizationProvider> */}
              <Layout>
                <Router />
              </Layout>
              {/* </AuthorizationProvider> */}
            </UserProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
