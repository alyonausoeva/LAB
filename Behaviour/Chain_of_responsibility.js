class MySum {
  constructor(initialValue = 30) {
    this.sum = initialValue
  }

  add(value) {
    this.sum += value
    return this
  }
}

const sum1 = new MySum()
console.log(sum1.add(9).add(1).add(31).add(91).sum)

const sum2 = new MySum(0)
console.log(sum2.add(31).add(32).add(13).sum)
