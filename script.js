class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  action() {
    document.getElementById(this.actionSoundName).play();
  }

  putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    petTR.id = "animal-name";

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
  }

}

class Cat extends Animal {
  constructor(name, legs) {
    super(name, legs);
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
  }
}

class Monkey extends Animal {
  constructor(name, legs) {
    super(name, legs);
    this.actionText = "Scream"
    this.actionSoundName = "scream"
  }
}

var Mila = new Cat("Mila", 4);
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie", 2);
Charlie.putInTheDocument();