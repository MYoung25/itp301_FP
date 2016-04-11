<?php
$target_dir = "../uploads/";
$traget_file = $target_dir . basename($_FILES["ImageToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

if(isset($_POST["submit"]})) {
	$check = getimagesize($_FILES["ImageToUpload"][tmp_name]);
	if($check !== false){
		echo "File is an image - " . $check["mime"] . ".";
		$uploadOk = 1;
	} else {
		echo "file is not an image";
		$uploadOk = 0;
	}
}

if ($_FILES["ImageToUpload"]["size"] > 2500000) {
	echo "Sorry, your file is too large.";
	$uploadOk = 0;
}

if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
	echo "Sorry, only JPG, JPEG, PNG, and GIF are allowed.";
	$uploadOk = 0;
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

?>