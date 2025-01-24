        function check() 
        {
            let usname = document.getElementById("uname").value;
            let pswd = document.getElementById("pswd").value;
            let mail = document.getElementById("mail").value;

            if (usname == "")
             {
                document.getElementById("errorname").innerHTML = "Please Enter UserName !";
                document.getElementById("errorname").style.color = "red";
                document.getElementById("uname").style.borderColor = "red"

            }
            else
            {
                document.getElementById("errorname").innerHTML = "";
                document.getElementById("uname").style.borderColor = "green"
            }
            if (pswd == "")
             {
                document.getElementById("errorpswd").innerHTML = "Please Enter Password !";
                document.getElementById("errorpswd").style.color = "red";
                document.getElementById("pswd").style.borderColor = "red"

            }
            else
            {
                document.getElementById("errorpswd").innerHTML = "";
                document.getElementById("pswd").style.borderColor = "green"
            }


            if(mail == "")
            {
                document.getElementById("errormail").innerHTML = "Please Enter Valid Mail id !";
               
            }
            else
            {
                document.getElementById("errormail").innerHTML = "";
                document.getElementById("mail").style.borderColor = "green"
            }
            if(!mail.includes('@'))
            {
                document.getElementById("errormail").innerHTML = "incorrect email"
                document.getElementById("errormail").style.color = "red";
                document.getElementById("mail").style.borderColor = "red"   ;
            }
            else
            {
                document.getElementById("errormailmail").innerHTML = ""

            }
         
        }
 