import { Divider, Typography } from "@mui/material";
import { string } from "prop-types";
import { useTheme } from "../providers/ThemeProvider";

const PageHeader = ({ title, subtitle }) => {
  const { isDark } = useTheme();

  return (
    <>
      <Typography variant="h2" component="h1" sx={{ color: isDark && "white" }}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2" sx={{ color: isDark && "white" }}>
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default PageHeader;

PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};
