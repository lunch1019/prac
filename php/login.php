<?php 
require_once('dbconfig.php');
session_start();
if(isset($_SESSION['user_id'])){
	echo "<meta http-equiv='refresh' content='0;url=../index.html'>";
	exit;
}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>login page</title>

	<style type="text/css">
		.title{
			vertical-align: center;
		}
		.login{
			vertical-align: center;
			box-sizing: border-box;
			position: relative;

		}
		#signin{
			position: absolute;
			padding: 0;
			float: center;
			bottom: 0;
			width: 50px;
			height: 50px;
			text-align: center;
			background: black;
			color: white;
			border: 1px solid gray;
			cursor: pointer;
		}
		.int{
			box-sizing: border-box;
			margin: 0;
			height: 25px;


		}
		.help{
			padding: 0;
			margin: 10px;
			left: 20px;
			align-content: center;
			font-size: 12px;
			color: gray;
			position: relative;

		}
		a{
			text-decoration: none; 
			color: gray;
		}
	</style>

</head>
<body>
<h2 class="title" align="center">로그인</h2>
<nav>
<div class="login" align="center">
	<form method="post" action="login_chk.php">
		<input class="int" type="text" name="id" placeholder="아이디"><br>
		<input class="int" type="password" name="passwd" placeholder="비밀번호">
		<input id="signin" type="submit" name="signin" value="Sign in">
	</form>	

</div>


</nav>

</body>
</html>