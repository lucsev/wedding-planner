import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

function HotelCarousel(props)
{
    var items = [
        {
            path: "/exterior.jpg"
        },
        {
            path: "/salon.jpg"
        },
        {
            path: "/galeria.jpg"
        },
        {
            path: "/lobby.jpg"
        },
        {
            path: "/lobby2.jpg"
        },
        {
            path: "/lobby3.jpg"
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