<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $long_url = $_POST['long_url'];
    $short_code = substr(md5(uniqid(rand(), true)), 0, 6);
    $url_data = "$short_code|$long_url\n";

    file_put_contents('urls.txt', $url_data, FILE_APPEND);

    $short_url = "http://yourdomain.com/redirect.php?code=$short_code";
    header("Location: index.php?short_url=$short_url");
}
?>
