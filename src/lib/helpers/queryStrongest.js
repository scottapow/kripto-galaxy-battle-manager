const kCharsSelector = '.content-wrapper > div > button + div > div:nth-child(5) > div'
const kCharStatsSelector = '> div > div:nth-child(2) > div:nth-child(2) > div[width] > div'
const kCharNameSelector = '> div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'

console.log(Array.from(document.querySelectorAll(kCharsSelector)).map((el, i) => {
  const statsSelector = `${kCharsSelector}:nth-child(${i + 1}) ${kCharStatsSelector}`
  const statsEls = Array.from(el.querySelectorAll(statsSelector))
  const nameSelector = `${kCharsSelector}:nth-child(${i + 1}) ${kCharNameSelector}`
  const name = el.querySelector(nameSelector)
  const [str, spd, nrg] = statsEls.map(stat => stat.querySelector('div:nth-child(2)').textContent)
  return {
    name: name.textContent, 
    totalStats: Number(str) + Number(spd) + Number(nrg)
  }
}).sort((a, b) => a.totalStats - b.totalStats).reverse())