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
        min="1"
        max="24"
      />
      <Input
        type="number"
        value={event.minute}
        onChange={(e) => handleChange('minute', e.target.value)}
        min="1"
        max="60"
      />
    </div>
  )
}
