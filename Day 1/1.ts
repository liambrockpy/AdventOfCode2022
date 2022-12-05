const text = await Deno.readTextFile('1.txt')

const arr = text.split('\n\n')
const removeNewLineArr = arr.map(e => e.split('\n'))
const totalsArr: number[] = []

removeNewLineArr.forEach((entryArr) => {
    let total = 0
    entryArr.forEach(str => total += (parseInt(str) || 0))
    totalsArr.push(total)
})
totalsArr.sort((a, b) => a - b)
// console.log(totalsArr)
const top3 = totalsArr.at(-1)! + totalsArr.at(-2)! + totalsArr.at(-3)!
console.log(top3)
// const max = arr[0].reduce((acc, curr) => {return acc + curr}, 0)
// console.log(arr)
