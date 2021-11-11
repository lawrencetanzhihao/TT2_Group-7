from flask import Flask, redirect, url_for

app = Flask(__name__)


#Creating the main/home page
@app.route("/")
def home():
    return "Hello, this is the main page"


if __name__ == "__main__":
    app.run(debug=True)