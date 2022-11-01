export const fixedNum = (num, countbackNum = 2) => {
   if (typeof num === 'number') {
      //округляем до двух знаков после запятой
      return Math.round(num * Math.pow(10, countbackNum)) / Math.pow(10, countbackNum);
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