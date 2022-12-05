// First column - opponent
// A = rock
// B = Paper
// C = Scissors

// 2nd col - response
// X = rock
// Y = paper
// Z = scissors

//A+X = 1, A+Y = 2, A+Z = 0
//B+X = 0, B+Y = 1, B+Z = 2
//C+X = 2, C+Y = 0, C+Z = 1

//[0, 1, 2] 0 % 3

//a = 1, b = 0, c = 2
//x = 0, y = 1, z = 2

// total score = scoreInRound
// scoreInRound = shapeSelected + roundOutcome

// pt1 was... 
// opp + me = ?

// pt2 now...
// opp + ? = result

// x = lose
// y = draw
// z = win

//A+X = 2, A+Y = 0, A+Z = 1
//B+X = 0, B+Y = 1, B+Z = 2
//C+X = 1, C+Y = 2, C+Z = 0

const shapeSelected = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
}

const roundArr = [0,3,6]
const shapeArr = [1,2,3]
    // 'loss': 0,
    // 'draw': 3,
    // 'win': 6
const firstShapeMap = new Map<string, number>([
    ['A', 1],
    ['X', 0],
    ['B', 0],
    ['Y', 1],
    ['C', 2],
    ['Z', 2]
])

const scndShapeMap = new Map<string, number>([
    ['A', 2],
    ['X', 0],
    ['B', 0],
    ['Y', 1],
    ['C', 1],
    ['Z', 2]
])

const text = await Deno.readTextFile('2.txt')
const arr = text.split('\n')
let totalScore = 0
arr.forEach(entry => {
    const [opp, me] = entry.split(' ')
    const oppShape = scndShapeMap.get(opp)
    const myShape = scndShapeMap.get(me)
    if (opp && me) {
        // const result = roundArr[(oppShape + myShape) % 3]
        const shapeScore = shapeArr[(oppShape! + myShape!) % 3]
        // totalScore += result + (myShape+1)
        totalScore += shapeScore + roundArr[myShape!]
    }
})
console.log(totalScore)
