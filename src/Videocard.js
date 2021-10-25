import React,{ useRef,useState} from 'react'
import './videocard.css'

import {
Card,


} from '@material-ui/core'
import {
AccessTime,
ShareOutlined,
FavoriteBorder,
 NewReleasesRounded,
PlayArrowRounded,
 PlayCircleOutlineRounded,
 ChatBubbleOutline,

} from '@material-ui/icons'
function Videocard({newsrc,newtype,title,videosrc,description,time,newstypeimg,love,share,comment}) {


    const [isVideoplaying, setisVideoplaying]=useState(false)
    const Videoref=useRef(null)
    const Playvideo=()=>{
    if(isVideoplaying){
    //stop
    Videoref.current.pause()
    setisVideoplaying(false)

    }else{
    //play
    Videoref.current.play()
    setisVideoplaying(true)

    }
    
    }



    return (
      <div className="videocard">
        <div className="card1">
            <Card className="cardmain1">
             <div className="card__header1">
             <div className="card__headerleft1">
             <NewReleasesRounded/>
            <p>{newsrc}</p>
            </div>
            <div className="card__headerright1">
          <img src={newstypeimg}/>
            <p>{newtype}</p>
            </div>
            </div>
            <div className="card__image1">
             
           {isVideoplaying?"":(
            (<PlayArrowRounded style={{fontSize:90,borderRadius:50,color:"whitesmoke",}} className="play"/>)
           )}
           
            <video  src={videosrc}
             ref={Videoref}
             onClick={Playvideo}
             className="video__player"
              loop
 
            
            
 />
            
            </div>
            <div className="card__content1">
            <div className="card__contenttitle1">
          <marquee>{title}</marquee>
            
            </div>
            <div className="card__contentdescription1">
            <p>{description}</p>
            
            </div>
            </div>
            <div className="card__footer1">
            <div className="card__footericonscontent1">
            <AccessTime/>
            <p>{time}</p>
            </div>
            <div className="card__footericonscontent1">
            <FavoriteBorder/>
            <p>{love}</p>
            </div>
            <div className="card__footericonscontent1">
            <ChatBubbleOutline/>
            <p>{comment}</p>
            </div>
            <div className="card__footericonscontent1">
            <ShareOutlined/>
            <p>{share}</p>
            </div>
            
            
         
            </div>
            <p className="follow1">. Track</p>
            </Card>
        </div>
        </div>
    )
}

export default Videocard
