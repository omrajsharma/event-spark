import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Container from "../components/atoms/Container";
import {UserContext} from "../context/UserContext";
import AppAlert from "../utility/AppAlert";


const EventDetail = () => {
  const appAlert = AppAlert();
  const userContext = useContext(UserContext);
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

  const buyTicket = async () => {
    if (!userContext.isUserInfo()) {
      if (appAlert && appAlert.showAlert) {
        appAlert?.showAlert({ message: "Please login to buy ticket", type: "ERROR", duration: 5000 })
      }
      return;
    }
    // get order id
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/payment/order?movie_id=${eventId}`)
    const orderInfo = response.data;
    console.log(orderInfo);

    const options = {
      key: import.meta.env.VITE_BASE_URL.RAZOR_PAY_KEY_ID,
      name: "Event Spark",
      description: "Some Description",
      order_id: orderInfo.id,
      currency: orderInfo.currency,
      amount: orderInfo.amount,
      image: `${import.meta.env.VITE_BASE_URL}/static/logo.jpg`,
      handler: async (response: any) => {
        debugger
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `${import.meta.env.VITE_BASE_URL}/api/v1/payment/capture/${paymentId}`;
         const captureResponse = await axios.post(url, {})
         console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  return (
    <Container>
      <div className="w-full py-4">
        <div className="w-full my-4">
          <img src={eventDetail.img} className="w-full object-cover rounded" style={{height: "300px"}} />
        </div>
        <div className="flex justify-between">
          <h1 className="text-3xl font-medium	mb-3">{eventDetail.title}</h1>
          <button onClick={buyTicket} type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Buy Ticket
          </button>
        </div>
        <p className="text-sm text-gray-600 font-medium mb-1">📍 {eventDetail.location}</p>
        <p className="text-sm text-gray-600 font-medium mb-1"> ⏰ Start : {eventDetail.startTime}</p>
        <p className="text-sm text-gray-600 font-medium mb-1"> ⏰ End : {eventDetail.endTime}</p>
        <p>{eventDetail.desc}</p>
      </div>
    </Container>
  )
}

export default EventDetail
