document.getElementById("logout")?.addEventListener("click", () => {
  console.log("logout");
  localStorage.clear()
    window.location.href = "index.php"
});

//console.log(localStorage.getItem("userid"))
const userid = localStorage.getItem("userid");
let table = document.getElementById("table");

let user;
const getDetail = () => {
  fetch(`https://trashly.onrender.com/api/v1/user/${userid}`)
    .then((res) => res.json())
    .then((res) => {
      user = res.user;
      console.log(user);
      document.getElementById("name").textContent = user.name;
      document.getElementById("email").textContent = user.email;
      document.getElementById("number").textContent = user.number;
      document.getElementById("points").textContent = user.points;
      localStorage.setItem("points",user.points)
      document.getElementById("title").textContent = `Hello, ${user.name}`;

      var m = user.ewaste.length;
      //console.log(m)
      li = "";
      for (j = 0; j < m; j++) {
        li =
          `<tr>
  <th scope="row">${user.ewaste[j]._id}</th>
  <td>${user.ewaste[j].name}</td>
  <td>${user.ewaste[j].location}</td>
  <td><img class='w-50 image'  src='${user.ewaste[j].photo}'/>
  </td>
  <td>
      <p>${
        !user.ewaste[j].approved && !user.ewaste[j].rejected
          ? "Pending"
          : user.ewaste[j].approved
          ? "Approved"
          : "Rejected"
      }</p>
  </td>
  </tr>` + li;
      }
      table.innerHTML = li;
    })
    .catch((err) => {
      //table.innerHTML = "Cannot Get data"
    });
};
getDetail();
