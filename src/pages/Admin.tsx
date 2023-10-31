import { useEffect, useState } from "react";
import Container from "../components/atoms/Container"
import axios from "axios";
import AppAlert from "../utility/AppAlert";


const AddEventForm = () => {
    const appAlert = AppAlert();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [category, setCategory] = useState('');

    const resetForm = () => {
        setTitle('')
        setDesc('')
        setImgUrl('')
        setLocation('')
        setStartDate('')
        setStartTime('')
        setEndDate('')
        setEndTime('')
        setCategory('')
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // api call
        axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/event`, {
            title, desc, imgUrl, location, startDate, startTime, endDate, endTime, category
        })
            .then(response => {
                console.log(response)
                if (response.status == 201) {
                    if (appAlert && appAlert.showAlert) {
                        appAlert?.showAlert({ message: response?.data?.success, type: "SUCCESS", duration: 5000 })
                        resetForm();
                    }
                }
            })
            .catch(err => {
                if (appAlert && appAlert.showAlert)
                    appAlert?.showAlert({ message: err.response.data.error, type: "ERROR", duration: 5000 });
            })
    }


    return (
        <form className="border-solid border-2 border-slate-300	p-4 rounded-lg max-w-screen-sm mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
            </label>
            <div className="my-2">
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>

            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
            </label>
            <div className="my-2">
                <input
                    type="text"
                    name="description"
                    id="description"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Description"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
            </div>
            <label htmlFor="imgurl" className="block text-sm font-medium leading-6 text-gray-900">
                Image Url
            </label>
            <div className="my-2">
                <input
                    type="text"
                    name="imgurl"
                    id="imgurl"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Image Url"
                    value={imgUrl}
                    onChange={e => setImgUrl(e.target.value)}
                />
            </div>
            <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">
                Location
            </label>
            <div className="my-2">
                <input
                    type="text"
                    name="place"
                    id="place"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Gurgaon, Haryana, India"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                />
            </div>
            <div className="flex gap-3">
                <div className="w-6/12">
                    <label htmlFor="start-date" className="block text-sm font-medium leading-6 text-gray-900">
                        Start Date
                    </label>
                    <div className="my-2">
                        <input
                            type="date"
                            name="start-date"
                            id="start-date"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-6/12">
                    <label htmlFor="start-time" className="block text-sm font-medium leading-6 text-gray-900">
                        Start Time
                    </label>
                    <div className="my-2">
                        <input
                            type="time"
                            name="end-time"
                            id="end-time"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={startTime}
                            onChange={e => setStartTime(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="w-6/12">
                    <label htmlFor="end-date" className="block text-sm font-medium leading-6 text-gray-900">
                        End Date
                    </label>
                    <div className="my-2">
                        <input
                            type="date"
                            name="end-date"
                            id="end-date"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={endDate}
                            onChange={e => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-6/12">
                    <label htmlFor="end-time" className="block text-sm font-medium leading-6 text-gray-900">
                        End Time
                    </label>
                    <div className="my-2">
                        <input
                            type="time"
                            name="end-time"
                            id="end-time"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={endTime}
                            onChange={e => setEndTime(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                Category
            </label>
            <select
                id="category"
                name="category"
                className="my-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <option value="TECH">Tech</option>
                <option value="MOVIE">Movies</option>
                <option value="STANDUP">Standup</option>
                <option value="MUSIC">Music</option>
            </select>
            <div className="flex justify-center">
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                </button>
            </div>
        </form>
    )
}

const AllEvents = ({ data }: any) => {
    const [showAddEventForm, setShowAddEventForm] = useState(false);

    return (
        <div>
            <button onClick={() => setShowAddEventForm(!showAddEventForm)} className="mb-4 rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add Event
            </button>

            {showAddEventForm ? <AddEventForm /> : null}
        </div>
    )
}
const ActiveEvents = ({ data }: any) => {
    return (
        <div>
            Active Events
        </div>
    )
}
const CompletedEvents = ({ data }: any) => {
    return (
        <div>
            Completed Events
        </div>
    )
}
const CancelledEvents = ({ data }: any) => {
    return (
        <div>
            Cancelled Events
        </div>
    )
}

const AdminTabs = [
    { name: "All Events", status: "" },
    { name: "Active", status: "ACTIVE" },
    { name: "Completed", status: "COMPLETED" },
    { name: "Cancelled", status: "CANCELLED" },
]

const Admin = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabData, setTabData] = useState({
        data: [
            {
                category : "",
                createdAt : "",
                desc : "",
                endDate : "",
                endTime : "",
                imgUrl : "",
                location : "",
                startDate : "",
                startTime : "",
                status : "",
                title : "",
            }
        ]
    });

    console.log('tab data', tabData);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/event`)
            .then(response => setTabData(response.data)
            )
    }, [])

    const getTabData = async (status: string) => {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/admin/event?status=${status}`)
        setTabData(response.data);
    }

    return (
        <Container>
            <div className="px-4 py-8 w-full">
                <div className="admin-panel-tab mb-4 flex flex-wrap	gap-1">
                    {AdminTabs.map(
                        (tab, idx) =>
                            <button
                                key={idx}
                                className={`px-4 py-1 mr-2 border-solid border-2 rounded-md ${idx == activeTabIndex ? "border-sky-500" : "border-neutral-500"} `}
                                onClick={() => {
                                    setActiveTabIndex(idx)
                                    getTabData(tab.status)
                                }}
                            >
                                <span className={`${idx == activeTabIndex ? "text-sky-500" : "text-neutral-500"}`}>{tab.name}</span>
                            </button>
                    )}
                </div>
                {activeTabIndex == 0 ? (<AllEvents data={tabData} />)
                    : activeTabIndex == 1 ? (<ActiveEvents data={tabData} />)
                        : activeTabIndex == 2 ? (<CompletedEvents data={tabData} />)
                            : activeTabIndex == 3 ? (<CancelledEvents data={tabData} />)
                                : null}

                {tabData?.data?.length > 0
                    ? tabData?.data?.map(eventInfo => (
                        <div className="border border-solid	border-gray-400 rounded p-3 mb-2 flex gap-2.5">
                            <div className="w-3/12 h-36 rounded overflow-hidden">
                                <img className="w-full h-full object-cover" src={eventInfo.imgUrl} alt="" />
                            </div>
                            <div className="w-9/12">
                                <span className="mb-1 inline-flex items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                                    {eventInfo?.category}
                                </span>
                                <h1 className="mb-1 text-lg font-medium">
                                    {eventInfo?.title}
                                </h1>
                                <p className="mb-2 text-sm">
                                    {eventInfo?.desc?.length > 200 ? (eventInfo?.desc?.slice(0, 200) + '...') : eventInfo?.desc }
                                </p>
                                <p className="mb-1 text-sm">
                                    📍{eventInfo?.location} 
                                </p>
                                <p className="mb-1 text-sm">
                                    ⏰ {eventInfo?.startDate + ' ' + eventInfo?.startTime + ' - ' + eventInfo?.endDate + ' ' + eventInfo?.endTime  }
                                </p>
                            </div>
                        </div>
                    ))
                    : 
                    (
                        <div>
                            No Event!!!
                        </div>
                    )}
            </div>
        </Container>
    )
}

export default Admin
