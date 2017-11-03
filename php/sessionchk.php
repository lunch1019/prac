<?php 
session_start();

if(!isset($_SESSION['user_id'])){
	?>
	<script type="text/javascript">
		alert("접근 권한이 없습니다");
		location.href = "./php/login.php";
	</script>
	<?php
}
?>