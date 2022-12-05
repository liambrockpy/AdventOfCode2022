const text = await Deno.readTextFile('4.txt')
const arr = text.split('\n')

let count = 0

arr.forEach(line => {
    if (line) {
        let [a, b] = line.split(',')
        let aArr = a.split('-')
        let bArr = b.split('-')
        if (parseInt(aArr[0]) > parseInt(bArr[0])) {
            aArr = b.split('-')
            bArr = a.split('-')
        }
        let isCount = parseInt(aArr[0]) <= parseInt(bArr[0]) && parseInt(bArr[0]) <= parseInt(aArr[1])
        console.log(aArr[0], aArr[1], bArr[0], bArr[1], isCount)
        if (isCount) count++
    }
})
console.log('count: ', count)
