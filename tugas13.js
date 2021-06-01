function fruitname() {
    var fruit = ['Pisang', "Jeruk"]
    console.log(fruit)
    fruit.unshift('Apel', 'Mangga')
    return fruit
}
console.log(fruitname())