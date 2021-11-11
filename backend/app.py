from flask import Flask, redirect, url_for, flash

app = Flask(__name__)

dict = {}
dict2 = {}

userData = {'userName':'dbslogin',
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
    if user not in userData['username']:
        flash("User not found!")
        return redirect(url_for("login"))

    else:
        if password != userData['password']:
            flash("Password incorrect!")
            return redirect(url_for("login"))

    return redirect(url_for("profile"))

#Display all existing expenses
@app.route("/profile")  
def view():
    return "This is for viewing"

#User want to insert a new expense
@app.route('/add')
def add():
    return "User adds a new expense"

#User want to update an existing expense
@app.route('/update')
def update():
    return "User updates an existing expense"
    
#User want to remove an existing expense
@app.route('/delete')
def delete():
    return "User removes an existing expense"

if __name__ == "__main__":
    app.run(debug=True)