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
    # Check username input and comapare with database
    
    if user not in userData['username']:
        flash("User not found!")
        return redirect(url_for("login"))

    #  Check passord input and comapre with database
    else:
        if password != userData['password']:
            flash("Password incorrect!")
            return redirect(url_for("login"))

    return redirect(url_for("profile"))

#Display all existing expenses
#in Profile, user can add/edit/delete expenses as well
@app.route("/profile")  
def profile():
    # Database will map "userName" to the input userName
    # All expenses added by this user will be displayed here
    return "This is for viewing"

#User want to insert a new expense
@app.route('/add')
def add():
    # 2 input from user
    # 1) Description
    # 2) Amount 
    return "User adds a new expense"

#User want to update an existing expense
@app.route('/update')
def update():
    #  Selected expense will be replaced with new description/value
    return "User updates an existing expense"
    
#User want to remove an existing expense
@app.route('/delete')
def delete():
    # Selected expense will be removed from database
    return "User removes an existing expense"

if __name__ == "__main__":
    app.run(debug=True)