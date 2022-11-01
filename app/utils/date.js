
export function unixToMyDateObj(unix) {
   const DateNow = unixToDate(unix)
   const hours = isZero(DateNow.getHours())
   const minuts = isZero(DateNow.getMinutes())
   const day = isZero(DateNow.getDate())
   let month = isZero(DateNow.getMonth())
   const year = `${DateNow.getFullYear()}`[2] + `${DateNow.getFullYear()}`[3]
   return {
      time: `${hours}:${minuts}`,
      date: `${day}.${month}.${year}`
   }
}

export function getUnix() {
   return Math.floor(
      Date.now() / 1000
   )
}

function unixToDate(unixTimestamp) {
   return new Date(
      unixTimestamp * 1000
   )
}

function isZero(num) {
   if (num < 10) {
      return `0${num}`
   }
   return num
}

export function strToDateStr(strServer) {
   const dateTime = strServer.split('T')
   const date = dateTime[0].split('-')
   const time = dateTime[1].split(':')
   return {
      time: `${time[0]}:${time[1]}`,
      date: `${date[2]}.${date[1]}.${date[0][2]}${date[0][3]}`
   }
}


