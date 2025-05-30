let itemList = document.getElementsByTagName("LI");
let remove = document.getElementsByClassName("remove");
let list = document.querySelector("ul");

// create a delete btn & add it to all  list items

for (let i = 0; i < itemList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("🗑");
  span.classList = "remove";
  span.appendChild(txt);
  itemList[i].appendChild(span);
}

// to remove a list item
for (let i = 0; i < remove.length; i++) {
  remove[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// add a check symbol
list.addEventListener(
  "click",
  function (evt) {
    if (evt.target.tagName === "LI") {
      evt.target.classList.toggle("checked");
    }
  },
  false
);

// create new list items
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("inputBox").value;
  let txtNode = document.createTextNode(inputValue);
  li.appendChild(txtNode);
  if (inputValue === "") {
    alert("please enter something!");
  } else {
    document.getElementById("list").appendChild(li);
  }

  document.getElementById("inputBox").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("🗑");
  span.classList = "remove";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
