<?php
$short_code = $_GET['code'];

$urls = file('urls.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$found = false;

foreach ($urls as $url) {
    list($code, $long_url) = explode('|', $url);
    if ($code == $short_code) {
        $found = true;
        header("Location: $long_url");
        exit;
    }
}

if (!$found) {
    echo "URL not found!";
}
?>
