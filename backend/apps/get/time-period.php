<?php
$sql = "SELECT * FROM time_period ORDER BY FIELD(prefix,'morning','afternoon')";
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

echo json_encode($result);