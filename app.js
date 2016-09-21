//Separating the javascript from the HTML
  var name = prompt('What is your name?')
  alert('Welcome to my site ' + name + '!')

  for (i = 0; i < 4; i++) {

    var q = new Object()

    q.one = 'Do I watch football?'
    q.two = 'Have I ever eatin sushi?'
    q.three = 'Is my nickname "Brogrammer"?'
    q.four = 'Do I like "Red Robin"?'

    var question = [q.one, q.two, q.three, q.four]
    var a = ['yes', 'no', 'no', 'yes']
    var na = ['no', 'yes', 'yes', 'no']

    question[i] = prompt(question[i]).toLowerCase()

    if (question[i] === a[i]) {
      alert('You\'re right.')
    } else if (question[i] === na[i] || question[i] === na[i]) {
      alert('Nope.')
      i -= 1
    } else {
      alert('Are you okay?')
      i -= 1
    }
  }
