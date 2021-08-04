export const hello = {
    backgroundColor: "black",
    color: "pink",
    width: "100%",
    height: "50vh",
    fontSize: "40px",
    textAlign: "center",
    lineHeight: "50vh",
  };
  
 export const hello2 = ({fontSize, animate}) => ({
    backgroundColor: "pink",
    color: "black",
    width: '100%',
    height: "50vh",
    fontSize,
    textAlign: "center",
    lineHeight: "50vh",
    position: 'relative',
    paddingTop: 10,
    padding: 20,
    ':hover': {
      color: 'green'
    },
    animation: `${animate} 1s ease-out infinite`,
    ':before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 5,
      backgroundColor:'green',
      bottom: 0,
      left: 0
    }
  });

  export const media = () => ({
    '@media (max-width: 1024px)': {
      backgroundColor: 'red',
    },
  })

  export const keyframe = () => ({
    animationName: {
      '0%': { color: 'green' },
      '50%': { color: 'blue' },
      '80%': { color: 'purple' },
      '100%': { color: 'green' },
    },
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  })
  export const keyframe2 = () => ({
    '0%': {
      width: '0%',
    },
    '100%': {
      width: '100%',
  }})