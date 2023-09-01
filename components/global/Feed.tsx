import React from 'react'
import FeedCard from "../global/FeedCard"
import StoreCard from './StoreCard'

interface Store {
  storename: string;
  location: {
      lat: number;
      lng: number;
  };
  rating: {
      rating: number;
      numberofRaters: number;
  };
  storeimage: string;
  storeAvatar: string;
  description: string;
  isopen: boolean;
}


const storesData: Store[] = [
    {
        "storename": "Sample Store 1",
        "location": {
            "lat": 40.7128,
            "lng": -74.0060
        },
        "rating": {
            "rating": 4.5,
            "numberofRaters": 120
        },
        "storeimage": "sample_image1.jpg",
        "storeAvatar": "avatar1.jpg",
        "description": "A trendy store offering a wide range of products.",
        "isopen": true
    },
    {
        "storename": "Sample Store 2",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "rating": {
            "rating": 4.2,
            "numberofRaters": 95
        },
        "storeimage": "sample_image2.jpg",
        "storeAvatar": "avatar2.jpg",
        "description": "Your one-stop shop for all your shopping needs.",
        "isopen": false
    },
    {
        "storename": "Sample Store 3",
        "location": {
            "lat": 51.5074,
            "lng": -0.1278
        },
        "rating": {
            "rating": 4.8,
            "numberofRaters": 200
        },
        "storeimage": "sample_image3.jpg",
        "storeAvatar": "avatar3.jpg",
        "description": "A classic store with a modern twist.",
        "isopen": true
    },
    {
        "storename": "Sample Store 4",
        "location": {
            "lat": 35.682839,
            "lng": 139.759455
        },
        "rating": {
            "rating": 4.7,
            "numberofRaters": 150
        },
        "storeimage": "sample_image4.jpg",
        "storeAvatar": "avatar4.jpg",
        "description": "Discover unique and artisanal products here.",
        "isopen": true
    },
    {
        "storename": "Sample Store 5",
        "location": {
            "lat": 52.5200,
            "lng": 13.4050
        },
        "rating": {
            "rating": 4.6,
            "numberofRaters": 180
        },
        "storeimage": "sample_image5.jpg",
        "storeAvatar": "avatar5.jpg",
        "description": "Your local store for quality goods.",
        "isopen": true
    },
    {
        "storename": "Sample Store 6",
        "location": {
            "lat": 41.8781,
            "lng": -87.6298
        },
        "rating": {
            "rating": 4.3,
            "numberofRaters": 110
        },
        "storeimage": "sample_image6.jpg",
        "storeAvatar": "avatar6.jpg",
        "description": "Shop with confidence at Sample Store 6.",
        "isopen": true
    },
    {
        "storename": "Sample Store 7",
        "location": {
            "lat": 48.8566,
            "lng": 2.3522
        },
        "rating": {
            "rating": 4.9,
            "numberofRaters": 220
        },
        "storeimage": "sample_image7.jpg",
        "storeAvatar": "avatar7.jpg",
        "description": "Elegance meets affordability at Sample Store 7.",
        "isopen": true
    },
    {
        "storename": "Sample Store 8",
        "location": {
            "lat": 37.7749,
            "lng": -122.4194
        },
        "rating": {
            "rating": 4.4,
            "numberofRaters": 130
        },
        "storeimage": "sample_image8.jpg",
        "storeAvatar": "avatar8.jpg",
        "description": "Your friendly neighborhood store.",
        "isopen": true
    },
    {
        "storename": "Sample Store 9",
        "location": {
            "lat": 52.3667,
            "lng": 4.8945
        },
        "rating": {
            "rating": 4.0,
            "numberofRaters": 80
        },
        "storeimage": "sample_image9.jpg",
        "storeAvatar": "avatar9.jpg",
        "description": "Quality products at unbeatable prices.",
        "isopen": false
    },
    {
        "storename": "Sample Store 10",
        "location": {
            "lat": 34.0522,
            "lng": -118.2437
        },
        "rating": {
            "rating": 4.6,
            "numberofRaters": 160
        },
        "storeimage": "sample_image10.jpg",
        "storeAvatar": "avatar10.jpg",
        "description": "A store that caters to your every need.",
        "isopen": true
    }
]



export default function Feed() {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
      {
        storesData.map((store,id)=>{
          return(
            <StoreCard store={store}/>
          )
        })
      }
    </div>
  )
}
