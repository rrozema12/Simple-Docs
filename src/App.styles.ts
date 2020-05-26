import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      backgroundColor: "#1f4068",
      width: "100vw",
      height: "100vh",
    },
  })
);

export default useStyles;
