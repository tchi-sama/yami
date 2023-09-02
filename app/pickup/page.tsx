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
import { useStores } from "../store";




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
        </div>
        <Map />
      </div>
    </div>
  );
}

function Map() {
  const {stores} = useStores()
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="w-full  h-full"
    >
      {
        stores.map((store,i)=>{
          return(
              <OverlayView
                position={{ lat: store.location.lat, lng: store.location.lng }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                key={store.id}
              >
                {/* <div className='bg-white shadow-md flex justify-center items-center text-xl translate-y-[-50%] translate-x-[-50%] w-12 h-12 rounded-full '>hi</div> */}
                <Popover>
                  <PopoverTrigger className="flex items-center gap-1">
                    <Avatar className="translate-y-[-50%] translate-x-[-50%] border-[4px] border-white shadow-md">
                      <AvatarImage className="object-cover" src={store.backgroundImage} alt="@shadcn" />
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
          )
        })
      }
    </GoogleMap>
  );
}

// AIzaSyDkPLJeneDwqcoGmPjnAwP1p1cxKLVUuQc
