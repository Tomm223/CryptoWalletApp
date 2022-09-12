export const fixedNum = (num) => {
   if (typeof num === 'number') {
      //округляем до двух знаков после запятой
      return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
   }
   return num
}

export const fixedCoinNum = (num) => {
   if (typeof num === 'number') {
      //округляем до двух знаков после запятой
      return Math.round(num * Math.pow(10, 5)) / Math.pow(10, 5);
   }
   return num
}

export const floor = (num) => {
   if (typeof num === 'number') {
      //округляем до двух знаков после запятой
      return Math.floor(num)
   }
   return num
}