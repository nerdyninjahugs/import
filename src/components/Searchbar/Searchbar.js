import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  
  search: {
    position: 'absolute',
    padding : '10px',
    
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
       },
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'fixed',
    display: 'flex',
     justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    paddingTop : '0px',
  },
 
  inputInput: {
    padding: theme.spacing(0, 1, 1, 8),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 300,
      },
    },
  },
}));



export default function SearchAppBar() {
  const classes = useStyles();

  return (
    
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
  
  );
}




