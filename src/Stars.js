
import React,{useState} from 'react'
import './stars.css'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';


import{BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import {Link,NavLink} from 'react-router-dom'
import News from './News'
import World from './World'
import Sport from './Sports'
import Live from './Live'

import Science from './Science'
import Technology from './Technology'

function Stars() {
   const [state, setstate] = useState({
       index: 0,
     })
     
      const handleChange = (event, value) => {
         setstate({
           index: value,
         });;
       };
     
      const handleChangeIndex = index => {
         setstate({
           index,
         });
       };
     
       const { index } = state;
       const styles = {
         tabs: {
           // background: '#fff',
         },
         slide: {
        
          // maxHeight: 1000,
           color: '#fff',
          
         },
         slide1: {
          // minHeight: 150,
           with:'200'
           // backgroundColor: '#FEA900',
         },
         slide2: {
          // minHeight: 150,
           with:'200',
           // backgroundColor: '#B3DC4A',
         },
         slide3: {
          // minHeight: 150,
           with:'200',
           // backgroundColor: '#6AC0FF',
         },
         slide4: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
         slide5: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
         slide6: {
          // minHeight: 150,
           // backgroundColor: '#6AC0FF',
         },
       };
     
   return (
       <div className="stars">
          <div className="star__pages">
       <Tabs indicatorColor="primary"
    value={index} fullwidth onChange={handleChange} >
         <Tab label="Home" />
         <Tab label="World & Bussiness" />
         <Tab label="Sports" />
         <Tab label="Science" />
         <Tab label="Technology" />
       </Tabs>
       <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
         <div style={Object.assign({}, styles.slide, styles.slide1)}>   <News/></div>
         <div style={Object.assign({}, styles.slide, styles.slide2)}>
        <World/>
           
         </div>
         <div style={Object.assign({}, styles.slide, styles.slide3)}>
             <Sport/>
         </div>
         <div style={Object.assign({}, styles.slide, styles.slide5)}>
               <Science/>
     
         </div>
         <div style={Object.assign({}, styles.slide, styles.slide6)}>
               <Technology/>
         </div>
       </SwipeableViews>
     </div>
  
       </div>
   )
}

export default Stars
