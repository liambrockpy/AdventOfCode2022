const text = await Deno.readTextFile('3.txt')
const arr = text.split('\n')

let totalScore = 0

interface Count {
    [letter: string]: number
}
let groupArr:string[] = []

arr.forEach((rs, i) => {
    if (rs) {
        // const length = rs.length
        // const c1 = rs.substring(0, length / 2)
        // const c2 = rs.substring(length / 2, length)
        // const set1 = new Set(c1.split(''))
        // const set2 = new Set(c2.split(''))
        // set2.forEach(l => {
        //     if (set1.has(l)) {
        //         totalScore += /[A-Z]/.test(l) ? (l.charCodeAt(0) - 38) : (l.charCodeAt(0) - 96)
        //     }
        // })

        let mySet = new Set(rs.split(''))
        mySet.forEach(val => groupArr.push(val))

        if ((i + 1) % 3 === 0) {
            const counted = groupArr.reduce((allLetters: Count, letter) => {
                const currCount = allLetters[letter] ?? 0
                return {
                    ...allLetters,
                    [letter]: currCount + 1
                }
            }, {})

            for (const [key, value] of Object.entries(counted)) {
                if (value === 3) {
                    totalScore += /[A-Z]/.test(key) ? (key.charCodeAt(0) - 38) : (key.charCodeAt(0) - 96)
                }
            }
            groupArr = []
        }
    }

})

console.log(totalScore)
