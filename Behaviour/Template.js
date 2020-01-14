class Person {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} осуществляет ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} зарабатывает ${this.salary} рублей`
  }
}

class Designer extends Person {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'создание прототипов продуктов'
  }
}

class Illustrator extends Person {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'создание иллюстраций'
  }
}

const dev = new Designer('Роман', 60000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Illustrator('Дмитрий', 65000)
console.log(tester.getPaid())
console.log(tester.work())
