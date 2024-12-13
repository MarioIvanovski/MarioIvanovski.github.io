let animal = {
    name: '',
    kind: '',

    speak: function (message) {
      console.log(`"${this.name} says: '${message}!!!'"`);
    }
  };
  animal.name = prompt("What is the name of the animal?");
  animal.kind = prompt("What kind of animal is it?");
  let userMessage = prompt("What do you want the animal to say?");
  animal.speak(userMessage);
  