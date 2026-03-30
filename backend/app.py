from flask import Flask,request,jsonify
from flask_cors import CORS
from products import get_products

app = Flask(__name__)
CORS(app)

users = []

@app.route("/search")
def search():
    q = request.args.get("q")
    return jsonify(get_products(q))


# REGISTER
@app.route("/register",methods=["POST"])
def register():
    data = request.json
    users.append(data)
    return jsonify({"message":"Registered Successfully"})


# LOGIN
@app.route("/login",methods=["POST"])
def login():
    data = request.json

    for u in users:
        if u["username"]==data["username"] and u["password"]==data["password"]:
            return jsonify({"message":"Login Success"})

    return jsonify({"message":"Invalid Login"})


if __name__=="__main__":
    app.run(debug=True)