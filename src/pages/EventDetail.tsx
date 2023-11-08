import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Container from "../components/atoms/Container";


const EventDetail = () => {
  const {eventId} = useParams();
  const [eventDetail, setEventDetail] = useState({
    title: "",
    desc: "",
    img: "",
    location: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/event/${eventId}`)
      .then( response => setEventDetail(response.data.data) )
  }, [])

  return (
    <Container>
      <div className="w-full py-4">
        <div className="w-full my-4">
          <img src={eventDetail.img} className="w-full object-cover rounded" style={{height: "300px"}} />
        </div>
        <h1 className="text-3xl font-medium	mb-3">{eventDetail.title}</h1>
        <p className="text-sm text-gray-600 font-medium mb-1">📍 {eventDetail.location}</p>
        <p className="text-sm text-gray-600 font-medium mb-1"> ⏰ Start : {eventDetail.startTime}</p>
        <p className="text-sm text-gray-600 font-medium mb-1"> ⏰ End : {eventDetail.endTime}</p>
        <p>{eventDetail.desc}</p>
      </div>
    </Container>
  )
}

export default EventDetail
