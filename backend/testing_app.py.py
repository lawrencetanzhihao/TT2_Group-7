from flask import Flask, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import sqlite3

app = Flask (__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.sqlite3'
db = SQLAlchemy(app)

connection = sqlite3.connect(":memory:")


cursor = connection.cursor()

sql_file = open("project_expenses.sql")
sql_as_string = sql_file.read()
cursor.executescript(sql_as_string)



# students = students.query.all()

#Creating the main/home page
@app.route("/")
def home():
    return "This is main page"

#This is for login page:
#Username and password authentication will be done here
#If pass = proceed to show all project expenses from database (/view) 
# if no expeneses added, "display no expenses" 
#If fail = Stay at login page
@app.route("/login/")  
def login():
    return "This is for login page"

@app.route("/add/")
def add():

    return "This is the adding page"

#Display all existing expenses
@app.route("/view/")  
def view():
    for row in cursor.execute("SELECT * FROM category"):
        print(type(row))
    return "Print out the values for category"


if __name__ == "__main__":
    app.run(debug=True)