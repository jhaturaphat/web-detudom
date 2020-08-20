<?php
$sql = "SELECT * FROM work_date ORDER BY FIELD(id, 'MON','THE','WED','THU','FRI','SAT','SUN')";
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

echo json_encode($result);