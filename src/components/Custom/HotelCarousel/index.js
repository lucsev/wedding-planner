import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

function HotelCarousel(props)
{
    var items = [
        {
            path: "/59.jpg"
        },
        {
            path: "/43.jpg"
        },
        {
            path: "/19.jpg"
        },
        {
            path: "/80.jpg"
        },
        {
            path: "/71.jpg"
        },
        {
            path: "/58.jpg"
        }
    ]

    return (
        <Carousel navButtonsAlwaysVisible interval="4000">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    // <h2>{props.item.name}</h2>
    //<img src="https://i.imgur.com/n6jrQtP.jpg" style={{ maxWidth: '100%', maxHeight: '600px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
    
    return (
        <div style={{ paddingTop: '25px', paddingBottom: '10px'}}>           
  <BackgroundBlogCard
              image={props.item.path}
              title=""
              description=""
              action={{
                type: "internal",
                route: "/somewhere",
                color: "info",
                label: ""
              }}
            />
        </div>
    )
}

export default HotelCarousel;