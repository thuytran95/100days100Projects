import { excludeById, getMultipleDate, getTodayStr } from './utils';
import Axios from 'axios';

/*
functions that simulate network requests
*/

let todayStr = getTodayStr()
let eventGuid = 0
let eventDb = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]

const DELAY = 3000
let simulateErrors = false

document.addEventListener('keypress', (ev) => {
  if (ev.key === 'e') {
    alert('You pressed the key "e". Will begin to simulate errors.')
    simulateErrors = true
  }
})

export function requestEventsInRange(startStr, endStr) {
  console.log(`[STUB] requesting events from ${startStr} to ${endStr}`);
  // return Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
  //   console.log(res);
  //   return res;
  // }).catch(err => {
  //   console.log(err);
  // })
 return Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    console.log(res.data);
    const data = res.data.map((item, idx) => {
      const start  = getMultipleDate(idx)
     return ({id: item.id, title: item.title, start})
    });
    console.log(data);
    return data.slice(0, 10);

  }).catch(err => {
    console.log(err);
  })

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (simulateErrors) {
  //       reject(new Error('error'))
  //     } else {
  //       resolve(eventDb) // won't use the start/end, always return whole DB
  //     }
  //   }, DELAY)
  // })
}

export function requestEventCreate(plainEventObject) {
  console.log('[STUB] requesting event create:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        let newEventId = createEventId()
        let objWithId = {...plainEventObject, id: newEventId}
        eventDb.push(objWithId)
        resolve(newEventId)
      }
    }, DELAY)
  })
}

export function requestEventUpdate(plainEventObject) {
  console.log('[STUB] requesting event update:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, plainEventObject.id)
        eventDb.push(plainEventObject)
        resolve(eventDb)
      }
    }, DELAY)
  })
}

export function requestEventDelete(eventId) {
  console.log('[STUB] requesting event delete, id:', eventId)

  return new Promise((resolve, reject) => {
    setTimeout(() => { // simulate network delay
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, eventId)
        resolve(eventDb)
      }
    }, DELAY)
  })
}

function createEventId() {
  return String(eventGuid++)
}
