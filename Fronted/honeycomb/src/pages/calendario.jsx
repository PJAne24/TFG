import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'



const calendario = () =>{
    const localizer = dayjsLocalizer(dayjs)
    return (
        <div>
            <Calendar
                localizer={localizer}
                style={{ height: 500 }}
            />
        </div>
    )

}

export default calendario