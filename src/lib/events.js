import { v4 } from 'uuid'

export function makeEvent() {
  return {
    id: v4(),
    name: '',
    hour: 12,
    minute: 0,
  }
}
