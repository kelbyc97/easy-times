import { useState } from 'react'
import Event from './Event'
import { makeEvent } from '../lib/events'

export function Events() {
  const [events, setEvents] = useState([])

  function addEvent() {
    setEvents([...events, makeEvent()])
  }

  function removeEvent() {
    const _events = [...events]
    _events.pop()

    setEvents(_events)
  }

  function changeEvent(event, payload) {
    setEvents(
      events.map((_event) => {
        if (event.id === _event.id) {
          return {
            ...event,
            ...payload,
          }
        }

        return _event
      })
    )
  }

  return (
    <div>
      {events.map((event) => (
        <Event key={event.id} event={event} changeEvent={changeEvent} />
      ))}
      <button onClick={addEvent}>Add</button>
      <button onClick={removeEvent}>Remove</button>
    </div>
  )
}
