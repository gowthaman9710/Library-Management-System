"use strict";

//---------------------login--------------------------//    
function nav() {
  var flag;

  if (sessionStorage.validate != "success") {
    location.href = "https://gowthaman9710.github.io/Library-Management-System/login.html";
  }

  var mainlog = document.getElementById("mlog");
  var mainsignup = document.getElementById("msignup");

  if (flag == true) {
    mainlog.classList.add("mloginv");
    mainsignup.classList.add("msignupinv");
  } //   else{
  //     mainlog.id="mlog"
  //     mainsignup.id="msignup"
  //   }


  var mlogout = document.getElementById("mlogout");
  mlogout.addEventListener("click", function () {
    localStorage.status = "failure";
    sessionStorage.validate = "failure";
    location.href = "https://gowthaman9710.github.io/Library-Management-System/login.html";
  }); //aas

  var borrowbooks = document.getElementById("borrowbooks");
  borrowbooks.addEventListener("click", function () {
    console.log("event occurs");
    location.href = "https://gowthaman9710.github.io/Library-Management-System/borrowbooks.html";
  });
  var returnbooks = document.getElementById("returnbooks");
  returnbooks.addEventListener("click", function () {
    location.href = "https://gowthaman9710.github.io/Library-Management-System/return.html";
  });
  var history = document.getElementById("history");
  history.addEventListener("click", function () {
    location.href = "https://gowthaman9710.github.io/Library-Management-System/history.html";
  });
  var invent = document.getElementById("invent");
  invent.addEventListener("click", function () {
    location.href = "https://gowthaman9710.github.io/Library-Management-System/inventory.html";
  });
  var explore = document.getElementById("mexplore");
  explore.addEventListener("click", function () {
    location.href = "https://gowthaman9710.github.io/Library-Management-System/explore.html";
  });
}

if (location.href == "https://gowthaman9710.github.io/Library-Management-System/login.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/login.html#") {
  login();
}

function login() {
  var user2 = document.getElementById("user2");
  var pass2 = document.getElementById("pass2");
  var warning = document.getElementById("invalid");
  var newptag = document.createElement("p");
  var submit2 = document.getElementById("submit2");
  var backup; // let db=new Map()
  // db.set("admin","bca123")

  var flag;
  var user;
  var pass;
  var useravail;
  var usernull = true;
  var passnull = true;

  if (sessionStorage.validate != "success") {
    localStorage.status = "failure";
  }

  if (location.href == "https://gowthaman9710.github.io/Library-Management-System/login.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/login.html#") {
    try {
      var getUser = function getUser(e) {
        user = e.value;
        console.log(user);
      };

      var getPass = function getPass(e) {
        pass = e.value;
        console.log(pass);
      };
      /**  */


      user2.addEventListener("keyup", function () {
        getUser(user2);
      });
      pass2.addEventListener("keyup", function () {
        getPass(pass2);
      });
      submit2.addEventListener("click", function () {
        if ((user != null || user != undefined || user != "" || user != " ") && (pass != null || pass != undefined || pass != "" || pass != " ")) {
          validate();
        } else {
          warning.classList.add("vis1");
          warning.innerHTML = "<p>PLEASE FILL ALL THE ABOVE FIELDS</p>";
        }
      });

      if (localStorage.status == "success" && sessionStorage.validate == "success") {
        localStorage.setItem("flag", true);
        location.href = "https://gowthaman9710.github.io/Library-Management-System/main.html";
      } else {
        sessionStorage.setItem("validate", "failure");
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  console.log(localStorage.status);
  console.log(localStorage.length);
  console.log(localStorage.getItem("USERNAMES").split(",").length); // let a=localStorage.getItem("FNAME")
  // localStorage.setItem("FNAME",`[${a}]`)

  function validate() {
    // console.log("Username:",user)
    // console.log("password:",pass)
    // let dbusers=Array.from(db.keys())
    // let dbvalues=Array.from(db.values())
    // console.log(dbusers,dbvalues)
    for (var i = 0; i < localStorage.getItem("USERNAMES").split(",").length; i++) {
      if (localStorage.getItem("USERNAMES").split(",").includes(user) == true) {
        useravail = true;

        if (localStorage.getItem("PASSWORDS").includes(pass) == true) {
          if (localStorage.getItem("PASSWORDS").split(",")[i] == pass && localStorage.getItem("USERNAMES").split(",")[i] == user) {
            localStorage.setItem("status", "success");
            sessionStorage.setItem("validate", "success");
            localStorage.setItem("currentUser", user); // localStorage.setItem(dbusers[i],dbvalues[i])

            flag = true;
            break;
          } else {
            // localStorage.clear()
            flag = false;
          }
        } else {
          flag = false;
        }
      } else {
        useravail = false;
      }
    }

    if (useravail == true) {
      if (flag == true && localStorage.status == "success") {
        warning.classList.remove("warninglog");
        warning.classList.add("successlog");
        warning.innerHTML = "<p>LOGIN SUCCESSFUL</p>";
        setTimeout(function () {
          location.href = "/main.html";
        }, 3000);
      } else {
        if (pass == null || pass == undefined || pass == " ") {
          warning.classList.remove("successlog"); //warning.classList.remove("warninglog")

          warning.classList.add("warninglog");
          warning.innerHTML = "<p>Please enter your password</p>";
        } else {
          warning.classList.remove("successlog"); //warning.classList.remove("warninglog")

          warning.classList.add("warninglog");
          warning.innerHTML = "<p>Invalid password</p>"; // setTimeout(()=>{
          //     location.href="https://gowthaman9710.github.io/Library-Management-System/login.html"
          //  },3000)
        }
      }
    } else {
      if (user == null || user == undefined || user == " ") {
        warning.classList.remove("successlog");
        warning.classList.add("warninglog");
        warning.innerHTML = "<p>Please enter your username</p>";
      } else {
        warning.classList.remove("successlog");
        warning.classList.add("#");
        warning.innerHTML = "<p>This username doesn't exist</p>";
      }
    }
  }

  if (localStorage.status == "success") {
    flag = true;
  }
} //-----------------------------HOME-----------------------------//


if (location.pathname == "/Library-Management-System/main.html") {
  nav();

  if (localStorage.status != "success" && sessionStorage.validate != "success") {
    location.href = "https://gowthaman9710.github.io/Library-Management-System/login.html";
  }
} // if(flag==false){
//     location.href="https://gowthaman9710.github.io/Library-Management-System/login.html"
//     break
// }
// else{
//     location.href="https://gowthaman9710.github.io/Library-Management-System/main.html"
// }
//-----------------------------------------------------------//
//-------------------------signup----------------------------//
// let db1=[]
// let map1=new Map()


if (location.href == "https://gowthaman9710.github.io/Library-Management-System/signup.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/signup.html#") {
  signup();
}

function signup() {
  var fname1a;
  var lname1a;
  var user1a;
  var pass1a;
  var repass1a; // let dbusers=Array.from(db.keys())
  // let dbvalues=Array.from(db.values())

  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var user1 = document.getElementById("user1");
  var pass1 = document.getElementById("pass1");
  var repass1 = document.getElementById("repass1");
  var submit1 = document.getElementById("submit1");
  var warning2 = document.getElementById("warning2");
  var flag_signup = true; // console.log(dbusers,"  ",dbvalues)

  fname.addEventListener("keyup", function () {
    fname1(fname);
  });

  function fname1(fname) {
    // map1.set("first_name",fname.value)
    fname1a = fname.value; // console.log(map1)
  }

  lname.addEventListener("keyup", function (e) {
    lname1(lname);
  });

  function lname1(lname) {
    // map1.set("last_name",lname.value) 
    lname1a = lname.value; // console.log(map1)
  }

  user1.addEventListener("keyup", function (e) {
    userName(user1);
  });

  function userName(user1) {
    // map1.set("user_name",user1.value)     
    // db.set("user_name",user1.value) 
    console.log("Username:", user1.value);
    user1a = user1.value; // console.log(map1)
  }

  pass1.addEventListener("keyup", function (e) {
    passWord(pass1);
  });

  function passWord(e) {
    // map1.set("password",pass1.value)  
    // db.set("password",pass1.value) 
    console.log("Password:", e.value);
    pass1a = e.value; // console.log(map1)
    // console.log("DB:",db)
  }

  repass1.addEventListener("keyup", function () {
    rePassWord(repass1);
  });

  function rePassWord(e) {
    repass1a = e.value;
    console.log("Re-entered password", repass1a);
  }

  submit1.addEventListener("click", function () {
    if ((fname1a != null || fname1a != undefined) && (lname1a != null || lname1a != undefined) && (user1a != null || user1a != undefined) && (pass1a != null || pass1a != undefined)) {
      if (pass1a == repass1a) {
        if (pass1a.length >= 8) {
          if (isNaN(pass1a) == true) {
            storeinfo();
          } else {
            warning2.classList.add("vis1");
            alert("Password should contain minimum one charater");
            warning2.innerHTML = "Password should contain minimum one charater";
          }
        } else {
          warning2.classList.add("vis1");
          alert("Password should be minimum 8 characters");
          warning2.innerHTML = "THE PASSWORD SHOULD BE MINIMUM 8 CHARACTERS";
        }
      } else {
        warning2.classList.add("vis1");
        alert("Password was not matched");
        warning2.innerHTML = "THE PASSWORD WAS NOT MATCHED";
      }
    } else {
      warning2.classList.add("vis1");
      alert("ENTER ALL THE BELOW FIELDS!");
      warning2.innerHTML = "PLEASE FILL ALL THE ABOVE FIELDS"; // warning2.append(warnmsg)
    }
  });

  if (localStorage.getItem("FNAME") == null) {
    localStorage.setItem("FNAME", []);
    localStorage.setItem("LNAME", []);
    localStorage.setItem("USERNAMES", []);
    localStorage.setItem("PASSWORDS", []);
  }

  function storeinfo() {
    if (localStorage.getItem("USERNAMES").split(",").includes(user1a)) {
      warning2.classList.add("vis1");
      warning2.innerHTML = "You are already having an account"; //warning2.classList.remove("vis1")
      //warning2.classList.add("inv")
      // if(localStorage.getItem(user1a)!=pass1a){
      //  localStorage.setItem("password","wrong")
      //  alert("YOU ENTERED THE PASSWORD WRONGLY")
      //  warning2.innerHTML="<p>INCORRECT PASSWORD</p>" 
      //  break
      // }
    } else {
      warning2.classList.remove("vis1");
      warning2.classList.add("vis2");
      warning2.innerHTML = "<p>You are registered the account successfully</p>"; // db1.push(map1)

      sessionStorage.validate = "success";
      localStorage.status = "success"; // console.log(map1)
    }

    if (localStorage.status == "success" && sessionStorage.validate == "success") {
      var _fname = [];

      _fname.push(localStorage.getItem("FNAME"));

      _fname.push(fname1a);

      localStorage.setItem("FNAME", _fname.toString().split(","));

      if (localStorage.getItem("FNAME").charAt(0) == ",") {
        localStorage.setItem("FNAME", _fname.toString().slice(1));
      }

      var _lname = [];

      _lname.push(localStorage.getItem("LNAME"));

      _lname.push(lname1a);

      localStorage.setItem("LNAME", _lname.toString().split(","));

      if (localStorage.getItem("LNAME").charAt(0) == ",") {
        localStorage.setItem("LNAME", _lname.toString().slice(1));
      }

      var username = [];
      username.push(localStorage.getItem("USERNAMES"));
      username.push(user1a);
      localStorage.setItem("USERNAMES", username.toString().split(","));

      if (localStorage.getItem("USERNAMES").charAt(0) == ",") {
        localStorage.setItem("USERNAMES", username.toString().slice(1));
      }

      var password = [];
      password.push(localStorage.getItem("PASSWORDS"));
      password.push(pass1a);
      localStorage.setItem("PASSWORDS", password.toString().split(","));

      if (localStorage.getItem("PASSWORDS").charAt(0) == ",") {
        localStorage.setItem("PASSWORDS", password.toString().slice(1));
      } // localStorage.setItem("USERNAME",[...user1a])
      // localStorage.setItem("PASSWORD",[...pass1a])

    }
  }

  if (sessionStorage.validate == "success" && localStorage.getItem(user1a) == pass1a) {
    setTimeout(function () {
      location.href = "https://gowthaman9710.github.io/Library-Management-System/main.html";
    }, 7000);
  }
}

localStorage.setItem("FNAME", localStorage.getItem("FNAME").split(",")); //--------------------------------------
//--------------------------------------
//borrow books

console.log(location.href);
var records1 = [];
var booknames = [];
var quantities = [];
var authornames = [];
bookdbcreation();
console.log(localStorage.getItem("books"));

for (var i = 0; i < JSON.parse(localStorage.getItem("books")).length; i++) {
  booknames.push(JSON.parse(localStorage.getItem("books"))[i].name.toLowerCase());
  quantities.push(JSON.parse(localStorage.getItem("books"))[i].quantity);
  authornames.push(JSON.parse(localStorage.getItem("books"))[i].author.toLowerCase());
} // for(let o of sortednums){
//      records1.push(JSON.parse(localStorage.getItem(o)))
// }


if (JSON.parse(localStorage.getItem("STRECORDS")) != null) {
  for (var _i = 0; _i < JSON.parse(localStorage.getItem("STRECORDS")).length; _i++) {
    records1.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i]);
  }
}

function addquantity() {
  var backup = JSON.parse(localStorage.getItem("books"));

  for (var _i2 = 0; _i2 < records1.length * 20; _i2++) {
    for (var j = 0; j < booknames.length; j++) {
      if (records1.length > 0) {
        if (localStorage.getItem("quantityreduce".concat(_i2, ",").concat(j)) == "success") {
          if (localStorage.getItem("quantityadd".concat(_i2, ",").concat(j)) != "success") {
            if ((records1[_i2] != null || records1[_i2] != undefined) && (records1[_i2] != null || records1[_i2] != undefined)) {
              if (records1[_i2].bookName != booknames[j] && records1[_i2].bookAuthor != authornames[j]) {
                quantities[j] += 1;
                backup[j].quantity = quantities[j];
                localStorage.setItem("quantityadd".concat(_i2, ",").concat(j), "success");
                localStorage.setItem("quantityreduce".concat(_i2, ",").concat(j), "failure"); //quantityreduce.push(localStorage.getItem("quantityreduce"))
                //quantityreduce.push([i,j])

                localStorage.setItem("quantityreduce", quantityreduce);
                localStorage.setItem("books", JSON.stringify(backup));
              }
            } else {
              quantities[j] += 1;
              backup[j].quantity = quantities[j];
              localStorage.setItem("quantityadd".concat(_i2, ",").concat(j), "success");
              localStorage.setItem("quantityreduce".concat(_i2, ",").concat(j), "failure"); //quantityreduce.push(localStorage.getItem("quantityreduce"))
              //quantityreduce.push([i,j])

              localStorage.setItem("quantityreduce", quantityreduce);
              localStorage.setItem("books", JSON.stringify(backup));
            }
          }
        }
      }
    }
  }
}

var quantityreduce;

if (localStorage.getItem("quantityreduce") == null) {
  quantityreduce = [];
  localStorage.setItem("quantityreduce", quantityreduce);
}

function reducequantity() {
  var backupreduce = JSON.parse(localStorage.getItem("books"));
  console.log(backupreduce);

  for (var _i3 = 0; _i3 < records1.length; _i3++) {
    for (var j = 0; j < booknames.length; j++) {
      if (records1[_i3].bookName == booknames[j] && records1[_i3].bookAuthor == authornames[j]) {
        if (localStorage.getItem("quantityreduce".concat(_i3, ",").concat(j)) != "success") {
          quantities[j] -= 1;
          backupreduce[j].quantity = quantities[j];
          localStorage.setItem("quantityreduce".concat(_i3, ",").concat(j), "success"); //quantityreduce.push(localStorage.getItem("quantityreduce"))
          //quantityreduce.push([i,j])

          localStorage.setItem("quantityreduce", quantityreduce);
          localStorage.setItem("books", JSON.stringify(backupreduce));
        }
      }
    }
  }

  console.log(booknames, quantities, authornames);
  console.log("records", records1); // addquantity()

  if (records1.length < 1) {
    localStorage.setItem("books", JSON.stringify(backupreduce));
  }
}

function bookdbcreation() {
  var books = [{
    'name': 'java',
    'quantity': 12,
    'author': 'balagurusamy'
  }, {
    'name': 'java',
    'quantity': 10,
    'author': 'ramesh'
  }, {
    'name': 'python',
    'quantity': 7,
    'author': 'prince'
  }, {
    'name': 'frontend frameworks',
    'quantity': 15,
    'author': 'badri'
  }, {
    'name': 'mysql',
    'quantity': 12,
    'author': 'aaron'
  }, {
    'name': 'dotnet',
    'quantity': 0,
    'author': 'balaji'
  }];

  for (var _i4 = 0; _i4 < localStorage.length; _i4++) {
    if (localStorage.key(_i4) == "books") {
      bookdb = "found";
      localStorage.setItem("bookdb", "found");
      break;
    } else {
      bookdb = "notfound";
      localStorage.setItem("bookdb", "notfound");
    }
  }

  if (bookdb == "notfound") {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("bookdb", "found");
  }
} //borrow books


if (location.href == "https://gowthaman9710.github.io/Library-Management-System/borrowbooks.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/borrowbooks.html#") {
  nav(); //bookdbcreation()
  //reducequantity()

  borrowbooks();
}

var b_student_name;

function borrowbooks() {
  var main = document.getElementById("homeabook");
  var bkname = document.getElementById("bkname");
  var bookname;
  var bkauth = document.getElementById("bkauth");
  var author;
  var sid = document.getElementById("sid");
  var studentid;
  var sname = document.getElementById("sname");
  var studentname;
  var dateofsub = document.getElementById("dateofsub");
  var msg = document.getElementById("msg");
  var subdate;
  var bksubmit = document.getElementById("bksubmit");
  var bookdb;
  var numstate;
  var numkeys = [];
  var loopCount;
  bookdbcreation();

  for (var _i5 = 0; _i5 < localStorage.length; _i5++) {
    if (isNaN(localStorage.key(_i5)) == false) {
      numstate = "found";
      numkeys.push(_i5);
    } else {
      numstate = "notfound";
    }
  }

  if (numkeys.length >= 1) {
    numstate = "found";
  } else {
    numstate = "notfound";
  }

  if (numstate == "notfound") {
    localStorage.setItem("records", 0);
  } else {
    localStorage.setItem("records", 1);
  }

  if (numstate == "found") {
    for (var _i6 = 0; _i6 < numkeys.length; _i6++) {// console.log(JSON.parse(localStorage.getItem(localStorage.key(numkeys[i]))))
    }
  }

  console.log(numkeys);

  if (localStorage.getItem("records") != undefined || localStorage.getItem("records") != null) {
    loopCount = localStorage.getItem("records");
  } else {
    localStorage.setItem("records", 0);
    loopCount = 1;
  }

  var nums = []; //let missed=[]                                  

  for (var _i7 = 0; _i7 < localStorage.length; _i7++) {
    for (var j = 0; j < localStorage.length; j++) {
      if (localStorage.key(_i7) == j && isNaN(localStorage.key(_i7)) == false) {
        nums.push(j); // loopCount=j

        console.log("index:", _i7, " ", "j:", j);
      }
    }
  }

  localStorage.setItem("available nums", nums); //localStorage.setItem("missed nums",missed)
  //let nums=[4,1,2,3]
  //sorting using core methods                

  var tmp;

  for (var _i8 = 0; _i8 < nums.length; _i8++) {
    for (var _j = 0; _j < nums.length; _j++) {
      if (_j > _i8) {
        if (nums[_i8] < nums[_j]) {
          tmp = nums[_j];
          nums[_j] = nums[_i8];
          nums[_i8] = tmp;
        }
      }
    }
  }

  console.log(nums);

  if (nums[0] != null || nums[0] != undefined) {
    loopCount = nums[0];
    localStorage.setItem("records", nums[0]);
  } else {
    loopCount = 1;
  }

  var sortednums = nums.sort(function (a, b) {
    return a - b;
  });
  console.log(sortednums); // for(let i=1;i<=sortednums.length;i++){
  //     if(sortednums.includes(i)==false){
  //       localStorage.setItem("records",i)
  //       break
  //     }else{
  //         localStorage.setItem("records",nums[0])
  //     }
  // }
  //localStorage.setItem("records",loopCount)

  console.log(loopCount);

  if (localStorage.getItem("records") == null || localStorage.getItem("records") == undefined) {
    localStorage.setItem("records", 1);
  }

  var records = [];
  var recordkeys = [];

  for (var _i9 = 0; _i9 < localStorage.length; _i9++) {
    if (isNaN(localStorage.key(_i9)) == false) {
      records.push(JSON.parse(localStorage.getItem(localStorage.key(_i9))));
      recordkeys.push(parseInt(localStorage.key(_i9)));
    }
  }

  console.log(recordkeys);
  console.log(sortednums);
  console.log(localStorage.getItem(1));
  var val; ///////////////////////////////////////////////////////////

  var current = []; //

  current[0] = localStorage.getItem("records"); //      

  localStorage.setItem("current", current[0]); //         

  console.log(current); //

  if (current[0] < localStorage.getItem("current")) {
    //
    localStorage.setItem("highest", 1); //
  } //
  //////////////////////////////////////////////////////////


  if (localStorage.getItem("totalrecords") != null) {
    console.log(
    /*localStorage.getItem("records"),*/
    JSON.parse(localStorage.getItem("totalrecords")).length);
  } //else{
  //         if(localStorage.getItem(`quantityreduce${i},${j}`)=="success"){
  // quantities[j]+=1
  // backup[j].quantity=quantities[j]
  // localStorage.setItem(`quantityreduce${i},${j}`,"failure")
  // localStorage.setItem("books",JSON.stringify(backup))
  //     }
  //   }
  //--------------------------------------------------------------------------------------
  // for(let i=0;i<booknames.length;i++){
  //     for(let j=0;j<records.length;j++){
  //       if(records[j].bookName!=booknames[i] && records[j].bookAuthor!=authornames[i]){
  //         if(localStorage.getItem(`quantityreduce${j},${i}`)=="success"){
  //             quantities[i]+=1
  //             backup[i].quantity=quantities[i]
  //             localStorage.setItem(`quantityreduce${j},${i}`,"failure")
  //             localStorage.setItem("books",JSON.stringify(backup))
  //         }
  //       }
  //     }
  // }
  //----------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------
  // for(let i=0;i<records.length;i++){
  //     for(let j=0;j<booknames.length;j++){
  //    if(records[i].bookName!=booknames[j] && records[i].bookAuthor!=authornames[j]){
  //    if(localStorage.getItem(`quantityreduce${i},${j}`)!="success"){
  //     quantities[j]=books[j].quantity
  //     backup[j].quantity=quantities[j]
  //     localStorage.setItem(`quantityreduce${i},${j}`,"failure")
  //     localStorage.setItem("books",JSON.stringify(backup))
  //     }
  //    }else{
  //     if(localStorage.getItem(`quantityreduce${j}`)!="success" || localStorage.getItem(`differentrecord${i}`)!="success"){
  //     //    quantities[j]-=1
  //     // backup[j].quantity=quantities[j]
  //     // localStorage.setItem(`differentrecord${i}`,"success")
  //     // localStorage.setItem(`quantityreduce${j}`,"success")
  //     // localStorage.setItem("books",JSON.stringify(backup))
  //     }
  //    }
  //   }
  //  }
  //---------------------------------------------------------------------------------------


  console.log("records", records);
  console.log("quantities", quantities);
  localStorage.setItem("totalrecords", JSON.stringify(records1));
  bkname.addEventListener("keyup", function () {
    setbkname(bkname.value);
  });

  function setbkname(e) {
    bookname = e.toLowerCase();
    console.log(bookname);
  }

  bkauth.addEventListener("keyup", function () {
    setauth(bkauth.value);
  });

  function setauth(e) {
    author = e;
    console.log(author);
  }

  sid.addEventListener("keyup", function () {
    setid(sid);
  });

  function setid(e) {
    studentid = e.value;
    console.log(studentid);
  }

  sname.addEventListener("keyup", function () {
    setsname(sname.value);
  });

  function setsname(e) {
    studentname = e.toLowerCase();
    console.log(studentname);
  } // dateofsub.addEventListener("change",()=>{
  //      setdate(dateofsub)
  // })
  // let datevalid=false
  // function setdate(e){
  //      let d=new Date()
  //      d.setDate(d.getUTCDate())
  //      d.setFullYear(d.getUTCFullYear())
  //      d.setMonth(d.getUTCMonth())
  //      let cdate=d.getDate()
  //      let cmonth=d.getMonth()+1
  //      let cyear=d.getFullYear()
  //      if(parseInt((e.value).split("-")[0])>=cyear){
  //         if(parseInt((e.value).split("-")[1])>=cmonth){
  //             if(parseInt((e.value).split("-")[2])>cdate){
  //                 console.log("date ok")
  //                 msg.classList.remove("warningbk")
  //                 msg.classList.remove("vis")
  //                 msg.classList.add("inv")
  //                 datevalid=true
  //                 subdate=JSON.stringify(e.value)
  //             }else{
  //                 if(parseInt((e.value).split("-")[1])>cmonth){
  //                     console.log("date ok")
  //                     datevalid=true
  //                     msg.classList.remove("warningbk")
  //                     msg.classList.remove("vis")
  //                     msg.classList.add("inv")
  //                     subdate=JSON.stringify(e.value)
  //                 }else{
  //                 console.log("date not ok")
  //                 datevalid=false
  //                 msg.classList.add("warningbk")
  //                 subdate=JSON.stringify(e.value)
  //                 msg.innerHTML="Please select the correct date"
  //                 } 
  //             }
  //         }else{
  //             console.log("date not ok")
  //             datevalid=false
  //             msg.classList.add("warningbk")
  //             subdate=JSON.stringify(e.value)
  //             msg.innerHTML="Please select the correct month"
  //          }
  //      }else{
  //         console.log("date not ok")
  //         datevalid=false
  //         msg.classList.add("warningbk")
  //         subdate=JSON.stringify(e.value)
  //         msg.innerHTML="Please select the correct year"
  //      }
  //      console.log(e.value)
  //      console.log(parseInt((e.value).split("-")[1]))
  //      console.log(`${cyear}-${0}${cmonth}-${cdate}`)
  // }


  var fields = false;
  var submission = false;
  var newptag = document.createElement("p");
  bksubmit.addEventListener("click", function () {
    if (bookname != null || bookname != undefined) {
      if (author != null || author != undefined) {
        if (studentid != null || studentid != undefined) {
          if (studentname != null || studentname != undefined) {
            fields = true;
            msg.classList.remove("warningbk");
            msg.classList.add("inv");
            submission = true;
            submitBook();
          } else {
            fields = false;
          }
        } else {
          fields = false;
        }
      } else {
        fields = false;
      }
    } else {
      fields = false;
    } // if(submission==false){
    //         msg.classList.add("warningbk")
    //         msg.classList.remove("vis")
    //         msg.classList.remove("inv")
    //         msg.innerText="PLEASE FILL ALL THE ABOVE FIELD"
    //         setTimeout(()=>{
    //         msg.classList.add("inv")
    //         msg.classList.remove("vis")
    //         newptag.remove()                      /**  */
    //         },8000)
    //     }


    if (fields == false) {
      msg.classList.add("warningbk");
      msg.classList.remove("vis");
      msg.classList.remove("inv");
      msg.innerText = "PLEASE FILL ALL THE ABOVE FIELD";
      setTimeout(function () {
        msg.classList.add("inv");
        msg.classList.remove("vis");
        newptag.remove();
        /**  */
      }, 8000);
    }
  });
  var submitted = false;

  function submitBook() {
    function submit() {
      msg.classList.add("vis");
      msg.classList.remove("inv");

      for (var _i10 = 0; _i10 < localStorage.length; _i10++) {
        console.log(localStorage.key(_i10));

        if (localStorage.key(_i10) == loopCount) {
          console.log(localStorage.key(_i10));
          console.log("loopCount:", loopCount);
          localStorage.setItem("records", loopCount);
          loopCount = parseInt(localStorage.getItem("records")) + 1;
          localStorage.setItem("records", loopCount);
          break;
        } //else{
        //     localStorage.records=loopCount
        //     loopCount=parseInt(localStorage.getItem("records"))+1
        //    }

      }

      var bookavail;
      var authoravail;
      var quantityavail;
      var bookstate;
      var bi = [];
      var ai;
      var bks;
      var bkscheck = [];
      var authcheck = [];
      var submitted;
      var strecord = new Map();
      console.log(booknames);
      console.log(bookname); //----------------------------------

      for (var _i11 = 0; _i11 < booknames.length; _i11++) {
        if (booknames[_i11] == bookname) {
          bi.push(_i11);
          bkscheck.push([_i11, booknames[_i11], authornames[_i11], quantities[_i11]]);
          console.log(bkscheck);
        }
      } // for(let i=0;i<bi.length;i++){
      //     if(booknames.indexOf(booknames[i],i)==bi[i]){
      //         localStorage.setItem(`bkavail:${bi[i]}`,[1])
      //         if(authornames.indexOf(author)==bi[i]){
      //             localStorage.setItem(`authavail:${i}`,[1])
      //             break
      //         }
      //         else{
      //             localStorage.setItem(`authavail:${i}`,[0])
      //         }
      //     }else{
      //         localStorage.setItem(`bkavail:${i}`,[0])
      //     }
      // }
      //-------------------------------------------------


      for (var _i12 = 0; _i12 < bkscheck.length; _i12++) {
        if (bkscheck[_i12][1] == bookname) {
          localStorage.setItem("bkavail:".concat(bi[_i12]), [1]);
          bookavail = [_i12, "success"];
          console.log("book available ", bookavail);
          break;
        } else {
          localStorage.setItem("bkavail:".concat(_i12), [0]);
          bookavail = [_i12, "failure"];
          console.log("book unavailable ", bookavail);
        }
      } //-------------------------------------------------


      for (var _i13 = 0; _i13 < bkscheck.length; _i13++) {
        if (bkscheck[_i13][2] == author) {
          localStorage.setItem("authavail:".concat(_i13), [1]);
          ai = authornames.indexOf(author);
          authcheck.push([_i13, authornames[_i13]]);
          console.log(authcheck);
          authoravail = [_i13, "success"];
          console.log("author available ", authoravail);
          break;
        } else {
          localStorage.setItem("authavail:".concat(_i13), [0]);
          authoravail = [_i13, "failure"];
          console.log("author unavailable ", authoravail);
        }
      } //-------------------------------------------------
      // for(let i=0;i<bkscheck.length;i++){
      //     if(authornames.indexOf(author)==bkscheck[i][0] && localStorage.getItem(`bkavail:${bi[i]}`)==[1]){
      //         localStorage.setItem(`authavail:${i}`,[1])
      //         ai=authornames.indexOf(author)
      //         authcheck.push([i,authornames[i]])
      //         console.log(authcheck)
      //         break
      //     }else{
      //         localStorage.setItem(`authavail:${i}`,[0])
      //     }
      // }
      // for(let i=0;i<authornames.length;i++){
      //         if(localStorage.getItem(`bkavail:${i}`)==[1]){
      //             localStorage.setItem(`authavail:${i}`,[1])
      //             if(authornames[i]==author && i==bi){
      //                 ai=i
      //             break
      //             }
      //         }else{
      //             localStorage.setItem(`authavail:${i}`,[0])
      //         }
      // }
      //----------------------------------------------------


      for (var _i14 = 0; _i14 < bkscheck.length; _i14++) {
        if (bkscheck[_i14][3] >= 1) {
          localStorage.setItem("quavail:".concat(ai), [1]);
          quantityavail = [_i14, "success"];
          console.log("quantity available ", quantityavail);
          break;
        } else {
          localStorage.setItem("quavail:".concat(ai), [0]);
          quantityavail = [_i14, "failure"];
          console.log("quantity unavailable ", quantityavail);
        }
      } //----------------------------------------------------
      // for(let i=0;i<bi.length;i++){
      //             if(quantities[bi[i]]>=1 && ai==i){
      //                 localStorage.setItem(`quavail:${ai}`,[1])
      //                 break
      //             }else{
      //                 localStorage.setItem(`quavail:${ai}`,[0])
      //             }
      //         }
      //----------------------------------------------------
      // for(let i=0;i<booknames.length;i++){
      // if(localStorage.getItem(`bkavail:${i}`)==[1]){
      //     bookavail=[i,"success"]
      //     console.log("book available ",bookavail)
      // }else if(localStorage.getItem(`bkavail:${i}`)==[0]){
      //     bookavail=[i,"failure"]
      //     console.log("book unavailable ",bookavail)
      // }
      // }
      // for(let i=0;i<authornames.length;i++){
      //     if(localStorage.getItem(`authavail:${i}`)==[1]){
      // authoravail=[i,"success"]
      // console.log("author available ",authoravail)
      //         break
      //     }else if(localStorage.getItem(`authavail:${i}`)==[0]){
      //         authoravail=[i,"failure"]
      //         console.log("author unavailable ",authoravail)
      //     }
      // }
      // for(let i=0;i<quantities.length;i++){
      //         if(localStorage.getItem(`quavail:${i}`)==[1]){
      //             quantityavail=[i,"success"]
      //             console.log("quantity available ",quantityavail)
      //             break
      // }else if(localStorage.getItem(`quavail:${i}`)==[0]){
      //     quantityavail=[i,"failure"]
      //     console.log("quantity unavailable ",quantityavail)
      // }
      // }
      // ---------------------------------------------------


      var newptag1 = document.createElement("p");
      var newptag2 = document.createElement("p");
      var newptag3 = document.createElement("p");
      var allrecords;

      if (bookavail[1] == "success") {
        if (authoravail[1] == "success") {
          if (quantityavail[1] == "success" && submitted != true && isrecordinside != true) {
            var decrement = function decrement() {
              var bkbackup2 = JSON.parse(localStorage.getItem("books"));

              for (var _i15 = 0; _i15 < JSON.parse(localStorage.getItem("books")).length; _i15++) {
                if (JSON.parse(localStorage.getItem("books"))[_i15].name == bookname) {
                  if (JSON.parse(localStorage.getItem("books"))[_i15].author == author) {
                    bkbackup2[_i15].quantity -= 1;
                    localStorage.setItem("books", JSON.stringify(bkbackup2));
                  }
                }
              }
            };

            console.log("quantity check ok");
            var d = new Date();
            d.setDate(d.getDate() + 30);
            d.setMonth(d.getUTCMonth());
            subdate = "".concat(d.getDate(), "/").concat(d.getMonth() + 1, "/").concat(d.getFullYear());
            d.setDate(d.getDate() - 30);
            var strecord1 = {
              "studentId": studentid,
              "studentName": studentname,
              "bookName": bookname,
              "bookAuthor": author,
              "dateOfSubmission": subdate
            }; // strecord.set("studentId",studentid)
            // strecord.set("studentName",studentname)
            // strecord.set("bookName",bookname)
            // strecord.set("bookAuthor",author)
            // strecord.set("dateOfSubmission",subdate)

            console.log(strecord1);
            var studentrecords;

            if (localStorage.getItem("STRECORDS") != null) {
              studentrecords = JSON.parse(localStorage.getItem("STRECORDS"));
            } else {
              studentrecords = [];
            }

            studentrecords.push(strecord1);
            localStorage.setItem("STRECORDS", JSON.stringify(studentrecords)); // 
            //localStorage.setItem(loopCount,JSON.stringify(strecord1))

            bookstate = "issued";
            msg.classList.remove("warningbk");

            a = function () {
              var d = new Date();
              d.setDate(d.getDate() + 30);
              d.setMonth(d.getUTCMonth());
              subdate = "".concat(d.getDate(), "/").concat(d.getMonth() + 1, "/").concat(d.getFullYear());
              d.setDate(d.getDate() - 30);
              var strecord1 = {
                "date": "".concat(d.getDate(), "/").concat(d.getMonth() + 1, "/").concat(d.getFullYear()),
                "studentId": studentid,
                "studentName": studentname,
                "bookName": bookname,
                "bookAuthor": author,
                "dateOfSubmission": subdate,
                "status": "borrowed"
              };

              if (localStorage.getItem("allrec") != null) {
                allrecords = JSON.parse(localStorage.getItem("allrec"));
              } else {
                allrecords = [];
              }

              allrecords.push(strecord1);
              localStorage.setItem("allrec", JSON.stringify(allrecords));
            }();

            msg.innerHTML = "<p>THE REQUESTED BOOK WILL BE ISSUED, PLEASE RETURN THE ".concat(bookname.toUpperCase(), " BOOK ON ").concat(subdate, " AT MORNING 9:30 A.M AT LIBRARY INCHARGE</p>");
            submitted = true;

            if (localStorage.getItem("books") != null) {
              decrement();
            } else {
              bookdbcreation();
              decrement();
            } // reducequantity()

          } else {
            if (submitted != true && quantityavail[1] != "success" && isrecordinside != true) {
              alert("QUANTITY INSUFFICIENT");
              msg.classList.add("warningbk");
              msg.innerHTML = "<p>THE REQUESTED BOOK IS NOT AVAILABLE DUE TO THE INSUFFICIENT QUANTITY</p>";
              setTimeout(function () {//location.reload()
              }, 15000);
            } else {
              if (isrecordinside != true) {
                msg.innerHTML = "<p>You already submitted</p>";
              } else {
                msg.innerHTML = "<p>You already got this book</p>";
              }
            }
          }
        } else {
          msg.classList.add("warningbk");
          msg.innerHTML = "<p>THE REQUESTED BOOK WITH THE DIFFERENT AUTHOR IS AVAILABLE</p>";

          for (var _i16 = 0; _i16 < authornames.length; _i16++) {
            if (bookname == booknames[_i16]) {
              var newptag4 = document.createElement("p");
              newptag4.innerHTML = "<b>".concat(authornames[_i16], "</b>");
              msg.append(newptag4);
              msg.classList.add("pad");
            }
          }

          setTimeout(function () {//location.reload()
          }, 15000);
        }
      } else {
        msg.classList.add("warningbk");
        msg.innerHTML = "<p>THE BOOK WAS NOT AVAILABLE</p>";
        setTimeout(function () {//location.reload()
        }, 15000);
      } //addquantity()
      // reducequantity()
      //     let decrement
      //     bks=JSON.parse(localStorage.getItem("books"))
      //     decrement=quantities
      //     for(let i=0;i<decrement.length;i++){               
      //     if(bookstate=="issued"){
      //         if(bks[i].name==bookname && bks[i].author==author){
      //           decrement[i]--
      //           bks[i].quantity=decrement[i]
      //           localStorage.setItem("books",JSON.stringify(bks))
      //         }
      //     }
      // }


      bkdetails = localStorage.getItem(loopCount);
      console.log(bkdetails);

      if (sessionStorage.validate != "success") {
        localStorage.status = "failure";
      }

      if (localStorage.status != "success" && sessionStorage.validate != "success") {
        location.href = "https://gowthaman9710.github.io/Library-Management-System/login.html";
      }

      addEventListener("keypress", function () {
        msg.classList.add("inv");
        msg.classList.remove("vis");
      });
    } //-------------------------------------------------------------------------------------------------------// 


    var isrecordinside = false;
    var a;
    var stid = [];
    var bname = [];
    var bauthor = [];
    var stname = []; //console.log(JSON.parse(localStorage.getItem("STRECORDS"))[0].studentId)

    if (JSON.parse(localStorage.getItem("STRECORDS")) != null) {
      for (var _i17 = 0; _i17 < JSON.parse(localStorage.getItem("STRECORDS")).length; _i17++) {
        stid.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i17].studentId);
        bname.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i17].bookName);
        stname.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i17].studentName);
        bauthor.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i17].bookAuthor);
      }
    }

    console.log(stid, "  ", bname, "  ", bauthor);

    for (var _i18 = 0; _i18 < stid.length; _i18++) {
      if (stid[_i18] == studentid && stname[_i18] == studentname && bname[_i18] == bookname && bauthor[_i18] == author) {
        /** asdfgf ;lkjhj asdfgf  */
        a = _i18;
        isrecordinside = true;
        break; // bkdetails.push({"bookName":bookname,"bookAuthor":author,"studentId":studentid,"studentName":studentname})
      } else {
        isrecordinside = false;
      }
    } //-------------------------------------------------------------------------------------------------------// 


    if (isrecordinside == true) {
      msg.classList.add("warningbk");
      msg.innerText = "You already submitted a request for this book"; // bkdetails.push({"bookName":bookname,"bookAuthor":author,"studentId":studentid,"studentName":studentname})
    } else {
      submit();
    }
  }
} //calling  navbar function
// if(sessionStorage.length<=1 && sessionStorage.key(0)=="IsThisFirstTime_Log_From_LiveServer" && sessionStorage.validate!="success"){
//      location.href="https://gowthaman9710.github.io/Library-Management-System/login.html"
// }
// fetch("./data.json")
// .then((response)=>response.json())
// .then((json)=>{ 
//     //json.b.quantity=3
//     console.log(json)
// })
//-------------------------------------------------return books---------------------------------------------//


if (location.href == "https://gowthaman9710.github.io/Library-Management-System/return.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/return.html#") {
  var studentid = function studentid(e) {
    stid = JSON.stringify(e.value);
  };

  var studentname = function studentname(e) {
    stname = e.value;
  };

  var bookname = function bookname(e) {
    bksname = e.value;
  };

  var bookauthor = function bookauthor(e) {
    bksauthor = e.value;
  }; //    dateofsub.addEventListener("change",()=>{
  //       subdate(dateofsub)
  //    })
  //    function subdate(e){
  //     console.log(e, dateofsub)
  //     submitdate=e.value
  //     console.log(submitdate)
  //    }


  var booksubmit = function booksubmit() {
    var fields;

    if (stid != undefined && stid != null && stname != null && stname != undefined && bksname != null && bksname != undefined && bksauthor != null && bksauthor != undefined) {
      // warning.innerText="Please fill all the above fields"
      fields = "filled";
    } else {
      fields = "blank";
    }

    var idcheck = false;
    var stnamecheck = false;
    var bknamecheck = false;
    var authornamecheck = false;
    var idx;
    var backup2;

    if (localStorage.getItem("STRECORDS") != null) {
      for (var _i20 = 0; _i20 < JSON.parse(localStorage.getItem("STRECORDS")).length; _i20++) {
        console.log(JSON.parse(localStorage.getItem("STRECORDS"))[_i20].studentId, "==", stid, " ", JSON.parse(localStorage.getItem("STRECORDS"))[_i20].studentId == JSON.parse(stid));

        if (
        /*JSON.parse(localStorage.getItem("STRECORDS")).includes(JSON.parse(stid))*/
        JSON.parse(localStorage.getItem("STRECORDS"))[_i20].studentId == JSON.parse(stid) == true) {
          console.log(JSON.parse(localStorage.getItem("STRECORDS")), "   ", stid);
          idcheck = true;

          if (JSON.parse(localStorage.getItem("STRECORDS"))[_i20].studentName == stname) {
            stnamecheck = true;

            if (JSON.parse(localStorage.getItem("STRECORDS"))[_i20].bookName == bksname) {
              bknamecheck = true;
              console.log(JSON.parse(localStorage.getItem("STRECORDS"))[_i20].bookAuthor, "   ", bksauthor);
              /** asdfgf ;lkjhj asdfgf */

              if (JSON.parse(localStorage.getItem("STRECORDS"))[_i20].bookAuthor == bksauthor) {
                authornamecheck = true;
                idx = _i20;
                break;
              } else {
                if (JSON.parse(localStorage.getItem("STRECORDS")).includes(bksauthor) != true) {
                  authornamecheck = false;
                  break;
                } else {
                  authornamecheck = false;
                  /** asdfgf ;lkjhj */
                }
              }
            } else {
              if (JSON.parse(localStorage.getItem("STRECORDS")).includes(bksname) != true) {
                bknamecheck = false;
              } else {
                bknamecheck = false;
              }
            }
          } else {
            stnamecheck = false;
          }
        } else {
          idcheck = false;
        }
      }
    } else {
      warning.innerText = "YOU DID'NT BORROW ANY BOOK FROM US";
    }

    var allrecords;

    if (fields == "filled") {
      if (idcheck == true) {
        if (stnamecheck == true) {
          if (bknamecheck == true) {
            if (authornamecheck == true) {
              var d = new Date();
              var strecord2 = {
                "studentId": JSON.parse(stid),
                "studentName": stname,
                "bookName": bksname,
                "bookAuthor": bksauthor,
                "dateOfSubmission": "".concat(d.getDate(), "/").concat(d.getMonth() + 1, "/").concat(d.getFullYear())
              }; // strecord.set("studentId",studentid)
              // strecord.set("studentName",studentname)
              // strecord.set("bookName",bookname)
              // strecord.set("bookAuthor",author)
              // strecord.set("dateOfSubmission",subdate)

              console.log(strecord2);
              var studentrecords;

              if (localStorage.getItem("RTRECORDS") != null) {
                studentrecords = JSON.parse(localStorage.getItem("RTRECORDS"));
              } else {
                studentrecords = [];
              }

              studentrecords.push(strecord2);
              localStorage.setItem("RTRECORDS", JSON.stringify(studentrecords));
              backup2 = JSON.parse(localStorage.getItem("STRECORDS"));
              backup2.splice(idx, 1);
              localStorage.setItem("STRECORDS", JSON.stringify(backup2));
              var bkbackup1 = JSON.parse(localStorage.getItem("books"));

              for (var _i21 = 0; _i21 < JSON.parse(localStorage.getItem("books")).length; _i21++) {
                if (JSON.parse(localStorage.getItem("books"))[_i21].name == bksname) {
                  if (JSON.parse(localStorage.getItem("books"))[_i21].author == bksauthor) {
                    bkbackup1[_i21].quantity += 1;
                    localStorage.setItem("books", JSON.stringify(bkbackup1));
                  }
                }
              }

              a = function () {
                var d = new Date();
                var strecord2 = {
                  "date": "".concat(d.getDate(), "/").concat(d.getMonth() + 1, "/").concat(d.getFullYear()),
                  "studentId": JSON.parse(stid),
                  "studentName": stname,
                  "bookName": bksname,
                  "bookAuthor": bksauthor,
                  "dateOfSubmission": "".concat(d.getDate(), "/").concat(d.getMonth() + 1, "/").concat(d.getFullYear()),
                  "status": "returned"
                };

                if (localStorage.getItem("allrec") != null) {
                  allrecords = JSON.parse(localStorage.getItem("allrec"));
                } else {
                  allrecords = [];
                }

                allrecords.push(strecord2);
                localStorage.setItem("allrec", JSON.stringify(allrecords));
              }();

              warning.innerText = "THE LAB INCHARGE WILL COLLECT THE ".concat(bksname, " BOOK FROM YOU.");
            } else {
              warning.innerText = "YOU BORROWED THE BOOK FROM DIFFERENT AUTHOR";
            }
          } else {
            warning.innerText = "YOU DID'NT BORROW THIS BOOK FROM US";
          }
        } else {
          warning.innerText = "YOU DID'NT BORROW THIS BOOK FROM US";
        }
      } else {
        warning.innerText = "YOU DID'NT BORROW THIS BOOK FROM US";
      }
    } else {
      warning.innerText = "PLEASE FILL ALL THE ABOVE FIELDS";
    }
  }; // asdfgf ;lkjhj asdfgf ;lkjhj 
  //ends

  /** asdfgf ;lkjhj  */


  bookdbcreation();
  nav();

  if (sessionStorage.getItem("validate") != "success") {
    location.href = "https://gowthaman9710.github.io/Library-Management-System/login.html";
  }

  bookdbcreation(); //addquantity()
  // reducequantity()

  var sid = document.getElementById("rsid");
  var sname = document.getElementById("rsname");
  var bkname = document.getElementById("rbkname");
  var bkauth = document.getElementById("rbkauth");
  var dateofsub = document.getElementById("rdateofsub");
  var bksubmit = document.getElementById("rbksubmit");
  var warning = document.getElementById("warnreturn");
  var stid, stname, bksname, bksauthor, submitdate; // 

  sid.addEventListener("keyup", function () {
    studentid(sid);
  });
  sname.addEventListener("keyup", function () {
    studentname(sname);
  });
  bkname.addEventListener("keyup", function () {
    bookname(bkname);
  });
  bkauth.addEventListener("keyup", function () {
    bookauthor(bkauth);
  });
  bksubmit.addEventListener("click", function () {
    booksubmit();
  });
  var idxrtdel;
  var backup1;

  if (JSON.parse(localStorage.getItem("RTRECORDS")) != null) {
    for (var _i19 = 0; _i19 < JSON.parse(localStorage.getItem("RTRECORDS")).length; _i19++) {
      if (JSON.parse(localStorage.getItem("RTRECORDS")).includes(JSON.stringify(stid)) != true) {
        if (JSON.parse(localStorage.getItem("RTRECORDS"))[_i19].studentName == stname) {
          if (JSON.parse(localStorage.getItem("STRECORDS"))[_i19].bookName == bksname) {
            if (JSON.parse(localStorage.getItem("STRECORDS"))[_i19].bookAuthor == bksauthor) {
              idxrtdel = _i19;
            }
          }
        }
      }
    }
  }

  if (JSON.parse(localStorage.getItem("RTRECORDS")) != null && (idxrtdel != null || idxrtdel != undefined)) {
    backup1 = JSON.parse(localStorage.getItem("RTRECORDS"));
    backup1.splice(idxrtdel, 1);
    localStorage.setItem("RTRECORDS", JSON.stringify(backup1));
  }
} //inventory


if (location.href == "https://gowthaman9710.github.io/Library-Management-System/inventory.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/inventory.html#") {
  var table = document.getElementById("tab");
  nav();

  for (var _i22 = 0; _i22 < JSON.parse(localStorage.getItem("books")).length; _i22++) {
    var rows = document.createElement("tr");
    rows.innerHTML = "<td>".concat(JSON.parse(localStorage.getItem("books"))[_i22].name, "</td><td>").concat(JSON.parse(localStorage.getItem("books"))[_i22].author, "</td><td>").concat(JSON.parse(localStorage.getItem("books"))[_i22].quantity, "</td>");
    table.append(rows);
  } // asdfgf ;lkjhj asdfgf ;lkjhj /**  */ //

}

if (location.href == "https://gowthaman9710.github.io/Library-Management-System/history.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/history.html#") {
  nav();

  var _table = document.getElementById("tab2");

  var backup = JSON.parse(localStorage.getItem("allrec"));
  var usernames = localStorage.getItem("USERNAMES").split(",");
  var idx = usernames.indexOf(localStorage.getItem("currentUser"));
  console.log(idx);
  console.table(backup);
  if (localStorage.getItem("FNAME").split(",")[idx]) for (var _i23 = 0; _i23 < JSON.parse(localStorage.getItem("allrec")).length; _i23++) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>".concat(backup[_i23].date, "</td><td>").concat(backup[_i23].studentId, "</td><td>").concat(backup[_i23].studentName, "</td><td>").concat(backup[_i23].bookName, "</td><td>").concat(backup[_i23].bookAuthor, "</td><td>").concat(backup[_i23].dateOfSubmission, "</td><td>").concat(backup[_i23].status, "</td>");

    _table.append(row);
  }
}

if (location.href == "https://gowthaman9710.github.io/Library-Management-System/explore.html" || location.href == "https://gowthaman9710.github.io/Library-Management-System/explore.html#") {
  nav();
}