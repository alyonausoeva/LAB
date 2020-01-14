class Letters {
  constructor() {
    this.letters = []
  }

  reply(letters) {}

  add(letter) {
    this.letters.push(letter)
    return this.reply(letter)
  }
}

class BusinessLetters extends Letters {
  reply({id, sender, theme}) {
    return `Business: ${id}: ${sender} (${theme})`
  }
}

class PersonalLetters extends Letters {
  reply({id, sender, theme}) {
    return `Personal: ${id}: ${sender} (${theme})`
  }
}

class LettersRegistry {
  register(sender, type, theme) {
    const id = Date.now()
    let complaint

    if (type === 'business') {
      complaint = new BusinessLetters()
    } else {
      complaint = new PersonalLetters()
    }

    return complaint.add({id, sender, theme})
  }
}

const registry = new LettersRegistry()

console.log(registry.register('Ivan', 'business', 'годовой отчет'))
console.log(registry.register('Elena', 'personal', 'наши билеты'))

