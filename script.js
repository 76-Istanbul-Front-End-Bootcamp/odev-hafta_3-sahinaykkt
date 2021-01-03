class Animal {
  constructor(name, legs, img) {
    this.name = name;
    this.legs = legs;
    this.img = img;
  }

  action(e) {
    document.getElementById(this.actionSoundName).play();
    e.stopPropagation();
  }

  putInTheDocument() {
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    petTR.id = "animal-name";
    petTR.addEventListener("click", function () {
      var imgNode = document.createElement("img");
      document.querySelector("#img").innerHTML = "";
      document.querySelector("#img").appendChild(imgNode).setAttribute("src", this.img);

    }.bind(this))

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
  constructor(name, legs, img) {
    super(name, legs, img);
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
  }
}

class Monkey extends Animal {
  constructor(name, legs, img) {
    super(name, legs, img);
    this.actionText = "Scream"
    this.actionSoundName = "scream"
  }
}

var Mila = new Cat("Mila", 4, "https://cdnuploads.aa.com.tr/uploads/Contents/2019/10/24/thumbs_b_c_fb8263ce4f9f43ebdc7634b0d1eb0a08.jpg?v=115427");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie", 2, "https://i.pinimg.com/736x/4d/da/15/4dda15d2e5b91bdbdf5057742d7dfe7e.jpg");
Charlie.putInTheDocument();