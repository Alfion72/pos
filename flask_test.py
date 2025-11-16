from flask import Flask, render_template, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/api/product")
def product_api():
    code = request.args.get("code")
    if not code:
        return jsonify({"error": "Falta el parámetro code"}), 400

    try:
        connection = mysql.connector.connect(
            host="127.0.0.1",
            user="pos",
            password="123456789",
            database="pos"
        )
        cursor = connection.cursor(dictionary=True)

        cursor.execute("""
            SELECT code_product, name_product, price_product, exists_product
            FROM products
            WHERE code_product = %s
        """, (code,))
        
        product = cursor.fetchone()
        cursor.close()
        connection.close()

        if not product:
            return jsonify({"error": "Producto no encontrado"}), 404

        return jsonify(product)

    except mysql.connector.Error as err:
        return jsonify({"error": str(err)}), 500


if __name__ == "__main__":
    app.run(debug=True)
