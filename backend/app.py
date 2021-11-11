from flask import Flask, redirect, url_for

app = Flask(__name__)

dict = {}
dict2 = {}

fake_loginData = {'userName':'dbslogin',
                'password' : 'dbspassword'}

fake_db = {1: 'Production',
        2: 'Operation',
        3: 'Financial',
        4: 'Vendor',
        5: 'Manpower',
        6: 'Software',
        7: 'Hardware'}



#Creating the main/home page
@app.route("/")
def home():
    return "Hello, this is the main page"

#This is for login page:
#Username and password authentication will be done here
#If pass = proceed to show all project expenses from database (/view) 
# if no expeneses added, "display no expenses" 
#If fail = Stay at login page
@app.route("/login/")  
def login(user, password):
    return "This is for login page"

#Display all existing expenses
@app.route("/view/")  
def view():
    return "This is for viewing"


if __name__ == "__main__":
    app.run(debug=True)