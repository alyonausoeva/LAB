class StudentMembership {
  constructor(name) {
    this.name = name
    this.cost = 75
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name
    this.cost = 169
  }
}
class FamilyMembership {
  constructor(name) {
    this.name = name
    this.cost = 269
  }
}

class MemberFactory {
  static list = { student: StudentMembership,
    standard: StandardMembership,
    family: FamilyMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.student
    const member = new Membership(name)
    member.type = type
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Vladimir', 'student'),
  factory.create('Irina', 'family'),
  factory.create('Petya', 'standard'),
  factory.create('Vasya', 'family'),
  factory.create('Dima')
]

members.forEach(m => {
  m.define()
})
