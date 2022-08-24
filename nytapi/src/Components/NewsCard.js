import React from 'react';
import {nanoid} from 'nanoid';

const NewsCard=({articles})=>{

    const updateMark=()=>{
        
    }


    return(
        <div className='story-container'>
            <ul className='story'>
                {articles.map((story)=>(
                    <div className='story'>
                        <h3 className='story-header'>{story.headline.main}</h3>
                        <li>{story.snippet}</li>
                        <br/>
                        <li>{story.lead_paragraph}</li>
                        <br/>
                        <p><strong>{story.source}</strong></p>
                        <p><strong>{story.byline.original}</strong></p>
                        <img src={story.multimedia.url}></img>
                        <br/>
                        <button><a href={story.web_url}>read more</a></button>
                        <button>Mark</button>
                    </div>
            ))}
            
            </ul>
        </div>

    )
}

export default NewsCard;