<?php

require_once __DIR__ . '/vendor/autoload.php';

$theme = $_POST['theme'];
$eamil = $_POST['eamil'];
$phone = $_POST['phone'];
$birth = $_POST['birth'];


$fname = $_POST['fname'];
$lname = $_POST['lname'];
$mname = $_POST['mname'];
$bname = $_POST['bname'];
$bbirth = $_POST['bbirth'];
$cname = $_POST['cname'];


$Given = $_POST['Given'];
$Surname = $_POST['Surname'];
$Profession = $_POST['Profession'];
$Place = $_POST['Place'];
$Datec = $_POST['Datec'];


$Tall = $_POST['Tall'];
$kcolor = $_POST['kcolor'];
$ceyes = $_POST['ceyes'];
$ndba = $_POST['ndba'];
$setyt = $_POST['setyt'];
$namemother = $_POST['namemother'];
$contry = $_POST['contry'];
$oldps = $_POST['oldps'];
$oldnumber = $_POST['oldnumber'];


$baderss = $_POST['baderss'];
$caderss = $_POST['caderss'];
$eaderss = $_POST['eaderss'];
$faderss = $_POST['faderss'];
$raderss = $_POST['raderss'];
$naderss = $_POST['naderss'];


$borname = $_POST['borname'];
$bor1 = $_POST['bor1'];
$broaderss = $_POST['broaderss'];
$nubro = $_POST['nubro'];
$fathname = $_POST['fathname'];
$fath1 = $_POST['fath1'];
$fathadress = $_POST['fathadress'];
$fathnu = $_POST['fathnu'];



$mpdf = new \Mpdf\Mpdf();
$mpdf->autoScriptToLang =true;
$mpdf->autoLangToFont =true;

$stylesheet = file_get_contents('25.css');
$mpdf->WriteHTML($stylesheet,\Mpdf\HTMLParserMode::HEADER_CSS);

$data = '';
$data .= '    <div class="img">'  . '</div>';

$data .= '    <div class="esamjobah1">' .$theme .  '</div>';
$data .= '    <div class="esamjobah2">' .$phone. '</div>';
$data .= '    <div class="esamjobah3">' .$eamil. '</div>';
$data .= '    <div class="esamjobah4" >' .$birth. '</div>';


$data .= '    <div class="esamjobah5" dir="RtL">' .$fname . '</div>';
$data .= '    <div class="esamjobah6" dir="RtL">' .$lname . '</div>';
$data .= '    <div class="esamjobah7" dir="RtL">' .$mname . '</div>';
$data .= '    <div class="esamjobah8" dir="RtL">' .$bname . '</div>';
$data .= '    <div class="esamjobah9" dir="RtL">' .$bbirth . '</div>';
$data .= '    <div class="esamjobah11" dir="RtL">' .$cname . '</div>';


$data .= '    <div class="esamjobah111">' .$Surname . '</div>';
$data .= '    <div class="esamjobah12">' .$Given . '</div>';
$data .= '    <div class="esamjobah13">' .$Profession . '</div>';
$data .= '    <div class="esamjobah14">' .$Place . '</div>';
$data .= '    <div class="esamjobah15">' .$Datec . '</div>';


$data .= '    <div class="esamjobah16" dir="RtL">' .$Tall . '</div>';
$data .= '    <div class="esamjobah17" dir="RtL">' .$kcolor . '</div>';
$data .= '    <div class="esamjobah18" dir="RtL">' .$ceyes . '</div>';
//$data .= '    <div class="esamjobah19" dir="RtL">' .$ndba . '</div>';
$data .= '    <div class="esamjobah20" dir="RtL">' .$setyt . '</div>';
$data .= '    <div class="esamjobah21" dir="RtL">' .$namemother . '</div>';
$data .= '    <div class="esamjobah22" dir="RtL">' .$contry . '</div>';
$data .= '    <div class="esamjobah23" dir="RtL">' .$oldps . '</div>';
$data .= '    <div class="esamjobah24" dir="RtL">' .$oldnumber . '</div>';


$data .= '    <div class="esamjobah25" dir="RtL">' .$baderss . '</div>';
$data .= '    <div class="esamjobah26" dir="RtL">' .$caderss . '</div>';
$data .= '    <div class="esamjobah27" dir="RtL">' .$eaderss . '</div>';
$data .= '    <div class="esamjobah28" dir="RtL">' .$faderss . '</div>';
$data .= '    <div class="esamjobah29" dir="RtL">' .$raderss . '</div>';
$data .= '    <div class="esamjobah30" dir="LTR">' .$naderss . '</div>';


$data .= '    <div class="esamjobah31" dir="RtL">' .$borname . '</div>';
$data .= '    <div class="esamjobah32" dir="RtL">' .$bor1 . '</div>';
$data .= '    <div class="esamjobah33" dir="RtL">' .$broaderss . '</div>';
$data .= '    <div class="esamjobah34" dir="LtR">' .$nubro . '</div>';
$data .= '    <div class="esamjobah35" dir="RtL">' .$fathname . '</div>';
$data .= '    <div class="esamjobah36" dir="RtL">' .$fath1 . '</div>';
$data .= '    <div class="esamjobah37" dir="RtL">' .$fathadress . '</div>';
$data .= '    <div class="esamjobah38" dir="LTR">' .$fathnu . '</div>';


$mpdf->WriteHTML($data);
$mpdf->Output('esam.pdf' , 'i');