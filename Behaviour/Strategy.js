class Transport {
  travelTime() {
    return this.timeTaken
  }
}

class Bus extends Transport {
  constructor() {
    super()
    this.timeTaken = 10
  }
}

class Taxi extends Transport {
  constructor() {
    super()
    this.timeTaken = 5
  }
}

class Tram extends Transport {
  constructor() {
    super()
    this.timeTaken = 15
  }
}

class Commute {
  travel(way) {
    return way.travelTime()
  }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Tram()))
