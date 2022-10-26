import { calculateTime } from '../lib/events'
import Input from './Input'

export default function Event({ event, changeEvent }) {
  function handleChange(key, value) {
    changeEvent(event, { [key]: value })
  }

  return (
    <div>
      <Input
        type="text"
        value={event.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <Input
        type="number"
        value={event.hour}
        onChange={(e) => handleChange('hour', e.target.value)}
        min="0"
        max="23"
      />
      <Input
        type="number"
        value={event.minute}
        onChange={(e) => handleChange('minute', e.target.value)}
        min="0"
        max="59"
      />
      {calculateTime(event.hour, event.minute).map((val, i) => (
        <p key={i}>
          {val.label}: {val.value}
        </p>
      ))}
    </div>
  )
}
