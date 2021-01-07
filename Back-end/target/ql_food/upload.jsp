<%--
  Created by IntelliJ IDEA.
  User: hung2
  Date: 1/7/2021
  Time: 10:44 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Upload File</title>
</head>
<body>
<h1>Demo Upload file with Servlet</h1>
<form method="post" action="upload-file" enctype="multipart/form-data">
    <label>Select file to upload: </label>
    <input type="file" name="file" multiple="multiple"/><br/>
    <input type="submit" value="Upload By No25"/>
</form>
</body>
</html>

