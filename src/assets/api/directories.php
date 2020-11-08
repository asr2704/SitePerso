<?php

echo $_GET . "<br />";
echo getcwd() . "<br />";
$directories = glob(dirname() . '/../*', GLOB_ONLYDIR);

$dirCount = count($directories);
echo $dirCount . "<br />";

$i = 0;
while ($i < $dirCount)
{
    echo $i . "  " . $directories[$i] . "<br />";
    $i++;
}

?>
