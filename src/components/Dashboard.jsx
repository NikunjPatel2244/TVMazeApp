import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Paper, Button, Input,colors,AppBar,Toolbar,Typography} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from "react-redux";
import SearchAction from '../actions/SearchAction';
import ResultList from './ResultList'
import ResultDetails from './ResultDetails'
import './Dashboard.css'

const useStyles = makeStyles((theme) =>({
  root: {},
  container: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      display: 'flex',
      alignItems: 'center'
  },
  results: {
      marginTop: theme.spacing(3)
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: colors.blueGrey[600],
  },
  searchInput: {
    flexGrow: 1
  },
  searchButton: {
    marginLeft: theme.spacing(2)
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  const [selectedId,setId] = useState(undefined)
  const dispatch = useDispatch();
  const searchFilteredList = useSelector(state => state.SearchReducer.searchFilteredList);
  const onSearchTextChanged = (e) => {
    setSearchText(e.target.value)
  }
  const onSearch = () => {
    dispatch(SearchAction.getSearchList(searchText));
    setId(undefined)
  }

  const getDetails = (id) => {
    console.log('id',id)
    setId(id)
  }
  return (
    <>
    <AppBar position="static" >
        <Toolbar >
           <Typography variant="title" color="inherit" style={{flex:1}} align="center">
              Show Finder
            </Typography>
          </Toolbar>
    </AppBar>
    <Container maxWidth={false} className={classes.container} style={{width: '50%'}}>
      <Paper
        className={classes.search}
        elevation={1}
      >
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          value={searchText}
          placeholder={"Search"}
          onChange={onSearchTextChanged}
          fullWidth
        />
      </Paper>
      <Button
        className={classes.searchButton}
        onClick={onSearch}
        size="large"
        variant="contained"
        color='primary'
        style={{background: '#444242', padding: '9px 20px'}}
      >
        Search
      </Button>
     
    </Container>
     
     {selectedId ? <ResultDetails id={selectedId}/> :
        <ResultList searchFilteredList={searchFilteredList} getDetails={getDetails}/>
    }
     </>
  )
}

export default Dashboard;
