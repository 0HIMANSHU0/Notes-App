console.log('Welcome to Magic Notes APP.');


// if user add a note, add it to the localstorage :
showNotes();
let addBtn = document.getElementById('addbtn');
addBtn.addEventListener("click", function (e) {
  let addTitle = document.getElementById('addTitle');
  let addTxt = document.getElementById('addText');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let myObj ={
    Title: addTitle.value,
    Text: addTxt.value,
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  //  console.log(notesObj);
showNotes();
})
// Function to show the notes that are written by the User for the future use
// Function to show elements from LocalStorage.
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = '';
  notesObj.forEach(function (element, index) {
    html += `<div class="noteCard my-2 mx-2" style="width: 18rem;">
    <div class="card-body">
     <h5 class="card-title">Note No: ${index + 1}</h5>
     <h5 class="card-title">Title: ${element.Title}</h5>
     <p class="card-text">${element.Text}</p>
     <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
    </div>
   </div>`;
  });
  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
  else {
    notesElm.innerHTML = `Nothing to show here! Use the "Add Notes" section above to Add Notes  `
  }
}

// Function to delete a Note
function deleteNotes(index) {
  //  console.log("I am Deleting the Note", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// To search in the Localstorage notes

let search = document.getElementById('searchText');
search.addEventListener("input", function () {

  let inputVal = search.value;
  // console.log('Input Event fired!', inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardText = element.getElementsByTagName('p')[0].innerText;
    // console.log(cardText);
    if (cardText.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
})

/*
Further Featers
1. Add Title
2. Mark a note as Important
3. Separate Note by user.
4. sync and host to web-server.
*/