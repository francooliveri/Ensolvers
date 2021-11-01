# Ensolvers
To-do list excercise

Used in the project:
MySQL 8.0.27 (user: root / password: rootadmin1234)
Apache Tomcat 8.5.72
Java 8
Spring boot 2.5.6

USE THE FOLLOWING COMMANDS:
mysql -u root -p < script.sql
java -jar ToDoApp/target/ToDoApp-1.0.0-SNAPSHOT.jar

Endpoints:

ToDo tasks:
GET: http://localhost:8080/to-do/
GET: http://localhost:8080/to-do/{id}
POST: http://localhost:8080/to-do/{folder_id}
PUT: http://localhost:8080/to-do/{id}
DELETE: http://localhost:8080/to-do/{id}

JSON:
{
        "id": 4,
        "description": "Example",
        "checked": false
}

Folders:

GET: http://localhost:8080/folders/
GET: http://localhost:8080/folders/{id}
POST: http://localhost:8080/folders/
PUT: http://localhost:8080/folders/{id}
DELETE: http://localhost:8080/folders/{id}

JSON:
{
        "name": "Folder"
}
