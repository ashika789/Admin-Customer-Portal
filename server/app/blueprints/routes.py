from app.mock_data import *
from flask import Blueprint, jsonify, request

ecommerce_apis = Blueprint("ecommerce_apis", __name__)

# ----------------------------------------------------------------
# Events
# ----------------------------------------------------------------


@ecommerce_apis.route("/events", methods=["GET"])
def get_events():
    if events:
        return jsonify(events)
    else:
        return "Cannot get events", 400


@ecommerce_apis.route("/add/event", methods=["POST"])
def add_event():
    event = request.get_json()
    if event is not None and "data" in event:
        return jsonify(event["data"])
    else:
        return "Cannot add event", 400


@ecommerce_apis.route("/update/event", methods=["PUT"])
def update_event():
    event = request.get_json()
    if event is not None and "data" in event:
        return jsonify(event["data"])
    else:
        return "Cannot update event", 400


@ecommerce_apis.route("/delete/event", methods=["DELETE"])
def delete_event():
    event = request.get_json()
    if event is not None and "data" in event:
        return jsonify(event["data"])
    else:
        return "Cannot delete event", 400


# ----------------------------------------------------------------
# Categories
# ----------------------------------------------------------------


@ecommerce_apis.route("/categories", methods=["GET"])
def get_categories():
    if calendarDefaultCategories:
        return jsonify(calendarDefaultCategories)
    else:
        return "Cannot get categories", 400


# ----------------------------------------------------------------
# Products
# ----------------------------------------------------------------


@ecommerce_apis.route("/products", methods=["GET"])
def get_products():
    if productsData:
        return jsonify(productsData)
    else:
        return "Cannot get products", 400


@ecommerce_apis.route("/product/{product_id}", methods=["GET"])
def get_product(product_id):
    if productsData:
        product = [x for x in productsData if x["id"] == int(product_id)][0]
        result = {**product, "comments": comments}
        return jsonify(result)
    else:
        return "Cannot get product detail", 400


@ecommerce_apis.route("/orders", methods=["GET"])
def get_product(product_id):
    if productsData:
        product = [x for x in productsData if x["id"] == int(product_id)][0]
        result = {**product, "comments": comments}
        return jsonify(result)
    else:
        return "Cannot get product detail", 400
