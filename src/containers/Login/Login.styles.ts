import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperContainer: {
      backgroundColor: "inherit"
    },
    logo: {
      width: 300,
    },
    field: {
      width: 300,
    },
    card: {
      borderRadius: "8px",
      boxShadow: "none",
    },
    content: {
      textAlign: "center",
    },
  })
);

export default useStyles;
