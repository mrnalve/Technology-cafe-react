import React from 'react';
import './SideCard.css'

const SideCard = ({sideData, readTime}) => {
    let time = 0;
    readTime.map(data => {
        time= time + parseInt(data.Read_time)
    })
    return (
        <div className='sideCard'>
            <div className="show_time"><h4>Spent time on read : {time} min</h4></div>
            <div className="show_bookmarked">
                <h5>Bookmarked Blogs : {sideData.length}</h5>
                {
                    sideData.map(data=> <p>{data.Blog_title}</p>)
                }
            </div>
        </div>
    );
};

export default SideCard;