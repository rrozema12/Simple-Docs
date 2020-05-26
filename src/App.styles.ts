import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      backgroundColor: "#1f4068",
      position: "absolute",
      left: 0,
      right: 0,
      width: "100%",
      height: "100%"
    },
  })
);

export default useStyles;
