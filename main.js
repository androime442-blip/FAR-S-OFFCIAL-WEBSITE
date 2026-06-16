let commenlt;
let username = prompt("enter your username: ")
let failed = false
let sd = localStorage.getItem("username")
if (!username){
  if (sd){
    let sdp = prompt("is this you", sd)
    if (sdp){
      failed = false
    }else{
      failed = true
    }
  }
}else{
  failed = false
}
document.getElementById("bt").onclick = function (){
  if (failed){
    console.log("program ocuurss in error")
  }else{
    commenlt = document.getElementById("ct").value;
    console.log(username+" :"+commenlt);
    localStorage.setItem("username", username)
    localStorage.setItem("user", `${username}: commented : ${commenlt}`)
  }
};