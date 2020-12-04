import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Button} from '@material-ui/core';
import List from '@material-ui/core/List';
import './ResultList.css'

const useStyles = makeStyles((theme) =>({
 list:{
  marginBottom: '30px',
  backgroundColor: '#F8F8F8'
 }
}));
const ResultList = ({ searchFilteredList,getDetails }) => {
  const classes = useStyles();

  return (
    <div className="results">
      {searchFilteredList && searchFilteredList.length ? (
        <div>
            <div>
             
             <List component="nav">
                {searchFilteredList.map(series => (
                  <div style={{
                    display:'flex',
                    flex: 1,
                    flexDirection: 'row',
                    alignItems:'center',
                }}>
                    
                    <div className={classes.list} style={{display: 'flex', padding: 20, width: '100%'}}>
                      <div>
                        {series.show.image && <img src={series.show.image.medium} style={{float: 'left', borderRadius: '3%'}}/>}                  
                      </div>
                      <div style={{margin: 30}}>
                        <div>
                          <Typography variant="h4" style={{marginBottom: 20, fontSize: 30, fontWeight: 'bold'}}>{series.show.name}</Typography>
                        </div>
                        <div>
                          {series.show.summary?.replace('<p>','').replace('</p>','')}
                        </div>
                        <Button
                            onClick={(e)=>getDetails(series.show.id)}
                            size="small"
                            variant="contained"
                            color='primary'
                            style={{background: '#444242', padding: '10px 20px', marginTop: 20}}
                        >
                            Show Episodes
                        </Button>
                      </div>
                    </div>
                    
                </div>
                ))}
             </List>
            </div>
     </div>
      ) :
        <div>
          <ul>
            {searchFilteredList &&<Typography variant="body1">No Records Found</Typography>}
          </ul>
        </div>
      }
    </div>
  )
}

export default ResultList;