import React,{useState,useEffect} from 'react'
import './news.css'
import ScienceApi from './ScienceAPI'
import CardPost from  './CardPost'
import Paginate from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import {getPostsBySearch,getPost} from './actions/Post'
function useQuery1() {
  return new URLSearchParams(useLocation().search);
}
function Science(setCurrentId) {
// FETCH POST
  const query = useQuery1();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

const {posts,isLoading}=useSelector((state)=>state.posts)
console.log(posts)
// filter
const { tag} = useParams();
const dispatch=useDispatch();
useEffect(() => {
  dispatch(getPost(tag));
}, [tag]);
const recommendedPosts = posts.filter(({ tags }) => tags== 'Science News');
console.log(recommendedPosts)
if(!recommendedPosts.length && !isLoading){
  return 'no Post'
}
return (
<div className="news">
{/* {
isLoading?("Loading"):
(<div> */}
{/* {recommendedPosts.map((post)=>(  
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
))} */}
{/* </div>)
} */}
<div className="Page__div">

{/* <ScienceApi/> */}
</div>

</div>

)
}

export default Science
