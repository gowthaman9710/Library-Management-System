"use strict";

//---------------------login--------------------------//    
function nav() {
  var flag;

  if (sessionStorage.validate != "success") {
    location.href = "./login.html";
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
    location.href = "./login.html";
  });
  var borrowbooks = document.getElementById("borrowbooks");
  borrowbooks.addEventListener("click", function () {
    console.log("event occurs");
    location.href = "./borrowbooks.html";
  });
  var returnbooks = document.getElementById("returnbooks");
  returnbooks.addEventListener("click", function () {
    location.href = "./return.html";
  });
  var history = document.getElementById("history");
  history.addEventListener("click", function () {
    location.href = "./history.html";
  });
  var invent = document.getElementById("invent");
  invent.addEventListener("click", function () {
    location.href = "./inventory.html";
  });
}

console.log(location.pathname);

if (location.pathname == "/login.html" || location.pathname == "/login.html#") {
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

  if (location.pathname == "/login.html" || location.pathname == "/login.html#") {
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
        location.href = "./main.html";
      } else {
        sessionStorage.setItem("validate", "failure");
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  console.log(localStorage.status);
  console.log(localStorage.length); //console.log(localStorage.getItem("USERNAMES").split(",").length)
  // let a=localStorage.getItem("FNAME")
  // localStorage.setItem("FNAME",`[${a}]`)

  function validate() {
    // console.log("Username:",user)
    // console.log("password:",pass)
    // let dbusers=Array.from(db.keys())
    // let dbvalues=Array.from(db.values())
    // console.log(dbusers,dbvalues)
    if (localStorage.getItem("USERNAMES") != null) {
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
          //     location.href="./login.html"
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
        warning.classList.add("");
        warning.innerHTML = "<p>This username doesn't exist</p>";
      }
    }
  }

  if (localStorage.status == "success") {
    flag = true;
  }
} //-----------------------------HOME-----------------------------//


if (location.pathname == "/main.html") {
  nav();

  if (localStorage.status != "success" && sessionStorage.validate != "success") {
    location.href = "./login.html";
  }
} // if(flag==false){
//     location.href="./login.html"
//     break
// }
// else{
//     location.href="./main.html"
// }
//-----------------------------------------------------------//
//-------------------------signup----------------------------//
// let db1=[]
// let map1=new Map()


if (location.pathname == "/signup.html" || location.pathname == "/signup.html#") {
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


      location.reload();
    }
  }

  if (sessionStorage.validate == "success" && localStorage.getItem(user1a) == pass1a) {
    setTimeout(function () {
      location.href = "./main.html";
    }, 7000);
  }
}

if (localStorage.getItem("FNAME") != null) {
  localStorage.setItem("FNAME", localStorage.getItem("FNAME").split(","));
} //--------------------------------------
//--------------------------------------
//borrow books


console.log(location.href);

if (location.pathname == "/borrowbooks.html" || location.pathname == "/borrowbooks.html#") {
  nav();
  borrowbooks();
}

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
  var booknames = [];
  var quantities = [];
  var authornames = [];
  var numstate;
  var numkeys = [];
  var loopCount;

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

    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) == "books") {
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
  }

  bookdbcreation();

  for (var i = 0; i < JSON.parse(localStorage.getItem("books")).length; i++) {
    booknames.push(JSON.parse(localStorage.getItem("books"))[i].name.toLowerCase());
    quantities.push(JSON.parse(localStorage.getItem("books"))[i].quantity);
    authornames.push(JSON.parse(localStorage.getItem("books"))[i].author.toLowerCase());
  }

  for (var _i = 0; _i < localStorage.length; _i++) {
    if (isNaN(localStorage.key(_i)) == false) {
      numstate = "found";
      numkeys.push(_i);
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
    for (var _i2 = 0; _i2 < numkeys.length; _i2++) {// console.log(JSON.parse(localStorage.getItem(localStorage.key(numkeys[i]))))
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

  for (var _i3 = 0; _i3 < localStorage.length; _i3++) {
    for (var j = 0; j < localStorage.length; j++) {
      if (localStorage.key(_i3) == j && isNaN(localStorage.key(_i3)) == false) {
        nums.push(j); // loopCount=j

        console.log("index:", _i3, " ", "j:", j);
      }
    }
  }

  localStorage.setItem("available nums", nums); //localStorage.setItem("missed nums",missed)
  //let nums=[4,1,2,3]
  //sorting using core methods                

  var tmp;

  for (var _i4 = 0; _i4 < nums.length; _i4++) {
    for (var _j = 0; _j < nums.length; _j++) {
      if (_j > _i4) {
        if (nums[_i4] < nums[_j]) {
          tmp = nums[_j];
          nums[_j] = nums[_i4];
          nums[_i4] = tmp;
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
  console.log(booknames, quantities, authornames);

  if (localStorage.getItem("records") == null || localStorage.getItem("records") == undefined) {
    localStorage.setItem("records", 1);
  }

  var records = [];
  var recordkeys = [];

  for (var _i5 = 0; _i5 < localStorage.length; _i5++) {
    if (isNaN(localStorage.key(_i5)) == false) {
      records.push(JSON.parse(localStorage.getItem(localStorage.key(_i5))));
      recordkeys.push(parseInt(localStorage.key(_i5)));
    }
  }

  var records1 = []; // for(let o of sortednums){
  //      records1.push(JSON.parse(localStorage.getItem(o)))
  // }

  for (var _i6 = 0; _i6 < JSON.parse(localStorage.getItem("STRECORDS")).length; _i6++) {
    records1.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i6]);
  }

  console.log(recordkeys);
  console.log(sortednums);
  console.log(localStorage.getItem(1));
  console.log(records1);
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


  var quantityreduce;

  if (localStorage.getItem("quantityreduce") == null) {
    quantityreduce = [];
    localStorage.setItem("quantityreduce", quantityreduce);
  }

  if (localStorage.getItem("totalrecords") != null) {
    console.log(
    /*localStorage.getItem("records"),*/
    JSON.parse(localStorage.getItem("totalrecords")).length);
  }

  function reducequantity() {
    var backup = JSON.parse(localStorage.getItem("books"));
    console.log(backup);

    for (var _i7 = 0; _i7 < records1.length; _i7++) {
      for (var _j2 = 0; _j2 < booknames.length; _j2++) {
        if (records1[_i7].bookName == booknames[_j2] && records1[_i7].bookAuthor == authornames[_j2]) {
          if (localStorage.getItem("quantityreduce".concat(_i7, ",").concat(_j2)) != "success") {
            quantities[_j2] -= 1;
            backup[_j2].quantity = quantities[_j2];
            localStorage.setItem("quantityreduce".concat(_i7, ",").concat(_j2), "success"); //quantityreduce.push(localStorage.getItem("quantityreduce"))
            //quantityreduce.push([i,j])

            localStorage.setItem("quantityreduce", quantityreduce);
            localStorage.setItem("books", JSON.stringify(backup));
          }
        }
      }
    }

    console.log("records", records1);

    function addquantity() {
      for (var _i8 = 0; _i8 < records1.length * 20; _i8++) {
        for (var _j3 = 0; _j3 < booknames.length; _j3++) {
          if (records1.length > 0) {
            if (localStorage.getItem("quantityreduce".concat(_i8, ",").concat(_j3)) == "success") {
              if (localStorage.getItem("quantityadd".concat(_i8, ",").concat(_j3)) != "success") {
                if ((records1[_i8] != null || records1[_i8] != undefined) && (records1[_i8] != null || records1[_i8] != undefined)) {
                  if (records1[_i8].bookName != booknames[_j3] && records1[_i8].bookAuthor != authornames[_j3]) {
                    quantities[_j3] += 1;
                    backup[_j3].quantity = quantities[_j3];
                    localStorage.setItem("quantityadd".concat(_i8, ",").concat(_j3), "success");
                    localStorage.setItem("quantityreduce".concat(_i8, ",").concat(_j3), "failure"); //quantityreduce.push(localStorage.getItem("quantityreduce"))
                    //quantityreduce.push([i,j])

                    localStorage.setItem("quantityreduce", quantityreduce);
                    localStorage.setItem("books", JSON.stringify(backup));
                  }
                } else {
                  quantities[_j3] += 1;
                  backup[_j3].quantity = quantities[_j3];
                  localStorage.setItem("quantityadd".concat(_i8, ",").concat(_j3), "success");
                  localStorage.setItem("quantityreduce".concat(_i8, ",").concat(_j3), "failure"); //quantityreduce.push(localStorage.getItem("quantityreduce"))
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

    addquantity(); //------------------------------------------------------------------

    if (records1.length < 1) {
      localStorage.setItem("books", JSON.stringify(backup));
    }
  }

  reducequantity();
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
    studentid = JSON.stringify(e.value);
    console.log(studentid);
  }

  sname.addEventListener("keyup", function () {
    setsname(sname.value);
  });

  function setsname(e) {
    studentname = e.toLowerCase();
    console.log(studentname);
  }

  dateofsub.addEventListener("change", function () {
    setdate(dateofsub);
  });
  var datevalid = false;

  function setdate(e) {
    var d = new Date(); //  d.setDate(d.getUTCDate())
    //  d.setFullYear(d.getUTCFullYear())
    //  d.setMonth(d.getUTCMonth())

    var cdate = d.getDate();
    var cmonth = d.getMonth() + 1;
    var cyear = d.getFullYear();

    if (parseInt(e.value.split("-")[0]) >= cyear) {
      if (parseInt(e.value.split("-")[1]) >= cmonth) {
        if (parseInt(e.value.split("-")[2]) > cdate) {
          console.log("date ok");
          msg.classList.remove("warningbk");
          msg.classList.remove("vis");
          msg.classList.add("inv");
          datevalid = true;
          subdate = JSON.stringify(e.value);
        } else {
          if (parseInt(e.value.split("-")[1]) > cmonth) {
            console.log("date ok");
            datevalid = true;
            msg.classList.remove("warningbk");
            msg.classList.remove("vis");
            msg.classList.add("inv");
            subdate = JSON.stringify(e.value);
          } else {
            console.log("date not ok");
            datevalid = false;
            msg.classList.add("warningbk");
            subdate = JSON.stringify(e.value);
            msg.innerHTML = "Please select the correct date";
          }
        }
      } else {
        console.log("date not ok");
        datevalid = false;
        msg.classList.add("warningbk");
        subdate = JSON.stringify(e.value);
        msg.innerHTML = "Please select the correct month";
      }
    } else {
      console.log("date not ok");
      datevalid = false;
      msg.classList.add("warningbk");
      subdate = JSON.stringify(e.value);
      msg.innerHTML = "Please select the correct year";
    }

    console.log(e.value);
    console.log(parseInt(e.value.split("-")[1]));
    console.log("".concat(cyear, "-", 0).concat(cmonth, "-").concat(cdate));
  }

  var fields = false;
  var submission = false;
  var newptag = document.createElement("p");
  bksubmit.addEventListener("click", function () {
    if (bookname != null || bookname != undefined) {
      if (author != null || author != undefined) {
        if (studentid != null || studentid != undefined) {
          if (studentname != null || studentname != undefined) {
            if (subdate != null || subdate != undefined) {
              fields = true;

              if (datevalid == true) {
                msg.classList.remove("warningbk");
                msg.classList.add("inv");
                fields = true;
                submission = true;
                submitBook();
              } else {
                datevalid = false;
                fields = true;
                msg.classList.add("warningbk"); //

                msg.innerHTML = "Please select the correct date";
              }
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
      }
    } else {
      fields = false;
    }

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
  var stid = [];
  var bname = [];
  var bauthor = [];
  var stname = []; //console.log(JSON.parse(localStorage.getItem("STRECORDS"))[0].studentId)

  if (JSON.parse(localStorage.getItem("STRECORDS")) != null) {
    for (var _i9 = 0; _i9 < JSON.parse(localStorage.getItem("STRECORDS")).length; _i9++) {
      stid.push(JSON.parse(JSON.parse(localStorage.getItem("STRECORDS"))[_i9].studentId));
      bname.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i9].bookName);
      stname.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i9].studentName);
      bauthor.push(JSON.parse(localStorage.getItem("STRECORDS"))[_i9].bookAuthor);
    }
  }

  console.log(stid, "  ", bname, "  ", bauthor);
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
      var strecord = new Map();
      console.log(booknames);
      console.log(bookname); //----------------------------------

      for (var _i11 = 0; _i11 < booknames.length; _i11++) {
        if (booknames[_i11] == bookname) {
          bi.push(_i11);
          bkscheck.push([_i11, booknames[_i11], authornames[_i11], quantities[_i11]]);
          console.log(bkscheck);
        }
      } //-------------------------------------------------


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
      // ---------------------------------------------------


      var newptag1 = document.createElement("p");
      var newptag2 = document.createElement("p");
      var newptag3 = document.createElement("p");

      if (bookavail[1] == "success") {
        if (authoravail[1] == "success") {
          if (quantityavail[1] == "success") {
            console.log("quantity check ok");
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
            localStorage.setItem("STRECORDS", JSON.stringify(studentrecords)); //localStorage.setItem(loopCount,JSON.stringify(strecord1))

            bookstate = "issued";
            msg.classList.remove("warningbk");
            msg.innerHTML = "<p>THE REQUESTED BOOK WILL BE ISSUED, PLEASE RETURN THE ".concat(bookname.toUpperCase(), " BOOK ON ").concat(JSON.parse(subdate), " AT MORNING 9:30 A.M AT LIBRARY INCHARGE</p>");
            submitted = true;
            reducequantity();
          } else {
            alert("QUANTITY INSUFFICIENT");
            msg.classList.add("warningbk");
            msg.innerHTML = "<p>THE REQUESTED BOOK IS NOT AVAILABLE DUE TO THE INSUFFICIENT QUANTITY</p>";
            setTimeout(function () {//location.reload()
            }, 15000);
          }
        } else {
          msg.classList.add("warningbk");
          msg.innerHTML = "<p>THE REQUESTED BOOK WITH THE DIFFERENT AUTHOR IS AVAILABLE</p>";

          for (var _i15 = 0; _i15 < authornames.length; _i15++) {
            if (bookname == booknames[_i15]) {
              var newptag4 = document.createElement("p");
              newptag4.innerHTML = "<b>".concat(authornames[_i15], "</b>");
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
      }

      addquantity();
      reducequantity();
      bkdetails = localStorage.getItem(loopCount);
      console.log(bkdetails);

      if (sessionStorage.validate != "success") {
        localStorage.status = "failure";
      }

      if (localStorage.status != "success" && sessionStorage.validate != "success") {
        location.href = "./login.html";
      }

      addEventListener("keypress", function () {
        msg.classList.add("inv");
        msg.classList.remove("vis");
      });
    } //-------------------------------------------------------------------------------------------------------// 


    var submittest = false;
    var a;

    for (var _i16 = 0; _i16 < stid.length; _i16++) {
      if (stid[_i16] != studentid && stname[_i16] != studentname) {
        /** asdfgf ;lkjhj asdfgf  */
        if (submitted == false) {
          submittest = false; // bkdetails.push({"bookName":bookname,"bookAuthor":author,"studentId":studentid,"studentName":studentname})
        } else {
          a = _i16;
          submittest = true;
          break;
        }
      } else {
        for (var _j4 = 0; _j4 < bname.length; _j4++) {
          if (bname[_j4] != bookname && bauthor[_j4] != author) {
            submittest = false;
          } else {
            a = _i16;
            submittest = true;
            break;
          }
        }
      }
    } //-------------------------------------------------------------------------------------------------------// 


    if (stid[a] != studentid && stname[a] != studentname) {
      /**/
      console.log(studentid, studentname, stid[a], stname[a]);

      if (submitted == false) {
        msg.classList.add("warningbk");
        msg.innerText = "You already submitted!"; // bkdetails.push({"bookName":bookname,"bookAuthor":author,"studentId":studentid,"studentName":studentname})
      } else {
        submit();
        submitted = true;
      }
    } else {
      if (bname[a] == bookname && bauthor[a] == author) {
        msg.classList.add("warningbk");
        msg.classList.remove("inv");
        msg.innerText = "You already got this book";
      } else {
        submit();
        submitted = true;
      }
    }
  }
} //-------------------------------------------------return books---------------------------------------------//


if (location.pathname == "/return.html" || location.pathname == "/return.html#") {
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
  };

  var subdate = function subdate(e) {
    submitdate = e.value;
  };

  var booksubmit = function booksubmit() {
    var idcheck = false;
    var stnamecheck = false;
    var bknamecheck = false;
    var authornamecheck = false;
    var idx;
    var backup;

    for (var i = 0; i < JSON.parse(localStorage.getItem("STRECORDS")).length; i++) {
      console.log(JSON.parse(localStorage.getItem("STRECORDS"))[i].studentId, "==", stid);

      if (JSON.parse(localStorage.getItem("STRECORDS")).includes(JSON.stringify(stid)) != true) {
        idcheck = true;

        if (JSON.parse(localStorage.getItem("STRECORDS"))[i].studentName == stname) {
          stnamecheck = true;

          if (JSON.parse(localStorage.getItem("STRECORDS"))[i].bookName == bksname) {
            bknamecheck = true;
            console.log(JSON.parse(localStorage.getItem("STRECORDS"))[i].bookAuthor, "   ", bksauthor);
            /** asdfgf ;lkjhj asdfgf */

            if (JSON.parse(localStorage.getItem("STRECORDS"))[i].bookAuthor == bksauthor) {
              authornamecheck = true;
              idx = i;
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
              break;
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

    if (idcheck == true) {
      if (stnamecheck == true) {
        if (bknamecheck == true) {
          if (authornamecheck == true) {
            var strecord2 = {
              "studentId": stid,
              "studentName": stname,
              "bookName": bksname,
              "bookAuthor": bksauthor,
              "dateOfSubmission": submitdate
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
            backup = JSON.parse(localStorage.getItem("RTRECORDS"));
            backup.splice(idx, 1);
            localStorage.setItem("RTRECORDS", JSON.stringify(backup));
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
  }; //ends


  nav();

  if (sessionStorage.getItem("validate") != "success") {
    location.href = "./login.html";
  }

  bookdbcreation();
  addquantity();
  reducequantity();
  var sid = document.getElementById("rsid");
  var sname = document.getElementById("rsname");
  var bkname = document.getElementById("rbkname");
  var bkauth = document.getElementById("rbkauth");
  var dateofsub = document.getElementById("rdateofsub");
  var bksubmit = document.getElementById("rbksubmit");
  var warning = document.getElementById("warnreturn");
  var stid, stname, bksname, bksauthor, submitdate;
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
  dateofsub.addEventListener("keyup", function () {
    subdate(dateofsub);
  });
  bksubmit.addEventListener("click", function () {
    booksubmit();
  });
} //inventory


if (location.pathname == "/inventory.html" || location.pathname == "/inventory.html#") {
  var table = document.getElementById("tab");

  for (var i = 0; i < JSON.parse(localStorage.getItem("books")).length; i++) {
    var rows = document.createElement("tr");
    rows.innerHTML = "<td>".concat(JSON.parse(localStorage.getItem("books"))[i].name, "</td><td>").concat(JSON.parse(localStorage.getItem("books"))[i].author, "</td><td>").concat(JSON.parse(localStorage.getItem("books"))[i].quantity, "</td>");
    table.append(rows);
  }
}