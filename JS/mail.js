export default function m(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "my.teacher966@gmail.com",
        Password : "3C25C407339C7721295F8C038BA5B5EBAD38",
        To : document.getElementById("email").value,
        From : "my.teacher966@gmail.com",
        Subject : document.getElementById("name").value,
        Body : document.getElementById("body").value
    }).then(
      message => alert("message sent succesfully" + message)
    );
    reset();
    return false;
}