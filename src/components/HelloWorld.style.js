export const hello = {
    backgroundColor: "black",
    color: "pink",
    width: "100%",
    height: "50vh",
    fontSize: "40px",
    textAlign: "center",
    lineHeight: "50vh",
  };
  
 export const hello2 = ({fontSize}) => ({
    backgroundColor: "pink",
    color: "black",
    width: "100%",
    height: "50vh",
    fontSize,
    textAlign: "center",
    lineHeight: "50vh",
    ':hover': {
      color: 'green'
    },
  });