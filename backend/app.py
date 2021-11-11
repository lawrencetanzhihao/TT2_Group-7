from datetime import timedelta
from flask import Flask, redirect, url_for, render_template, request, session, flash
from flask_sqlalchemy import SQLAlchemy

#Tutorial 6: SQLchemy Database
#Saving user's email in the session
#Write and store data using python code

app = Flask(__name__)
app.secret_key = "hello"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
#to remove warnings sometimes
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
#setting session duration to 5 mins
app.permanent_session_lifetime = timedelta(minutes=5)

db = SQLAlchemy(app)

# Model
#define class
class users(db.Model):
    #Each object has a (id, id type, key to make it unique)
    #Integer object
    _id = db.Column("id", db.Integer, primary_key=True)
    #string (user)
    name = db.Column("Name", db.String(100))
    #string (email)
    email = db.Column("Email", db.String(100))

    def __init__(self, name, email):
        self.name = name
        self.email = email
# db.create_all()
# db.session.commit()

#Creating the main/home page
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/view")
def view():
    return "Hello world"
    # return render_template("view.html", values = users.query.all())

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        session.permanent = True
        #Setting "nm" as dictionary key
        #Getting data that was typed into input box for "nm" 
        user = request.form["nm"]
        #creates a session based on user
        #stores infomation into session
        session["user"] = user

        #Check if user in database or not
        #If not, save it in database
        found_user = users.query.filter_by(name=user).first()
        # found_user = users.query.filter_by(name=user).delete()
        # db.session.commit()
        if found_user:
            session["email"] = found_user.email

        else:
            usr = users(user, "")
            db.session.add(usr)
            db.session.commit()

        flash("Login Succesful!")
        return redirect(url_for("user"))
    else:
        if "user" in session:
            flash("Already logged in")
            return redirect(url_for("user"))
        return render_template("login.html")

@app.route("/unregister", methods=["POST", "GET"])
def unregister():
    if request.method == "POST":

        user = request.form["nm"]
        all_name = users.query.all()
        print(type(all_name))
        print(users.query.filter_by(name=user))
        # session["user"]1 = user
        exists = db.session.query(users.name).filter_by(name=user).first() is not None
        print(exists)


        if exists:
            users.query.filter_by(name=user).delete()
            db.session.commit()
            flash("Unregistered!")
        else:
            flash("User does not exist")
            return redirect(url_for("unregister"))
    # return redirect(url_for("view"))
    return render_template("unregister.html")





@app.route("/user", methods=["POST", "GET"])
def user():
    email = None
    #check if got infomation in the session
    #to prevent access to this page by just typing "url/user"
    if "user" in session:
        user = session["user"]

        if request.method == "POST":
            email = request.form["email"]
            session["email"] = email
            found_user = users.query.filter_by(name=user).first()
            found_user.email = email
            db.session.commit()
            flash("Email saved")
        else: 
            if "email" in session:
                email = session["email"]
        return render_template("user.html", email=email)
    else:
        #if no user in the session/ no infomation in session
        #should redirect back to login page
        flash("Not logged in, nice try scammer!")
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    if "user" in session:
        user = session["user"]
        flash(f"You have been logged out, {user}", "info")
    session.pop("user", None)
    session.pop("email", None) 
    return redirect(url_for("login"))

if __name__ == "__main__":
    # To create the database (must put before app.run)
    db.create_all()
    app.run(debug=True)