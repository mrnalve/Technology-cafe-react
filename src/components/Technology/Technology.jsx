import React from 'react';
import './Technology.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'

const Technology = (props) => {
    const {Author_name, Author_image, Blog_title, Cover_image, Read_time, Publish_Date} = props.user
    const handleBookmarked = props.handleBookmarked;
    const handleReadTime = props.handleReadTime;
    return (
        <div>
            <div className="cover_image">
                <img src={Cover_image} alt="" />
            </div>
            <div className="author">
                <div className="author_detail">
                    <div className="author_image">
                        <img src={Author_image} alt="" />
                    </div>
                    <div className="author_name">
                        <h5>{Author_name}</h5>
                        <span>{Publish_Date}</span>
                    </div>
                </div>
                <div className="read_time">
                    <span>{Read_time} min read</span>
                    <span onClick={()=>handleBookmarked(props.user)}><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </div>
            <h1 className='blog_title'>{Blog_title}</h1>
            <p className='hash_tag'>#beginners #programming</p>
            <p onClick={()=>handleReadTime(props.user)} className='mark_read'>Mark as read</p>
        </div>
    );
};

export default Technology;