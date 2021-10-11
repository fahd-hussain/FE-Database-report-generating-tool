import {
  primaryColor,
} from "./material-kit-react.js"

const dragAndDropStyles = {
  root: {
    borderRadius: "5px",
    border: "1px solid black",
    display: "flex",
    padding: "15px",
    minHeight: "90vh",
    alignItems: "stretch",
    backgroundColor: primaryColor,
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  VerticalScrollContainer: {
    display: "flex",
    padding: "10px",
    overflow: "auto",
    flexWrap: "wrap",
    background: "rgba(0, 0, 0, 0.1)",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
    maxHeight: "85vh",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "flex-start",
    borderRadius: "3px",
    width: "40%",
    overflow: "auto"
  },

  column: {
    margin: "0 2px",
    flex: "auto"
  },

  dndTitle: {
    color: "red",
    fontSize: 18,
    width: "100%",
    overflow: "auto"
  },

  dndItem: {
    boxShadow: "0 4px 16px 0 rgb(0 0 0 / 15%)",
    padding: "8px",
    margin: "8px",
    backgroundColor: "white",
    overflow: "auto",
    borderRadius: "3px",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    }
  }
}

export default dragAndDropStyles