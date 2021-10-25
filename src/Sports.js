import React from 'react';
import {useSelector} from 'react-redux'
import SportsApi from './sportsApi'
import { useHistory, useLocation,Link } from 'react-router-dom';
import './sports.css'
import CardPost from  './CardPost'
import Loader from './Contentloader'
import Paginate from './Pagination';
import {Adjust} from '@material-ui/icons'
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function Sports(setCurrentId) {
// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 2 && 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)
console.log(posts)

const recommendedPosts = posts.filter(({ tags }) => tags== 'Sports News');
console.log(recommendedPosts)
if(!recommendedPosts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
<div className="sportsheader">
           <div className="sportsheadercontent">
        <Link to="/Live"><p>GO Live</p></Link>  
         <Adjust className="blinking"/>
      </div>
      </div>
{/* {
isLoading?("Loading"):
(<div>
{recommendedPosts.map((post)=>(  
<CardPost post={post} setCurrentId={setCurrentId} key={post._id}
newsrc={post.name}
newtype={post.accountType}
newstypeimg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYd2zxgqMSBA62puWUurhS_MLaOmpoOEoQZA&usqp=CAU"
Url="url"
newimage={post.image}
video={post.video}
title={post.title}
description={post.description}
tag={post.tags}
seeMore="see more..."
articlebody={post.description}
ProviderUrl="url"
time={post.createdAt}
share="100"
love={post.likeCount}
comment="79"
/>
))}
</div>)
} */}
<div className="Page__div">
{/* <Paginate page={page}/> */}
{/* <SportsApi/> */}
</div>

</div>

)
}

export default Sports
