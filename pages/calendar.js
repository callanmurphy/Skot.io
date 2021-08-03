import React from 'react'
import Iframe from 'react-iframe'

export default function Calendar() {

    return (
        <div>
          <h1>Calendar</h1>
          <Iframe url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=aDVqdTM0OG9zZTQ3aGZxMGo5bGFhdnBtM2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23F4511E&amp;color=%230B8043"
            width="1000px"
            height="600px"
            id="myId"
            className="googleCalendar"
            display="initial"
            position="relative"
          />
        </div>
      )
}