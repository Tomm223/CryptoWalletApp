function unixToMyDateObj(unix) {
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


module.exports = unixToMyDateObj