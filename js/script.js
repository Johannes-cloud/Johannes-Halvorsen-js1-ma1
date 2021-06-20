//Question 1

const cat = {
    complain: function () {
        console.log ("Meow!")
    }
}

cat.complain();

//Question 2,3 and 4

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading"
heading.style.fontSize = "2em";
heading.className = "subheading";


//Question 5

const paragraphs = document.querySelectorAll("p")

for (let i = 0; i < paragraphs.length; i++) {
    
    paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = "<p>New paragraph</p>"
resultsContainer.style.color = "yellow"

//Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catsList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log (list[i])
    }
}

catsList (cats);

//Question 8

function createCats(cats) {

    let listCats = "";

    for (let i = 0; i < cats.length; i++) {


        listCats = listCats + "<div>" + cats[i] + "</div>";
        console.log(listCats);
    }
}

createCats(cats);