# Student-registration-form

<!DOCTYPE html>
<html lang="en">
<-- Hello-->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form>
        <div>
            NAME : <input type="text">
        </div>
        <br>
        <div>
            Father's name : <input type="text">
        </div>
        <br>
        <div>
            Mother's name : <input type="text">
        </div>
        <br>
        <div>
            Phone no: <input type="text">
        </div>
        <br>
        <div>
            E-mail id : <input type="email">
        </div> 
        
        <br> 
     <div>
        GENDER : MALE <input type="radio"name="my gender">
        FEMALE <input type="radio"name="my gender">
        TRANSGENDER <input type="radio"name="my gender">
     </div>

      <br>

    <div>
        DATE OF BIRTH:<input type="date">
    </div>
     <br>

     <div>
        ADDRESS:<input type="text">
     </div>

     <div>
        <br>
        BLOOD GROUP
        <select name="drop-down">
            <option value="A">A</option>
            <option value="A+">A+</option>
            <option value="B">B+</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>
     </div>
         <br>
     <div>
       DEPARTMENT : CSE <input type="radio">
        IT <input type="radio">
        ECE <input type="radio">
     </div>
        <br>
     <div>
       COURSE : JAVA:<input type="checkbox">
        PYTHON:<input type="checkbox">
        C++:<input type="checkbox">
        C:<input type="checkbox">
        N\A:<input type="checkbox">
     </div>
          <br>
     
     <div>
        photo:<input type="file">
     </div>
        <br>
    
      <div>
        <input type="submit"value="submit">
        <input type="reset"value="reset">
      </div>
          <!-- <input type="add"value="add"> -->
    </form>

    <script src="script.js"></script>

</body>
</html>
