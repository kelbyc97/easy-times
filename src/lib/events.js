import { v4 } from 'uuid'
import { format, parse, sub } from 'date-fns'
import { INTERVALS } from './constants'

export function makeEvent() {
  return {
    id: v4(),
    name: '',
    hour: 12,
    minute: 0,
  }
}

export function calculateTime(hours, minutes) {
  const date = `${hours}/${minutes}`
  const now = new Date()
  const parsedDate = parse(date, 'H/m', now)
  const values = []

  INTERVALS.forEach((INT) => {
    const subtract = sub(parsedDate, INT)

    values.push({
      label: `${INT.minutes || INT.seconds} ${
        INT.minutes ? 'minutes' : 'seconds'
      }`,
      value: format(subtract, 'k:mm:ss'),
    })
  })

  return values
}
