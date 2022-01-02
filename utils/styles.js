import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
  },
  name: {
    fontWeight: 600,
  },
  author: {
    fontWeight: 500,
  },
  desc: {
    fontStyle: 'italic',
    fontSize: 15,
  },
  title:{
    fontSize: 17,
    fontWeight: 600,
    
},
subtitle:{
    fontSize: 15,
    textDecoration: 'underline',
    float: 'right',
    cursor: 'pointer',
    color: '#1b5e20',
    marginBottom: 20,
},
hr:{
  color: '#eceff1',
},

});

export default useStyles