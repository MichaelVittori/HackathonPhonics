# Running this file will start the server on port 5000

from flask import Flask

app = Flask(__name__)

# Navigate to localhost:5000/home to access
@app.route("/home")
def home():
    return "hello!"


if __name__ == "__main__":
    app.run(debug=True)
