function re(){
  let username = localStorage.getItem("username");
  put(username);
};
let textt;
function put(username){
  textt = document.createElement('h1');
  textt.textContent = `${username}`
};
re();