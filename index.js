function enter(){
    let Fname = document.getElementById("Fname").value
    let Lname = document.getElementById("Lname").value
    let age = document.getElementById("age").value
    let id = document.getElementById("ID").value
    var user = new User(Fname,Lname,age,id)

    document.getElementById("result").innerHTML = user.enter();
    

}

function User(Fname,Lname,age,id){
    this.Fname = Fname;
    this.Lname = Lname;
    this.age = age;
    this.id = id;

}
User.prototype.enter = function(){
    return 'Ten :' + this.Fname + this.Lname +"<br>" + 'Tuoi :' + this.age + "<br>"+ 'ID :' + this.id;

}
var users = [];
function addUser(){
    let Fname = document.getElementById("Fname").value
    let Lname = document.getElementById("Lname").value
    let age = document.getElementById("age").value
    let id = document.getElementById("ID").value
    var user = new User(Fname,Lname,age,id)
    users.push(user);
    var displayInfo = "";
    for (var i = 0; i < users.length; i++) displayInfo += users[i].enter() + "<br><br>";
    document.getElementById("result").innerHTML = displayInfo;
}


