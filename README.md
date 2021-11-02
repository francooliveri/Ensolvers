# Ensolvers
To-do list excercise

Used in the project:
MySQL 8.0.27 (user: root / password: rootadmin1234)
Apache Tomcat 8.5.72
Java 8
Spring boot 2.5.6
Node.js 16.13

USE THE FOLLOWING COMMANDS:
mysql -u root -p < script.sql
java -jar ToDoApp/target/ToDoApp-1.0.0-SNAPSHOT.jar
cd .\client\
npm start


Endpoints:

ToDo tasks:
GET: http://localhost:8080/to-do/
GET: http://localhost:8080/to-do/{id}
POST: http://localhost:8080/to-do/{folder_id}
PUT: http://localhost:8080/to-do/{id}
DELETE: http://localhost:8080/to-do/{id}
DELETE: http://localhost:8080/to-do/clear/{folder-id}

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

Conclusions:
I've learned that react it's a component-based library, focused in having small-reusable components.
Each of these components is rendered separately, having their own lifecycle.
In react there is not specific datatypes declarations, and the arguments of functions usually are other
functions that returns a value.
Use of hooks to alter the state of the component.

PS: Some of the functionalities require reloading the page (for example cleaning checked tasks)