import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import DatePicker from "react-datepicker";

function Calendar() {

    const [date, setDate] = useState(new Date());
    const [dates, setDates] = useState<Date[]>([]);

    const addDate = (date:Date) => {
        if(!dates.includes(date))
            setDates([...dates, date]);
    }

    const formatter = new Intl.DateTimeFormat('ko');

    return (
        <div>
            <div style={{display: 'flex'}}>
                <DatePicker selected={date} onChange={(date:Date) => setDate(date)}></DatePicker>
                <Button variant="primary" onClick={() => {addDate(date)}} style={{width: '100px'}}>추가</Button>
            </div>
            <div style={{display: 'flex'}}>
                {dates.map(date => 
                    <Card style={{ width: '10rem', margin: '5px' }}>
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