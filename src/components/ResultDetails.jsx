import React, {useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import SearchAction from '../actions/SearchAction';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import './ResultList.css'

const useStyles = makeStyles((theme) =>({
 link:{
  padding: '30px'
 }
}));
const ResultDetails = ({id}) => {
  const classes = useStyles();
  const detailsData = useSelector(state => state.SearchReducer.detailsData);
  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(SearchAction.getDetailsList(id));
  }, [])
  return (
    <div>
       <div style={{padding: '30px 50px', background: '#efefef', display: 'flex', width: '70%', margin: '0 auto'}}>
         <div style={{width: '30%'}}>
            <span style={{display: 'block'}}>{detailsData.image && <img src={detailsData.image.original} style={{width: '100%', borderRadius: '3%'}}/>}   </span>
            <span style={{display: 'block', fontSize: 20}}> <Typography variant="h4" style={{marginBottom: 20, marginTop: 20, fontSize: 30, fontWeight: 'bold'}}>{detailsData.name}</Typography>               </span>
            <span style={{display: 'block'}}>{detailsData.summary?.replace('<p>','').replace('</p>','')}</span>
         </div>
         <div style={{width: '60%', marginLeft: 50}}>
           {detailsData._embedded?.episodes.map(item =>(
               <div style={{marginBottom: 30, overflow: 'auto'}}>
                   <span style={{float: 'left', marginRight: 20, background: '#2d147c', padding: '10px 25px', color: '#FFF', fontWeight:'bold', borderRadius: 5, fontSize: 20 }}>
                       {item.number}
                   </span>
                   <div style={{float: 'left'}}>
                   <div>
                    <Typography variant="h4" style={{marginBottom: 10, fontSize: 30, fontWeight: 'bold'}}>{item.name}</Typography>
                   </div>
                   <span>
                   <StarOutlineIcon/>
                   </span>
                   <span style={{position: 'relative', top: -5, left: 10}}>
                       {detailsData.rating.average}
                   </span>
                   <span style={{marginLeft: 25, position: 'relative', top: -5, left: 10, paddingLeft: 20, borderLeft: '1px solid #847878'}}>
                       {item.airdate}
                   </span>
                  </div>
               </div>
           ))}
       </div>
       </div>
       
    </div>
  )
}

export default ResultDetails;