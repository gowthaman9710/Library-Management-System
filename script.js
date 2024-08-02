//---------------------login--------------------------//    

function nav(){
    let flag
    if(sessionStorage.validate!="success"){
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
    }
let mainlog=document.getElementById("mlog")
let mainsignup=document.getElementById("msignup")
  if(flag==true){
    mainlog.classList.add("mloginv")
    mainsignup.classList.add("msignupinv")
  }
//   else{
//     mainlog.id="mlog"
//     mainsignup.id="msignup"
//   }
let mlogout=document.getElementById("mlogout")
mlogout.addEventListener("click",()=>{
    localStorage.status="failure"
    sessionStorage.validate="failure"
    location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
})
let borrowbooks=document.getElementById("borrowbooks")
borrowbooks.addEventListener("click",()=>{
    console.log("event occurs")
     location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/borrowbooks.html"
})
let returnbooks=document.getElementById("returnbooks")
returnbooks.addEventListener("click",()=>{
    location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/return.html"
})
let history=document.getElementById("history")
history.addEventListener("click",()=>{
    location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/history.html"
})
let invent=document.getElementById("invent")
invent.addEventListener("click",()=>{
    location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/inventory.html"
})
}
console.log(location.pathname)
if(location.pathname=="/login.html" || location.pathname=="/login.html#"){
    login()
}             
function login(){
let user2=document.getElementById("user2")
let pass2=document.getElementById("pass2")
let warning=document.getElementById("invalid")                     
let newptag=document.createElement("p")
let submit2=document.getElementById("submit2")
let backup
// let db=new Map()
// db.set("admin","bca123")
let flag                                                                             
let user 
let pass
let useravail
let usernull=true
let passnull=true
if(sessionStorage.validate!="success"){
    localStorage.status="failure"
}

if(location.pathname=="/login.html" || location.pathname=="/login.html#"){
try{
user2.addEventListener("keyup",()=>{
      getUser(user2)
})
function getUser(e){
    user=e.value
    console.log(user)
}
pass2.addEventListener("keyup",()=>{
    getPass(pass2)
})
function getPass(e){
    pass=e.value
    console.log(pass)
}                                                          /**  */
submit2.addEventListener("click",()=>{
    if((user!=null || user!=undefined || user!="" || user!=" ") && (pass!=null || pass!=undefined || pass!="" || pass!=" ")){
    validate()
    }else{
     warning.classList.add("vis1")
     warning.innerHTML="<p>PLEASE FILL ALL THE ABOVE FIELDS</p>"
    }
})
if(localStorage.status=="success" && sessionStorage.validate=="success"){
        localStorage.setItem("flag",true)
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html"
}else{
    sessionStorage.setItem("validate","failure") 
}
}catch(e){
    console.log("error",e)
}
}
console.log(localStorage.status)
console.log(localStorage.length)

//console.log(localStorage.getItem("USERNAMES").split(",").length)
// let a=localStorage.getItem("FNAME")
// localStorage.setItem("FNAME",`[${a}]`)


function validate(){
    // console.log("Username:",user)
    // console.log("password:",pass)
    // let dbusers=Array.from(db.keys())
    // let dbvalues=Array.from(db.values())
    // console.log(dbusers,dbvalues)
if(localStorage.getItem("USERNAMES")!=null){
for(let i=0;i<localStorage.getItem("USERNAMES").split(",").length;i++){
if(localStorage.getItem("USERNAMES").split(",").includes(user)==true){
    useravail=true
  if(localStorage.getItem("PASSWORDS").includes(pass)==true){
    if(localStorage.getItem("PASSWORDS").split(",")[i]==pass && localStorage.getItem("USERNAMES").split(",")[i]==user){
    localStorage.setItem("status","success")    
    sessionStorage.setItem("validate","success")   
    localStorage.setItem("currentUser",user)     
    // localStorage.setItem(dbusers[i],dbvalues[i])
     flag=true
     break
}
else{
   // localStorage.clear()
    flag=false
}
}else{
    flag=false
}
}else{
     
    useravail=false
}
}
}
if(useravail==true){
if(flag==true && localStorage.status=="success"){
    warning.classList.remove("warninglog")
    warning.classList.add("successlog")
    warning.innerHTML="<p>LOGIN SUCCESSFUL</p>"
    setTimeout(()=>{
        location.href="/main.html"
     },3000)
}else{
    if(pass==null || pass==undefined || pass==" "){
        warning.classList.remove("successlog")
        //warning.classList.remove("warninglog")
        warning.classList.add("warninglog")
        warning.innerHTML="<p>Please enter your password</p>"      
    }else{
    warning.classList.remove("successlog")
    //warning.classList.remove("warninglog")
    warning.classList.add("warninglog")
    warning.innerHTML="<p>Invalid password</p>"
    // setTimeout(()=>{
    //     location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
    //  },3000)
    }
}
}else{
    if(user==null || user==undefined || user==" "){
        warning.classList.remove("successlog")
        warning.classList.add("warninglog")
        warning.innerHTML="<p>Please enter your username</p>"
    }else{
    warning.classList.remove("successlog")
    warning.classList.add("")
    warning.innerHTML="<p>This username doesn't exist</p>"
    }
}
}
if(localStorage.status=="success"){
    flag=true
}
}



//-----------------------------HOME-----------------------------//
if(location.pathname=="/main.html"){
    nav()
     if(localStorage.status!="success" && sessionStorage.validate!="success"){
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
    }
}

// if(flag==false){
//     location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
//     break
// }
// else{
//     location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html"
// }

//-----------------------------------------------------------//
//-------------------------signup----------------------------//
// let db1=[]
// let map1=new Map()
if(location.pathname=="/signup.html" || location.pathname=="/signup.html#"){
      signup()
}
function signup(){
let fname1a
let lname1a
let user1a
let pass1a
let repass1a
// let dbusers=Array.from(db.keys())
// let dbvalues=Array.from(db.values())
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let user1=document.getElementById("user1")
let pass1=document.getElementById("pass1")
let repass1=document.getElementById("repass1")
let submit1=document.getElementById("submit1")
let warning2=document.getElementById("warning2")
let flag_signup=true
// console.log(dbusers,"  ",dbvalues)
fname.addEventListener("keyup",()=>{
    fname1(fname)
})
function fname1(fname){
    // map1.set("first_name",fname.value)
    fname1a=fname.value     
    // console.log(map1)
    }
lname.addEventListener("keyup",(e)=>{
    lname1(lname)
})
function lname1(lname){
    // map1.set("last_name",lname.value) 
    lname1a=lname.value    
    // console.log(map1)
}
user1.addEventListener("keyup",(e)=>{
    userName(user1)
})
function userName(user1){
    // map1.set("user_name",user1.value)     
    // db.set("user_name",user1.value) 
    console.log("Username:",user1.value) 
    user1a=user1.value
    // console.log(map1)
}
pass1.addEventListener("keyup",(e)=>{
    passWord(pass1)
})
function passWord(e){
    // map1.set("password",pass1.value)  
    // db.set("password",pass1.value) 
    console.log("Password:",e.value)   
    pass1a=e.value
    // console.log(map1)
    // console.log("DB:",db)
}
repass1.addEventListener("keyup",()=>{
     rePassWord(repass1)
})
function rePassWord(e){
    repass1a=e.value
    console.log("Re-entered password",repass1a)
}
submit1.addEventListener("click",()=>{
    if((fname1a!=null||fname1a!=undefined) && (lname1a!=null || lname1a!=undefined) && (user1a!=null || user1a!=undefined) && (pass1a!=null || pass1a!=undefined)){
        if(pass1a==repass1a){
        if(pass1a.length>=8){
        if(isNaN(pass1a)==true){
        storeinfo()
        }else{
        warning2.classList.add("vis1")
        alert("Password should contain minimum one charater")
        warning2.innerHTML="Password should contain minimum one charater"
        }
        }else{
            warning2.classList.add("vis1")
        alert("Password should be minimum 8 characters")
        warning2.innerHTML="THE PASSWORD SHOULD BE MINIMUM 8 CHARACTERS"
        }
    }else{
        warning2.classList.add("vis1")
        alert("Password was not matched")
        warning2.innerHTML="THE PASSWORD WAS NOT MATCHED"
    }
}else{
    warning2.classList.add("vis1")
    alert("ENTER ALL THE BELOW FIELDS!")
    warning2.innerHTML="PLEASE FILL ALL THE ABOVE FIELDS"
   // warning2.append(warnmsg)

    }
})
if(localStorage.getItem("FNAME")==null){
localStorage.setItem("FNAME",[])
localStorage.setItem("LNAME",[])
localStorage.setItem("USERNAMES",[])
localStorage.setItem("PASSWORDS",[])
}
function storeinfo(){
        if(localStorage.getItem("USERNAMES").split(",").includes(user1a)){
            warning2.classList.add("vis1")
            warning2.innerHTML="You are already having an account"
            //warning2.classList.remove("vis1")
            //warning2.classList.add("inv")
            // if(localStorage.getItem(user1a)!=pass1a){
            //  localStorage.setItem("password","wrong")
            //  alert("YOU ENTERED THE PASSWORD WRONGLY")
            //  warning2.innerHTML="<p>INCORRECT PASSWORD</p>" 
            //  break
            // }
        }else{
            warning2.classList.remove("vis1")
            warning2.classList.add("vis2")
            warning2.innerHTML="<p>You are registered the account successfully</p>"
            // db1.push(map1)
            sessionStorage.validate="success"
            localStorage.status="success"
            // console.log(map1)
      }
    if(localStorage.status=="success" && sessionStorage.validate=="success"){
       let fname=[]
       fname.push(localStorage.getItem("FNAME"))
       fname.push(fname1a)
        localStorage.setItem("FNAME",fname.toString().split(","))
        if(localStorage.getItem("FNAME").charAt(0)==","){
            localStorage.setItem("FNAME",fname.toString().slice(1)) 
        }
       let lname=[]
       lname.push(localStorage.getItem("LNAME"))                
       lname.push(lname1a)
        localStorage.setItem("LNAME",lname.toString().split(",")) 
        if(localStorage.getItem("LNAME").charAt(0)==","){
            localStorage.setItem("LNAME",lname.toString().slice(1)) 
        }             
       let username=[]
       username.push(localStorage.getItem("USERNAMES"))
       username.push(user1a)
       localStorage.setItem("USERNAMES",username.toString().split(",")) 
       if(localStorage.getItem("USERNAMES").charAt(0)==","){
        localStorage.setItem("USERNAMES",username.toString().slice(1)) 
    }                          
       let password=[]
       password.push(localStorage.getItem("PASSWORDS"))
       password.push(pass1a)
        localStorage.setItem("PASSWORDS",password.toString().split(","))              
        if(localStorage.getItem("PASSWORDS").charAt(0)==","){
            localStorage.setItem("PASSWORDS",password.toString().slice(1)) 
        }
       // localStorage.setItem("USERNAME",[...user1a])
       // localStorage.setItem("PASSWORD",[...pass1a])
        location.reload()
    }
}
if(sessionStorage.validate=="success" && localStorage.getItem(user1a)==pass1a){
    setTimeout(()=>{
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/main.html"
    },7000)
}
}
if(localStorage.getItem("FNAME")!=null){
localStorage.setItem("FNAME",localStorage.getItem("FNAME").split(","))
}
//--------------------------------------
//--------------------------------------
//borrow books
console.log(location.href)
if(location.pathname=="/borrowbooks.html" || location.pathname=="/borrowbooks.html#"){
    nav()
    borrowbooks()
}  
function borrowbooks(){
let main=document.getElementById("homeabook")
let bkname=document.getElementById("bkname")
let bookname
let bkauth=document.getElementById("bkauth")
let author
let sid=document.getElementById("sid")
let studentid
let sname=document.getElementById("sname")
let studentname
let dateofsub=document.getElementById("dateofsub")
let msg=document.getElementById("msg")
let subdate
let bksubmit=document.getElementById("bksubmit")
let bookdb
let booknames=[]
let quantities=[]
let authornames=[]
let numstate
let numkeys=[]
let loopCount
function bookdbcreation(){
let books=[
             {        
            'name':'java',
             'quantity':12,
             'author':'balagurusamy'
            },
            {
            'name':'java',
            'quantity':10,
            'author':'ramesh'
            },
            {
             'name':'python',
             'quantity':7,
             'author':'prince'
              },
              {
              'name':'frontend frameworks',
              'quantity':15,
              'author':'badri'
               }, 
           {
            'name':'mysql',
            'quantity':12,
            'author':'aaron'
             },
            {
            'name':'dotnet',
            'quantity':0,
             'author':'balaji'
            }
]
for(let i=0;i<localStorage.length;i++){
if(localStorage.key(i)=="books"){
    bookdb="found"
    localStorage.setItem("bookdb","found")
    break
}
else{
    bookdb="notfound"
    localStorage.setItem("bookdb","notfound")
}
}
if(bookdb=="notfound"){
        localStorage.setItem("books",JSON.stringify(books))  
    localStorage.setItem("bookdb","found")
}
}
bookdbcreation()
for(let i=0;i<JSON.parse(localStorage.getItem("books")).length;i++){
   booknames.push(JSON.parse(localStorage.getItem("books"))[i].name.toLowerCase())
   quantities.push(JSON.parse(localStorage.getItem("books"))[i].quantity)
   authornames.push(JSON.parse(localStorage.getItem("books"))[i].author.toLowerCase())
}

for(let i=0;i<localStorage.length;i++){
if(isNaN(localStorage.key(i))==false){
    numstate="found"
    numkeys.push(i)
   }else{
    numstate="notfound"
}
}
if(numkeys.length>=1){
    numstate="found"
}
else{
    numstate="notfound"
}
if(numstate=="notfound"){
    localStorage.setItem("records",0)
}else{
    localStorage.setItem("records",1)
}

if(numstate=="found"){
    for(let i=0;i<numkeys.length;i++){
     // console.log(JSON.parse(localStorage.getItem(localStorage.key(numkeys[i]))))
}
}
console.log(numkeys)

if(localStorage.getItem("records")!=undefined || localStorage.getItem("records")!=null){
    loopCount=localStorage.getItem("records") 
}else{
    localStorage.setItem("records",0)
    loopCount=1
}

let nums=[]
//let missed=[]                                  
for(let i=0;i<localStorage.length;i++){
    for(let j=0;j<localStorage.length;j++){                        
    if(localStorage.key(i)==j && isNaN(localStorage.key(i))==false){
        nums.push(j)                             
       // loopCount=j
        console.log("index:",i," ","j:",j)
    }
}
}
            
localStorage.setItem("available nums",nums)
//localStorage.setItem("missed nums",missed)
//let nums=[4,1,2,3]
//sorting using core methods                
let tmp
for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        if(j>i){
        if(nums[i]<nums[j]){
         tmp=nums[j]
         nums[j]=nums[i]
         nums[i]=tmp
        }
    }
    }
}
console.log(nums)
if(nums[0]!=null || nums[0]!=undefined){
    loopCount=nums[0]
    localStorage.setItem("records",nums[0])
}else{
    loopCount=1
   }
   let sortednums=nums.sort((a,b)=>{
    return a-b
})
console.log(sortednums)
// for(let i=1;i<=sortednums.length;i++){
//     if(sortednums.includes(i)==false){
//       localStorage.setItem("records",i)
//       break
//     }else{
//         localStorage.setItem("records",nums[0])
//     }
// }
//localStorage.setItem("records",loopCount)
console.log(loopCount)
console.log(booknames,quantities,authornames)
if(localStorage.getItem("records")==null || localStorage.getItem("records")==undefined){
    localStorage.setItem("records",1)
}

let records=[]
let recordkeys=[]
for(let i=0;i<localStorage.length;i++){
    if(isNaN(localStorage.key(i))==false){
        records.push(JSON.parse(localStorage.getItem(localStorage.key(i))))         
        recordkeys.push(parseInt(localStorage.key(i)))
    }
}
let records1=[]
// for(let o of sortednums){
//      records1.push(JSON.parse(localStorage.getItem(o)))
// }
for(let i=0;i<JSON.parse(localStorage.getItem("STRECORDS")).length;i++){
    records1.push(JSON.parse(localStorage.getItem("STRECORDS"))[i])
}

console.log(recordkeys)
console.log(sortednums)
console.log(localStorage.getItem(1))
console.log(records1)
let val
///////////////////////////////////////////////////////////
let current=[]                                            //
current[0]=localStorage.getItem("records")                 //
localStorage.setItem("current",current[0])                  //         
console.log(current)                                        //
if(current[0]<localStorage.getItem("current")){             //
   localStorage.setItem("highest",1)                        //
}                                                         //
//////////////////////////////////////////////////////////
let quantityreduce
if(localStorage.getItem("quantityreduce")==null){
    quantityreduce=[]
    localStorage.setItem(`quantityreduce`,quantityreduce)
}
if(localStorage.getItem("totalrecords")!=null){
console.log(/*localStorage.getItem("records"),*/JSON.parse(localStorage.getItem("totalrecords")).length)
}
function reducequantity(){
let backup=JSON.parse(localStorage.getItem("books"))
console.log(backup)
for(let i=0;i<records1.length;i++){
    for(let j=0;j<booknames.length;j++){
   if(records1[i].bookName==booknames[j] && records1[i].bookAuthor==authornames[j]){                            
    if(localStorage.getItem(`quantityreduce${i},${j}`)!="success"){
    quantities[j]-=1
    backup[j].quantity=quantities[j]    
    localStorage.setItem(`quantityreduce${i},${j}`,"success")
    //quantityreduce.push(localStorage.getItem("quantityreduce"))
    //quantityreduce.push([i,j])
    localStorage.setItem(`quantityreduce`,quantityreduce)
    localStorage.setItem("books",JSON.stringify(backup))
     }
    }
}
}

console.log("records",records1)
function addquantity(){
for(let i=0;i<records1.length*20;i++){
    for(let j=0;j<booknames.length;j++){
        if(records1.length>0){
    if(localStorage.getItem(`quantityreduce${i},${j}`)=="success"){
        if(localStorage.getItem(`quantityadd${i},${j}`)!="success"){
        if((records1[i]!=null || records1[i]!=undefined) && (records1[i]!=null || records1[i]!=undefined)){
   if(records1[i].bookName!=booknames[j] && records1[i].bookAuthor!=authornames[j]){                            
    quantities[j]+=1
    backup[j].quantity=quantities[j]
    localStorage.setItem(`quantityadd${i},${j}`,"success")
    localStorage.setItem(`quantityreduce${i},${j}`,"failure")
    //quantityreduce.push(localStorage.getItem("quantityreduce"))
    //quantityreduce.push([i,j])
    localStorage.setItem(`quantityreduce`,quantityreduce)
    localStorage.setItem("books",JSON.stringify(backup))        
     }
    }else{
        quantities[j]+=1
        backup[j].quantity=quantities[j]
        localStorage.setItem(`quantityadd${i},${j}`,"success")
        localStorage.setItem(`quantityreduce${i},${j}`,"failure")
        //quantityreduce.push(localStorage.getItem("quantityreduce"))
        //quantityreduce.push([i,j])
        localStorage.setItem(`quantityreduce`,quantityreduce)
        localStorage.setItem("books",JSON.stringify(backup))     
    }
}
}
}
}
}
}
addquantity()
     


//------------------------------------------------------------------
if(records1.length<1){
    localStorage.setItem("books",JSON.stringify(backup))
}
}
reducequantity()
console.log("records",records)
console.log("quantities",quantities)
localStorage.setItem("totalrecords",JSON.stringify(records1))
bkname.addEventListener("keyup",()=>{
    setbkname(bkname.value)
   })  
   function setbkname(e){
     bookname=e.toLowerCase()
     console.log(bookname)
}
bkauth.addEventListener("keyup",()=>{
    setauth(bkauth.value)
})
function setauth(e){
    author=e
    console.log(author)
}
sid.addEventListener("keyup",()=>{
    setid(sid)
})
function setid(e){
    studentid=JSON.stringify(e.value)
    console.log(studentid)
}
sname.addEventListener("keyup",()=>{
    setsname(sname.value)
})
function setsname(e){
    studentname=e.toLowerCase()
    console.log(studentname)
}
dateofsub.addEventListener("change",()=>{
     setdate(dateofsub)
})
let datevalid=false
function setdate(e){
     let d=new Date()
    //  d.setDate(d.getUTCDate())
    //  d.setFullYear(d.getUTCFullYear())
    //  d.setMonth(d.getUTCMonth())
     let cdate=d.getDate()
     let cmonth=d.getMonth()+1
     let cyear=d.getFullYear()
     if(parseInt((e.value).split("-")[0])>=cyear){
        if(parseInt((e.value).split("-")[1])>=cmonth){
            if(parseInt((e.value).split("-")[2])>cdate){
                console.log("date ok")
                msg.classList.remove("warningbk")
                msg.classList.remove("vis")
                msg.classList.add("inv")
                datevalid=true
                subdate=JSON.stringify(e.value)
            }else{
                if(parseInt((e.value).split("-")[1])>cmonth){
                    console.log("date ok")
                    datevalid=true
                    msg.classList.remove("warningbk")
                    msg.classList.remove("vis")
                    msg.classList.add("inv")
                    subdate=JSON.stringify(e.value)
                }else{
                console.log("date not ok")
                datevalid=false
                msg.classList.add("warningbk")
                subdate=JSON.stringify(e.value)
                msg.innerHTML="Please select the correct date"
                } 
            }
        }else{
            console.log("date not ok")
            datevalid=false
            msg.classList.add("warningbk")
            subdate=JSON.stringify(e.value)
            msg.innerHTML="Please select the correct month"
         }
     }else{
        console.log("date not ok")
        datevalid=false
        msg.classList.add("warningbk")
        subdate=JSON.stringify(e.value)
        msg.innerHTML="Please select the correct year"
     }
     console.log(e.value)
     console.log(parseInt((e.value).split("-")[1]))
     console.log(`${cyear}-${0}${cmonth}-${cdate}`)

}
let fields=false
let submission=false
let newptag=document.createElement("p")
bksubmit.addEventListener("click",()=>{
    if(bookname!=null || bookname!=undefined){
        if(author!=null || author!=undefined){
            if(studentid!=null || studentid!=undefined){
                if(studentname!=null || studentname!=undefined){
                    if((subdate!=null || subdate!=undefined)){
                        fields=true
                        if(datevalid==true){
                        msg.classList.remove("warningbk")
                        msg.classList.add("inv")
                        fields=true
                        submission=true
                        submitBook()
                    }else{
                        datevalid=false
                        fields=true
                        msg.classList.add("warningbk")   //
                        msg.innerHTML="Please select the correct date"
                        }
                    }else{
                        fields=false
                    } 
                }else{
                    fields=false
                } 
            }else{
                fields=false
            } 
        }else{
            fields=false
        } 
    }else{
        fields=false
    } 

    if(fields==false){
        msg.classList.add("warningbk")
        msg.classList.remove("vis")
        msg.classList.remove("inv")
        msg.innerText="PLEASE FILL ALL THE ABOVE FIELD"
        setTimeout(()=>{
        msg.classList.add("inv")
        msg.classList.remove("vis")         
        newptag.remove()                      /**  */
        },8000)
    }
})
let stid=[]
let bname=[]
let bauthor=[]
let stname=[]
//console.log(JSON.parse(localStorage.getItem("STRECORDS"))[0].studentId)
if(JSON.parse(localStorage.getItem("STRECORDS"))!=null){
for(let i=0;i<JSON.parse(localStorage.getItem("STRECORDS")).length;i++){
stid.push(JSON.parse(JSON.parse(localStorage.getItem("STRECORDS"))[i].studentId))
bname.push(JSON.parse(localStorage.getItem("STRECORDS"))[i].bookName)
stname.push(JSON.parse(localStorage.getItem("STRECORDS"))[i].studentName)
bauthor.push(JSON.parse(localStorage.getItem("STRECORDS"))[i].bookAuthor)
}
}
console.log(stid,"  ",bname,"  ",bauthor)
let submitted=false
function submitBook(){
    function submit(){
        msg.classList.add("vis")
        msg.classList.remove("inv")
        for(let i=0;i<localStorage.length;i++){
            console.log(localStorage.key(i))
            if(localStorage.key(i)==loopCount ){
                console.log(localStorage.key(i))
                console.log("loopCount:",loopCount)                              
                localStorage.setItem("records",loopCount)
                loopCount=parseInt(localStorage.getItem("records"))+1
                localStorage.setItem("records",loopCount)
                break
           }//else{
        //     localStorage.records=loopCount
        //     loopCount=parseInt(localStorage.getItem("records"))+1
        //    }
        }
    let bookavail
    let authoravail
    let quantityavail
    let bookstate
    let bi=[]
    let ai  
    let bks
    let bkscheck=[]
    let authcheck=[]
    let strecord=new Map()
    console.log(booknames)
    console.log(bookname)
    //----------------------------------
    for(let i=0;i<booknames.length;i++){
        if(booknames[i]==bookname){
            bi.push(i)
            bkscheck.push([i,booknames[i],authornames[i],quantities[i]])
            console.log(bkscheck)
        }
    }

    //-------------------------------------------------
    for(let i=0;i<bkscheck.length;i++){
        if(bkscheck[i][1]==bookname){
            localStorage.setItem(`bkavail:${bi[i]}`,[1])
            bookavail=[i,"success"]
            console.log("book available ",bookavail)
            break
        }else{
            localStorage.setItem(`bkavail:${i}`,[0])
            bookavail=[i,"failure"]
            console.log("book unavailable ",bookavail)
        }
    }
    //-------------------------------------------------
    for(let i=0;i<bkscheck.length;i++){
        if(bkscheck[i][2]==author){
            localStorage.setItem(`authavail:${i}`,[1])
            ai=authornames.indexOf(author)
            authcheck.push([i,authornames[i]])
            console.log(authcheck)
            authoravail=[i,"success"]
            console.log("author available ",authoravail)
            break
        }else{
            localStorage.setItem(`authavail:${i}`,[0])
            authoravail=[i,"failure"]
            console.log("author unavailable ",authoravail)
        }
    }
    //-------------------------------------------------
 
    //----------------------------------------------------
    for(let i=0;i<bkscheck.length;i++){
        if(bkscheck[i][3]>=1){
            localStorage.setItem(`quavail:${ai}`,[1])
            quantityavail=[i,"success"]
            console.log("quantity available ",quantityavail)
            break
        }else{
            localStorage.setItem(`quavail:${ai}`,[0])
            quantityavail=[i,"failure"]
            console.log("quantity unavailable ",quantityavail)
        }
    }
    //----------------------------------------------------

    // ---------------------------------------------------
    
    let newptag1=document.createElement("p")
    let newptag2=document.createElement("p")
    let newptag3=document.createElement("p")
    if(bookavail[1]=="success"){
        if(authoravail[1]=="success"){
            if(quantityavail[1]=="success"){
                console.log("quantity check ok")
                let strecord1={
                    "studentId":studentid,
                    "studentName":studentname,
                    "bookName":bookname,
                    "bookAuthor":author,
                    "dateOfSubmission":subdate
                }
                // strecord.set("studentId",studentid)
                // strecord.set("studentName",studentname)
                // strecord.set("bookName",bookname)
                // strecord.set("bookAuthor",author)
                // strecord.set("dateOfSubmission",subdate)
                console.log(strecord1)
                let studentrecords
                if(localStorage.getItem("STRECORDS")!=null){
                studentrecords=JSON.parse(localStorage.getItem("STRECORDS"))
                }else{
                    studentrecords=[]
                }
                studentrecords.push(strecord1)
                localStorage.setItem("STRECORDS",JSON.stringify(studentrecords))
                //localStorage.setItem(loopCount,JSON.stringify(strecord1))
                bookstate="issued"
                msg.classList.remove("warningbk")
                msg.innerHTML=`<p>THE REQUESTED BOOK WILL BE ISSUED, PLEASE RETURN THE ${bookname.toUpperCase()} BOOK ON ${JSON.parse(subdate)} AT MORNING 9:30 A.M AT LIBRARY INCHARGE</p>`
                submitted=true
                reducequantity()
            }else{
                alert("QUANTITY INSUFFICIENT")
                msg.classList.add("warningbk")
                msg.innerHTML=`<p>THE REQUESTED BOOK IS NOT AVAILABLE DUE TO THE INSUFFICIENT QUANTITY</p>`
                setTimeout(()=>{
                    //location.reload()
                },15000)
            }
        }else{
            msg.classList.add("warningbk")
            msg.innerHTML=`<p>THE REQUESTED BOOK WITH THE DIFFERENT AUTHOR IS AVAILABLE</p>`
            for(let i=0;i<authornames.length;i++){  
            if(bookname==booknames[i]){
            let newptag4=document.createElement("p")
            newptag4.innerHTML=`<b>${authornames[i]}</b>`
            msg.append(newptag4)
            msg.classList.add("pad")
            }
            }
            setTimeout(()=>{
                //location.reload()
            },15000)
        }
    }else{
        msg.classList.add("warningbk")
        msg.innerHTML=`<p>THE BOOK WAS NOT AVAILABLE</p>` 
        setTimeout(()=>{
            //location.reload()
        
        },15000)
        
    }
    addquantity()
    reducequantity()
 
        bkdetails=localStorage.getItem(loopCount)
        console.log(bkdetails)
    
    if(sessionStorage.validate!="success"){
        localStorage.status="failure"
    }
    if(localStorage.status!="success" && sessionStorage.validate!="success"){
        location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
    }
    addEventListener("keypress",()=>{
        msg.classList.add("inv")
        msg.classList.remove("vis")
    })
}
//-------------------------------------------------------------------------------------------------------// 
let submittest=false
let a
for(let i=0;i<stid.length;i++){
if(stid[i]!=studentid && stname[i]!=studentname){   /** asdfgf ;lkjhj asdfgf  */
if(submitted==false){
    submittest=false
    // bkdetails.push({"bookName":bookname,"bookAuthor":author,"studentId":studentid,"studentName":studentname})
}else{
    a=i
    submittest=true
    break
}
}else{
    for(let j=0;j<bname.length;j++){
    if(bname[j]!=bookname && bauthor[j]!=author){
        submittest=false
    }else{
        a=i
      submittest=true
      break
    }
}
}
}
//-------------------------------------------------------------------------------------------------------// 
if(stid[a]!=studentid && stname[a]!=studentname){   /**/
console.log(studentid, studentname, stid[a], stname[a])
if(submitted==false){
    msg.classList.add("warningbk")
    msg.innerText="You already submitted!"
    // bkdetails.push({"bookName":bookname,"bookAuthor":author,"studentId":studentid,"studentName":studentname})
}else{
    submit()
    submitted=true
}
}else{
    if(bname[a]==bookname && bauthor[a]==author){      
        msg.classList.add("warningbk")
        msg.classList.remove("inv")
        msg.innerText="You already got this book"
    }else{
        submit()
        submitted=true
    }
}
}
}


//-------------------------------------------------return books---------------------------------------------//

if(location.pathname=="/return.html" || location.pathname=="/return.html#"){
   nav()
   if(sessionStorage.getItem("validate")!="success"){
     location.href="https://gowthaman9710.github.io/LIBRARY-MANAGEMENT-SYSTEM/login.html"
   }
   bookdbcreation()
   addquantity()
   reducequantity()
   let sid=document.getElementById("rsid")
   let sname=document.getElementById("rsname")
   let bkname=document.getElementById("rbkname")
   let bkauth=document.getElementById("rbkauth")
   let dateofsub=document.getElementById("rdateofsub")
   let bksubmit=document.getElementById("rbksubmit")
   let warning=document.getElementById("warnreturn")
   let stid,stname,bksname,bksauthor,submitdate
   sid.addEventListener("keyup",()=>{
    studentid(sid)
   })
   function studentid(e){
    stid=JSON.stringify(e.value)
   }
   sname.addEventListener("keyup",()=>{
    studentname(sname)
   })
   function studentname(e){
    stname=e.value
   }
   bkname.addEventListener("keyup",()=>{
    bookname(bkname)
   })
   function bookname(e){
    bksname=e.value
   }
   bkauth.addEventListener("keyup",()=>{
    bookauthor(bkauth)
   })
   function bookauthor(e){
    bksauthor=e.value
   }    
   dateofsub.addEventListener("keyup",()=>{
      subdate(dateofsub)
   })
   function subdate(e){
    submitdate=e.value
   }
   bksubmit.addEventListener("click",()=>{
    booksubmit()
   })
   function booksubmit(){
    let idcheck=false
    let stnamecheck=false
    let bknamecheck=false
    let authornamecheck=false
    let idx
    let backup
    for(let i=0;i<JSON.parse(localStorage.getItem("STRECORDS")).length;i++){
        console.log(JSON.parse(localStorage.getItem("STRECORDS"))[i].studentId,"==",stid)
        if(JSON.parse(localStorage.getItem("STRECORDS")).includes(JSON.stringify(stid))!=true){
            idcheck=true
         if(JSON.parse(localStorage.getItem("STRECORDS"))[i].studentName==stname){
            stnamecheck=true
         if(JSON.parse(localStorage.getItem("STRECORDS"))[i].bookName==bksname){
            bknamecheck=true
            console.log(JSON.parse(localStorage.getItem("STRECORDS"))[i].bookAuthor,"   ",bksauthor)/** asdfgf ;lkjhj asdfgf */
         if(JSON.parse(localStorage.getItem("STRECORDS"))[i].bookAuthor==bksauthor){
             authornamecheck=true
             idx=i
             break
             }else{
                if(JSON.parse(localStorage.getItem("STRECORDS")).includes(bksauthor)!=true){
                    authornamecheck=false
                    break
                }else{
                    authornamecheck=false /** asdfgf ;lkjhj */
                }
             }
           }else{
            if(JSON.parse(localStorage.getItem("STRECORDS")).includes(bksname)!=true){
            bknamecheck=false
            break
           }else{
            bknamecheck=false
           }
        }
         }else{
            stnamecheck=false
           }
       }else{
        idcheck=false
       }
     }
     if(idcheck==true){
        if(stnamecheck==true){
            if(bknamecheck==true){
                if(authornamecheck==true){
                    let strecord2={
                        "studentId":stid,
                        "studentName":stname,
                        "bookName":bksname,
                        "bookAuthor":bksauthor,
                        "dateOfSubmission":submitdate
                    }
                    // strecord.set("studentId",studentid)
                    // strecord.set("studentName",studentname)
                    // strecord.set("bookName",bookname)
                    // strecord.set("bookAuthor",author)
                    // strecord.set("dateOfSubmission",subdate)
                    console.log(strecord2)
                    let studentrecords
                    if(localStorage.getItem("RTRECORDS")!=null){
                    studentrecords=JSON.parse(localStorage.getItem("RTRECORDS"))
                    }else{
                        studentrecords=[]
                    }
                    studentrecords.push(strecord2)
                    localStorage.setItem("RTRECORDS",JSON.stringify(studentrecords))
                    backup=JSON.parse(localStorage.getItem("RTRECORDS"))
                    backup.splice(idx,1)
                    localStorage.setItem("RTRECORDS",JSON.stringify(backup))
                    warning.innerText=`THE LAB INCHARGE WILL COLLECT THE ${bksname} BOOK FROM YOU.`
                }else{
                    warning.innerText=`YOU BORROWED THE BOOK FROM DIFFERENT AUTHOR`
                }
            }else{
                warning.innerText=`YOU DID'NT BORROW THIS BOOK FROM US`
            }
        }else{
            warning.innerText=`YOU DID'NT BORROW THIS BOOK FROM US`
        }
     }else{
        warning.innerText=`YOU DID'NT BORROW THIS BOOK FROM US`
     }
   }

//ends

}
//inventory
if(location.pathname=="/inventory.html" || location.pathname=="/inventory.html#"){
let table=document.getElementById("tab")
for(let i=0;i<JSON.parse(localStorage.getItem("books")).length;i++){
    let rows=document.createElement("tr")
    rows.innerHTML=`<td>${JSON.parse(localStorage.getItem("books"))[i].name}</td><td>${JSON.parse(localStorage.getItem("books"))[i].author}</td><td>${JSON.parse(localStorage.getItem("books"))[i].quantity}</td>`
    table.append(rows)
}

}
