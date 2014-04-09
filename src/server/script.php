<?php

define("Servidor","localhost");
    define("User","root");
    define("Pass","");
    $conexion=mysql_connect(Servidor,User,Pass) or die ("Error, algo no ha ido bien");
    mysql_select_db("black",$conexion);


    $query="insert into coches values('astonmartin1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('astonmartin2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('astonmartin3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('astonmartin4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('astonmartin5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('astonmartin6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('astonmartin7',0)";
    mysql_query($query,$conexion);

	$query="insert into coches values('audi1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('audi2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('audi3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('audi4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('audi5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('audi6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('audi7',0)";
    mysql_query($query,$conexion);

    $query="insert into coches values('bugatti1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('bugatti2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('bugatti3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('bugatti4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('bugatti5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('bugatti6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('bugatti7',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('bugatti8',0)";
    mysql_query($query,$conexion);

    $query="insert into coches values('challenger1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('challenger2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('challenger3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('challenger4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('challenger5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('challenger6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('challenger7',0)";
    mysql_query($query,$conexion);

    $query="insert into coches values('delorean1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('delorean2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('delorean3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('delorean4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('delorean5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('delorean6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('delorean7',0)";
    mysql_query($query,$conexion);

    $query="insert into coches values('hummer1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('hummer2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('hummer3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('hummer4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('hummer5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('hummer6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('hummer7',0)";
    mysql_query($query,$conexion);

    $query="insert into coches values('jeep1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('jeep2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('jeep3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('jeep4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('jeep5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('jeep6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('jeep7',0)";
    mysql_query($query,$conexion);

    $query="insert into coches values('morgan1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('morgan2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('morgan3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('morgan4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('morgan5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('morgan6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('morgan7',0)";
    mysql_query($query,$conexion);

    $query="insert into coches values('mustang1',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('mustang2',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('mustang3',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('mustang4',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('mustang5',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('mustang6',0)";
    mysql_query($query,$conexion);
    $query="insert into coches values('mustang7',0)";
    mysql_query($query,$conexion);


    mysql_close($conexion);

?>
