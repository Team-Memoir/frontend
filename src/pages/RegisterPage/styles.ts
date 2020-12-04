import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "20vh",
  },
  title: {
    textAlign: "center",
  },
  form: {
    maxWidth: 420,
    marginLeft: "auto",
    marginRight: "auto",
  },
  googleBtn: {
    display: "flex",
    width: "100%",
    marginTop: 16,
  },
  btnGroup: {
    display: "flex",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    " & button": {
      width: "45%",
    },
  },
}));
