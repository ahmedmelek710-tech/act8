let A = 0
basic.showNumber(A)
A = randint(60, 80)
basic.showNumber(A)
let I = randint(1, randint(60, 80))
basic.showNumber(I)
for (let index = 0; index < A; index++) {
    if (A % I == 0) {
        I = 0
    }
}
basic.forever(function () {
	
})
