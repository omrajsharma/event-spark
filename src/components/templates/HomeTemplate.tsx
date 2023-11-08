import { useEffect, useState } from "react"
import Container from "../atoms/Container"
import axios from "axios"
import EventSection from "../page/home/EventSection"

const HomeTemplate = () => {
    const [sections, setSections] = useState({
        tech: [],
        movie: [],
        standup: [],
        music: [],
    })

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/event/home-page`)
        .then( response => setSections(response.data.data.sections) )
    }, [])

  return (
    <Container>
      <div className="w-full">
        { sections.tech.length > 0 &&       <EventSection title="Tech" events={sections.tech} />}
        { sections.movie.length > 0 &&      <EventSection title="Movie" events={sections.movie} />}
        { sections.standup.length > 0 &&    <EventSection title="Standup" events={sections.standup} />}
        { sections.music.length > 0 &&      <EventSection title="Music" events={sections.music} />}
      </div>
    </Container>
  )
}

export default HomeTemplate
