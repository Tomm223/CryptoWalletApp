export function contructionOptionCurrency(arr) {
   const target = [{ value: null, label: "All" }]
   arr.forEach(element => {
      const symbol = element?.coin?.symbol
      const coinId = element?.coin?.coinId
      const condidate = target.find(i => i.value === coinId)
      if (!condidate && symbol && coinId) {
         target.push({ value: coinId, label: symbol })
      }
   });

   return target
}