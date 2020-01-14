class capital {
  constructor(data) {
    if (capital.exists) {
      return capital.instance
    }
    capital.instance = this
    capital.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const Russia = new capital('Moscow')
console.log(Russia.getData())

const Finland = new capital('Helsinki')
console.log(Finland.getData())


