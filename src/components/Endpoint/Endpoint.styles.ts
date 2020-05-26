import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    grid: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    gridItem: {
      width: "100%",
      height: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default useStyles;
