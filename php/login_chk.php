<meta charset="utf-8">
<?php 

require_once('dbconfig.php');


$id = $_POST['id'];
$pss = $_POST['passwd'];

$sql = 'select * from member where u_id ="'.$id.'"';
$result = $db->query($sql);
$row = mysqli_fetch_assoc($result);


if($row['u_id'] != '') {
	
	$sql = 'select passwd from member where u_id = "'.$id.'" and passwd ="'.$pss.'"';
	$result = $db->query($sql);
	$row = mysqli_fetch_assoc($result);

	if($row['passwd'] != ''){
	
	$sql = 'select * from member where u_id ="'.$id.'"';
	$result = $db->query($sql);
	$row = mysqli_fetch_assoc($result);

		session_start();	
		$_SESSION['user_id'] = $id;
 		?>
		<script type="text/javascript">
			alert("로그인 되었습니다");
		</script>
		<meta http-equiv='refresh' content='0;url=../index.html'>
		<?php

		return;
	}else {
		?>
		<script type="text/javascript">
			alert("아이디나 비밀번호가 맞지 않습니다.");
			history.back();
		</script>
		<?php
		
	}
		return;

}else {
	?>
		<script type="text/javascript">
			alert("아이디나 비밀번호가 맞지 않습니다.");
			history.back();
		</script>

	<?php

}
?>
