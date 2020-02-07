<!DOCTYPE=HTML lang='es'>
<html>
<header>
<meta charset="UTF-8">
<title>Prueba Tecnica datacrm</title>
<meta http-equiv="cache-control" content="no-cache" />
<link rel="apple-touch-icon-precomposed" href="https://res.cloudinary.com/postman/image/upload/v1571165262/team/kjhjqh5cqrluruz3jtwa.ico">
<link rel="shortcut icon" href="https://res.cloudinary.com/postman/image/upload/v1571165262/team/kjhjqh5cqrluruz3jtwa.ico" />
<link rel="shortcut icon" href="https://api.datacrm.la/favicon.ico" />
<link rel="stylesheet" href="./public/style.css"/>
<link rel="stylesheet" href="./public/bootstrap/dist/css/bootstrap.min.css"/>
<script src="./public/jquery.js"></script>
<script src="./public/jQueryMD5/jquery.md5.js"></script>
<script src="./public/core.js"></script>
<!--<script  src="./public/fontawesome/js/all.js"></script>-->
<script src="./public/bootstrap/dist/js/bootstrap.min.js"></script>
</header>
<body>
<div id="progressLoader" class="proccessLoader col-lg-12 col-md-12 col-sm-12 col-xs-12"><img class="preloader" src="./public/preloader.gif"></img></div>
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<h1>Prueba Tecnica</h1>
<div class="areaPrueba col-lg-12col-md-12 col-sm-12 col-xs-12">
<div id="step1" class="step-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
<div class="cabecera3"><h3>Step 1</h3></div>
<a  class="tonext" id="to2" href="#"> >> </a>
<br>
<div id="getResult" class="getChallenge"></div>
<br>
<center><button class="btn btn-outline-primary" id="btnGetChallenge">Get Challenge</button></center>
</div>


<div id="step2" class="step-2 col-lg-12 col-md-12 col-sm-12 col-xs-12">
<br><br>
<div class="cabecera3"><h3>Step 2</h3></div>
<a id="t2" href="#"> << </a><a class="tonext" id="to3" href="#"> >> </a>
<div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
<label>Opetarion</label>
<input id="operation" name="operation" type="text" value="login" class="form-control"></input>
</div>
<div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
<label>Username</label>
<input id="username" name="username" type="text" value="prueba" class="form-control"></input>
</div>
<div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
<label>accessKey</label>
<input id="accessKey" name="accessKey" type="text" value="" class="form-control"></input>
</div>
<div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
<center><button class="btn btn-outline-primary" id="btnLogin">Login</button></center>
</div>
</div>
<div id="step3" class="step-3 col-lg-12 col-md-12 col-sm-12 col-xs-12">
<label>sessionName</label>
<input type="text" id="sessionName" name="sessionName" value="" class="form-control"></input>
<div class="cabecera3"><h3>Step 3</h3></div>
<a id="t3" href="#"> << </a>
<br>
<center>
<button class="btn btn-outline-primary" id="btnGetContacts">Get Contacts</button>
</center>
<br><br>
<table id="tableContacts" class="table table-responsive-xs">
<tr><td>Id</td><td>Contact_No</td><td>LastName</td><td>CreatedTime</td></tr>
<tbody id="tbodyContacts"></tbody>
</table>
</div>
</div>
</body>
<script src="./public/bootstrap/dist/js/bootstrap.min.js"></script>
</html>
