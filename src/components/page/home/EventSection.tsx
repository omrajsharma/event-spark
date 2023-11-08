import { Link } from 'react-router-dom'
import Card from '../../atoms/Card'

const EventSection = ({title, events}: any) => {
    return (
        <section className="w-full mb-8">
            <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
            {/* CARD LIST */}
            <div className="w-full flex gap-2 overflow-scroll">
                {events.map((event: any) => (
                    <Link to={'/event/' + event.id}>
                        <Card style={{ minWidth: '400px', height: '300px' }} >
                            <div style={{ height: '230px', marginBottom: '8px' }}>
                                <img src={event?.img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                            </div>
                            <p className='text-sm'>{event?.title}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default EventSection
