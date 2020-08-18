<?php

// echo "<pre>";
// print_r($_SERVER);
// echo "</pre>";

$secret_key = 'eyJpZCI6IjEyMyJ9.Oz8zfL6V1xLWOIhA5Ui6IJoBOVP90VH8jJyc';
$routes = [];
$routes = [];
$route    = str_replace('/backend', '', $_SERVER['PATH_INFO']);
$method     = $_SERVER['REQUEST_METHOD'];