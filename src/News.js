import React, { useEffect ,useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './news.css'
import InfiniteScroll from "react-infinite-scroll-component";
import {AllInclusive} from '@material-ui/icons'
import ApiNews from './ApiNews'
import {fetchPosts2} from'./api/index'
import CardPost from  './CardPost'
import Moment from 'react-moment';
import {Skeleton,Stack} from '@mui/material'
import Stories from 'react-insta-stories';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from './actions/Post';
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function News(setCurrentId) {
  
 





// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)
// console.log(posts)
// const recommendedPosts = posts.filter(({ tags }) => tags== 'all');
// console.log(recommendedPosts)
// // stories
const stories = 

 posts.map((post)=>(
  // post.image!==""?
    {
   
      type: post.image==""?"video":"image",
     
      url: post.image||post.video,
      duration: 5000,
      header: {
        heading:post.name,
    
          subheading:(<Moment fromNow>{post.createdAt}</Moment>) ,
        profileImage: post.photo,
      },
      seeMore: ({ close }) => {
        return <div className="stort_title" onClick={close}><p>{post.title}</p></div>;
      }
    }
    // :(<div>hello</div>)
    ))

if(!posts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
 
{
isLoading?(<div className="loader__news">
 <Stack spacing={1}>
   
      <Skeleton variant="circular" width={30} height={30} />
      <Skeleton variant="rectangular" width={400} height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      
    </Stack>


</div>):
(<div>
   <div className="stories">
  <div className="stories1">
<Stories
			stories={stories}
			defaultInterval={1500}
			width="100%"
			height={220}
      isPaused={true}
      loop={true}
      storyStyles={{

       
        width: '400px',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        objectFit:'cover',
        height: '220px',

      }
      }
		/>
     </div>
     <div className="stories2">
       
<p>DISCOVERIES</p>
<AllInclusive/>
     </div>
    </div>
  
</div>)
}
<div className="Page__div">
<ApiNews/>
</div>

</div>

)
}

export default News
