const getUserList = document.getElementById("getUsers");
getUserList.addEventListener("click", (e) => {
  userData();
});
function userData() {
  const URL = "https://jsonplaceholder.typicode.com/users";

  fetch(URL)
    .then((response) => response.json())

    .then((data) => { 
      // 
      var result = "";
      result += '<table border="1" cellpadding="5px">';
      result += '<tr><th>Sr.No.</th><th>Name</th><th>Email</th><th>Username</th><th>Phone</th><th>Website</th></tr>';

      data.forEach(function(obj){
        result += '<tr><td>'+obj.id+'</td><td>'+obj.name+'</td><td>'+obj.email+'</td><td>'+obj.username+'</td><td>'+obj.phone+'</td><td>'+obj.website+'</td></tr>';
      });
    
      result += '</table>';
    
      document.getElementById("output").innerHTML = result;

    });
}