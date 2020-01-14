class Cat {
  constructor(color, weight) {
    this.color = color
    this.weight = weight
  }

  get info() {
    return `Кот имеет ${this.color} цвет и весит ${this.weight} кг`
  }
}

function aboutCat(cat) {
  cat.collar = true
  cat.catInfo = function() {
    return cat.info
  }
  return cat
}



const cat1 = aboutCat(new Cat('рыжий', 5))
console.log(cat1.collar)
console.log(cat1.catInfo())


