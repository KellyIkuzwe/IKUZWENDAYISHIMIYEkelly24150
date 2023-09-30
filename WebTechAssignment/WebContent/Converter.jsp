<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Work</title>
    <link rel="stylesheet" href="./converterstyle.css" />
    <script defer src="logout.js"></script>
  </head>
  <body>
      <div class="content">
        
        <form action="convert" method="post" id="conversionForm">
			<div class="form-group">
			<h2>       CONVERTER     </h2>
				<label for="base">Enter Base 10 number</label>
				<input id="base" type="number" name="baseten" value="${baseten}" />
			</div>
			<div>
				<input type="button" value="Binary" onclick="setConversionType('binary')" />
				<input type="button" value="Hexa" onclick="setConversionType('hexa')" />
				<input type="button" value="Octal" onclick="setConversionType('octal')" />
			</div>
			<input type="hidden" name="conversionType" id="conversionType" value="">
		</form>
		
		<div>
			<h2>Result:</h2>
			<h3>Number: ${baseten}</h3>
			<h4>Result: ${result}</h4>
		</div>
      </div> 
    
    <script>
		function setConversionType (type) {
			document.getElementById("conversionType").value = type;
			document.getElementById("conversionForm").submit();
		}
	</script>
  </body>
</html>
