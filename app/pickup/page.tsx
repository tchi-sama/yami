"use client";
import Navbar from "@/components/global/Navbar";
import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import StoreCard from "@/components/global/StoreCard";



const store = {
    storeName: "Pizza Delight",
    id: 12345,
    rating: {
        rating: 4.5,
        numberOfRaters: 250,
    },
    description: "A cozy pizzeria serving delicious, handcrafted pizzas.",
    hourOfWorkInWeek: {
        Monday: "10:00 AM - 10:00 PM",
        Tuesday: "10:00 AM - 10:00 PM",
        Wednesday: "10:00 AM - 10:00 PM",
        Thursday: "10:00 AM - 10:00 PM",
        Friday: "10:00 AM - 11:00 PM",
        Saturday: "11:00 AM - 11:00 PM",
        Sunday: "11:00 AM - 10:00 PM",
    },
    jobTime: ["Full-time", "Part-time"],
    backgroundImage: "url('pizza_store_background.jpg')",
    avatarImage: "url('pizza_store_logo.png')",
    location: {
        lat: 40.7128,
        lng: -74.006,
    },
}

export default function page() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDiw2SgHZhwKFO9-y0OVLl4Q4XwVcoErqo",
  });
  if (!isLoaded)
    return (
      <div>
        <Navbar dlr={false} />
        <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
          Loading
        </div>
      </div>
    );
  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar dlr={false} />
      <div className="h-screen w-full pt-16 flex">
        <div className="bg-gray-100 grid grid-cols-1 p-2 gap-4 shadow w-[500px] overflow-y-auto">
            <StoreCard store={store}/>
            <StoreCard store={store}/>
            <StoreCard store={store}/>
            <StoreCard store={store}/>
            <StoreCard store={store}/>
            <StoreCard store={store}/>
            <StoreCard store={store}/>
        </div>
        <Map />
      </div>
    </div>
  );
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="w-full  h-full"
    >
      <OverlayView
        position={{ lat: 44, lng: -80 }}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        {/* <div className='bg-white shadow-md flex justify-center items-center text-xl translate-y-[-50%] translate-x-[-50%] w-12 h-12 rounded-full '>hi</div> */}
        <Popover>
          <PopoverTrigger className="flex items-center gap-1">
            <Avatar className="translate-y-[-50%] translate-x-[-50%] border-[4px] border-white shadow-md">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="p-0 bg-transparent border-none min-w-[400px]">
            <StoreCard
              store={store}
            />
          </PopoverContent>
        </Popover>
      </OverlayView>
    </GoogleMap>
  );
}

// AIzaSyDkPLJeneDwqcoGmPjnAwP1p1cxKLVUuQc
