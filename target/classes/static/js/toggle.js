var currentUserIndex=1;
var userArray=[
    {"name":"John Doe" ,"gender":"Male" ,"image":"images/img_avatar.png"},
    {"name":"Jane Doe" ,"gender":"Female" ,"image":"images/img_avatar2.png"}
];
function toggleUser(){
    currentUserIndex=1-currentUserIndex;
    var nextUser=userArray[currentUserIndex];
    displayUser(nextUser);
}
function displayUser(user){
    //console.log(user);
    document.getElementById("userImage").src=user.image;
    document.getElementById("userName").textContent=user.name;
    document.getElementById("userGender").textContent=user.gender;
}