// import React,{useState,useEffect,useRef} from 'react'
// import Rightmobileslider from'@material-ui/core/Drawer'
// import {getAllVideos,createVideo,getPosts, deleteVideos} from './APIfuana'
// import './image.css'
// import Loader from "react-loader-spinner";
// import Robot from './video.mp4'
// import InfiniteScroll from "react-infinite-scroller";
// import { useInfiniteQuery } from "react-query";
// import numeral from 'numeral'
// import {Avatar} from '@material-ui/core'
// import {
// FavoriteBorder,
// CloudDownload,
// PlayArrowRounded,
// ShareOutlined,
// PlayCircleOutlineRounded,
// RemoveRedEyeOutlined,
// ChatBubbleOutline,
// CheckCircle,
// Close,
// VisibilityOffOutlined,
// PersonAddDisabledOutlined,
// VolumeMuteOutlined,
// BlockOutlined,
// ErrorOutlineOutlined,
// VisibilityOutlined,

// }from '@material-ui/icons'

// function Videonext() {
//     const [video,setVideos]=useState('')
// useEffect(() => {
// getAllVideos.then(res =>{
// setVideos(res)
// console.log(res)
// })


// },[video])

//  const fetchPosts = async ({ pageParam = 1 }) => {
//   const response = await fetch(
// getAllVideos
//   );
//   const results = await response.json();
//       return { results, nextPage: pageParam + 1, totalPages: 100 };
//   }; 




// function handleDeleteItem(event, id) {
//     event.preventDefault();
//     deleteVideos(id).then(res => res);
//     const newExpenses = video.filter(video => video.ref.id !== id);
//     setVideos(newExpenses);
//   }

//   const {
//     data,
//     isLoading,
//     isError,
//     hasNextPage,
//     fetchNextPage
//     } = useInfiniteQuery("video", getPosts, {
//     getNextPageParam: (lastPage, pages) => {
//     if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
//     return undefined;
//     }
//     });
//     console.log(data,"data")



// // play video
// const [isVideoplaying, setisVideoplaying]=useState(false)
//     const Videoref=useRef(null)
//     const Playvideo=()=>{
//     if(isVideoplaying){
//     //stop
//     Videoref.current.pause()
//     setisVideoplaying(false)

//     }else{
//     //play
//     Videoref.current.play()
//     setisVideoplaying(true)

//     }
    
//     }
//     // / UN TRACK AN UN FOLLOW DRAWER

//     const [state,setState]=useState({
//     right:false
//     })
//     const toglesliders=(slider,open)=>()=>{
    
//     setState({...state,[slider]:open })
//     }
//     const sliderlists= slider=>(
//     <div component="div"className="slider"
//     onClick={toglesliders(slider,false)}>
//     <div className="icons__body">
//     <div className="icons__child">
//     <VisibilityOutlined/>
//     <p>view creator</p>
//     </div>
//     <div className="icons__child">
//     <VisibilityOffOutlined/>
//     <p>Don't want to see this post</p>
//     </div>
//     <div className="icons__child">
//     <PersonAddDisabledOutlined/>
//     <p>Un Track @pehjos</p>
    
//     </div>
//     <div className="icons__child">
//     <VolumeMuteOutlined/>
//     <p>Mute</p>
//     </div>
//     <div className="icons__child">
//     <BlockOutlined/>
//     <p>Block</p>
//     </div>
//     <div className="icons__child">
//     <ErrorOutlineOutlined/>
//     <p>Report</p>
//     </div>
//     </div>
    
//     <div className="footer">
//     </div>
//     </div>
//     ) 
    

//     return (
//         <div className="image">
             
//         <div className="videocontent">
//         {isLoading ? (<div className="loader10">
//   <Loader
//         type="Puff"
//         color="#00BFFF"
//         height={50}
//         width={50}
     
//       />
// </div>) : isError ? (
//   <section class="page_404"> <div class="container"> <div class="row"> <div class="col-sm-12 "> <div class="col-sm-10 col-sm-offset-1 text-center"> <div class="four_zero_four_bg"> <h1 class="text-center ">404</h1> </div> <div class="contant_box_404"> <h3 class="h2"> Look like you're lost </h3> <p>the page you are looking for not avaible!</p> <a href="" class="link_404">Go to Home</a> </div> </div> </div> </div> </div> </section>
// ) : (
//         <InfiniteScroll hasMore={hasNextPage} loadMore={fetchNextPage}>
//         {data.pages.map((page) =>
// page.results.data.map((video) => 
//         <div className="cardimg" key={video.ref.id}> 
//         <Rightmobileslider className="drawer" open={state.right} anchor="bottom"
// onClose={toglesliders("right",false)}>
// {sliderlists("right ")}

// </Rightmobileslider >

//          {isVideoplaying?"":(
//             (<PlayCircleOutlineRounded style={{fontSize:70,borderRadius:50,color:"whitesmoke",}} className="play"/>)
//            )}
//            <div className="header">
//            <Avatar size='small' src={video.data.videoName.photo}/>
//            <marquee>{video.data.videoName.title}</marquee>
//            <p onClick={toglesliders("right",true)}>{video.data.videoName.accountType}</p>
//            </div>
//           <video  src={video.data.videoName.video}
//              ref={Videoref}
//              onClick={Playvideo}
//              className="video__player"
//               loop       
            
//  />
//          <div className="tile">
//          <div className="tileright">
//          <p>{video.data.videoName.description}</p>
        
//        </div>
//        <div className="tileleft">
//        <div className="tilelefticons">
//        <ShareOutlined/>
//        <p>{numeral(video.data.videoName.title).format('0 a')}</p>
//        </div>
//        <div className="tilelefticons">
//        <CloudDownload/>
//        <p>{numeral(video.data.videoName.title).format('0 a')}</p>
//        </div>
//        <div className="tilelefticons">
//        <RemoveRedEyeOutlined/>
//          <p>{numeral(video.data.videoName.title).format('0 a')}</p>
//        </div>
//        </div>
//          </div>
//          </div>
     
//          ))}
//          </InfiniteScroll>  
// )}
//          </div> 
//         </div>
//     )
// }

// export default Videonext
