import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";

type CalendarProp = {
    date: Date | undefined
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}

function Calendar({ date, setDate }:CalendarProp) {

    const [datePick, setDatePick] = useState(new Date());
    const [dates, setDates] = useState<Date[]>([]);

    const addDate = (date:Date) => {
        if(!dates.includes(date))
            setDates([...dates, date].sort((a, b) => a.getTime() - b.getTime()));
    }

    const formatter = new Intl.DateTimeFormat('ko');

    const dateClick = () => {}

    return (
        <div>
            <div style={{display: 'flex'}}>
                <DatePicker selected={datePick} onChange={(datePick:Date) => setDatePick(datePick)}></DatePicker>
                <Button variant="primary" onClick={() => {addDate(datePick)}} style={{width: '100px'}}>추가</Button>
            </div>
            <div style={{display: 'flex'}}>
                {dates.map(date => 
                    <Card style={{ width: '10rem', margin: '5px' }} onClick={() => {setDate(date)}}>
                        <Card.Body>
                            <Card.Title>{formatter.format(date)}</Card.Title>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default Calendar;