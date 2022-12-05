const text = await Deno.readTextFile('5.txt')
const arr = text.split('\n')

let first = ['D', 'B', 'J', 'V']
let second = ['P', 'V', 'B', 'W', 'R', 'D', 'F']
let third = ['R', 'G', 'F', 'L', 'D', 'C', 'W', 'Q']
let fourth = ['W', 'J', 'P', 'M', 'L', 'N', 'D', 'B']
let fifth = ['H', 'N', 'B', 'P', 'C', 'S', 'Q']
let sixth = ['R', 'D', 'B', 'S', 'N', 'G']
let seventh = ['Z', 'B', 'P', 'M', 'Q', 'F', 'S', 'H']
let eighth = ['W', 'L', 'F']
let ninth = ['S', 'V', 'F', 'M', 'R']

class Stack {
    arr: string[]
    constructor(arr: string[]) {
        this.arr = arr
    }

    peek() {
        const top = this.arr[this.arr.length - 1]
        if (top) return top
    }

    append(hold: string[]) {
        this.arr = this.arr.concat(hold)
    }

    pop() {
        const popped = this.arr.pop()
        if (popped) return popped
    }
}

let one = new Stack(first)
let two = new Stack(second)
let three = new Stack(third)
let four = new Stack(fourth)
let five = new Stack(fifth)
let six = new Stack(sixth)
let seven = new Stack(seventh)
let eight = new Stack(eighth)
let nine = new Stack(ninth)

// test
const length = arr.length
for (let i = 10; i < length - 1; i++) {
    const [_move, count, _from, old, _to, neww] = arr[i].split(' ')
    const hold: string[] = []
    for (let i = 0; i < parseInt(count); i++) {
        switch (old) {
            case '1':
                hold.push(one.pop()!)
                break;
            case '2':
                hold.push(two.pop()!)
                break;
            case '3':
                hold.push(three.pop()!)
                break;
            case '4':
                hold.push(four.pop()!)
                break;
            case '5':
                hold.push(five.pop()!)
                break;
            case '6':
                hold.push(six.pop()!)
                break;
            case '7':
                hold.push(seven.pop()!)
                break;
            case '8':
                hold.push(eight.pop()!)
                break;
            case '9':
                hold.push(nine.pop()!)
                break;
            default:
                break;
        }
    }
    let reverseHold = [...hold.reverse()]
    switch (neww) {
        case '1':
            one.append(reverseHold)
            break;
        case '2':
            two.append(reverseHold)
            break;
        case '3':
            three.append(reverseHold)
            break;
        case '4':
            four.append(reverseHold)
            break;
        case '5':
            five.append(reverseHold)
            break;
        case '6':
            six.append(reverseHold)
            break;
        case '7':
            seven.append(reverseHold)
            break;
        case '8':
            eight.append(reverseHold)
            break;
        case '9':
            nine.append(reverseHold)
            break;
        default:
            break;
    }
}
const final = one.peek()! + two.peek() + three.peek() + four.peek() + five.peek() + six.peek() + seven.peek() + eight.peek() + nine.peek()
console.log(final)
