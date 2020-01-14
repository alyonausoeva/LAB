const home = {
  rooms: 3,

  init() {
    console.log(`Меня зовут  ${this.owner}, у меня есть квартира, в которой ${this.rooms} комнаты`)
  }
}

const homeWithOwner = Object.create(home, {
  owner: {
    value: 'Дмитрий'
  }
})


console.log(homeWithOwner.proto__ === home)

homeWithOwner.init()
