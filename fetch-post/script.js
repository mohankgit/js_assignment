const URL="https://jsonplaceholder.typicode.com/posts";
fetch(URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("fetchPost");
for (var i = 0; i < data.length; i++) {
    var list = document.createElement("div");
    list.innerHTML = '<strong>title:' + data[i].title + '</strong>' + '<br>body: ' + data[i].body+'<hr>';
    mainContainer.appendChild(list);
}
}

//click event function
function myFunction() {
    var x = document.getElementById("fetchPost");
    if (x.style.display === "block") {
    } else {
      x.style.display = "block";
    }
  }