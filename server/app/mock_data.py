import time

product1 = "/static/images/product/img-1.png"
product2 = "/static/images/product/img-2.png"
product3 = "/static/images/product/img-3.png"
product4 = "/static/images/product/img-4.png"
product5 = "/static/images/product/img-5.png"
product6 = "/static/images/product/img-6.png"

events = [
    {
        "id": 1,
        "title": "Hey!",
        "start": int(time.time()) + 60 * 60 * 24,
        "className": "bg-warning text-white",
    },
    {
        "id": 2,
        "title": "See John Deo",
        "start": int(time.time()),
        "end": int(time.time()),
        "className": "bg-success text-white",
    },
    {
        "id": 3,
        "title": "Meet John Deo",
        "start": int(time.time()) + 60 * 60 * 24 * 8,
        "className": "bg-info text-white",
    },
    {
        "id": 4,
        "title": "Buy a Theme",
        "start": int(time.time()) + 60 * 60 * 24 * 7,
        "className": "bg-primary text-white",
    },
]

calendarDefaultCategories = [
    {
        "id": 1,
        "title": "New Theme Release",
        "type": "bg-success",
    },
    {
        "id": 2,
        "title": "My Event",
        "type": "bg-info",
    },
    {
        "id": 3,
        "title": "Meet Manager",
        "type": "bg-warning",
    },
    {
        "id": 4,
        "title": "Report Error",
        "type": "bg-danger",
    },
]

productsData = [
    {
        "id": 1,
        "image": product1,
        "name": "Full sleeve T-shirt",
        "extrades": "Blue color, T-shirt",
        "description": "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
        "date": "22/05/2017",
        "oldprice": 0,
        "newprice": 240,
        "islable": True,
        "lable": "Trending",
        "extraimgs": [product2, product3, product4],
        "shortspecifications": [
            "Full Sleeve",
            "Cotton",
            "All Sizes available",
            "4 Different Color",
        ],
        "category": "T-shirts",
        "reviews": 132,
        "shortservices": [
            {"icon": "mdi-sync", "value": "10 Days Replacement"},
            {"icon": "mdi-currency-usd-circle", "value": "Cash on Delivery available"},
        ],
        "colorOptions": [
            {"image": product2, "color": "Blue"},
            {"image": product3, "color": "Cyan"},
            {"image": product4, "color": "Green"},
        ],
        "specification": [
            {"type": "Category", "value": "T-shirt"},
            {"type": "Brand", "value": "Jack & Jones"},
            {"type": "Color", "value": "Blue"},
            {"type": "Material", "value": "Cotton"},
            {"type": "Weight", "value": "140 Gm"},
        ],
    },
    {
        "id": 2,
        "image": product2,
        "name": "Half sleeve T-shirt",
        "extrades": "Half sleeve, T-shirt",
        "description": "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
        "date": "22/05/2017",
        "oldprice": 240,
        "newprice": 225,
        "isOffer": True,
        "offer": 25,
        "extraimgs": [product1, product3, product4],
        "shortspecifications": [
            "Full Sleeve",
            "Cotton",
            "All Sizes available",
            "4 Different Color",
        ],
        "category": "T-shirts",
        "reviews": 132,
        "shortservices": [
            {"icon": "mdi-sync", "value": "10 Days Replacement"},
            {"icon": "mdi-currency-usd-circle", "value": "Cash on Delivery available"},
        ],
        "colorOptions": [
            {"image": product2, "color": "Blue"},
            {"image": product3, "color": "Cyan"},
            {"image": product4, "color": "Green"},
        ],
        "specification": [
            {"type": "Category", "value": "T-shirt"},
            {"type": "Brand", "value": "Jack & Jones"},
            {"type": "Color", "value": "Blue"},
            {"type": "Material", "value": "Cotton"},
            {"type": "Weight", "value": "140 Gm"},
        ],
    },
    {
        "id": 3,
        "image": product3,
        "name": "Hoodie (Green)",
        "extrades": "Green color, Hoodie",
        "description": "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
        "date": "22/05/2017",
        "oldprice": 290,
        "newprice": 275,
        "islike": True,
        "extraimgs": [product1, product2, product4],
        "shortspecifications": [
            "Full Sleeve",
            "Cotton",
            "All Sizes available",
            "4 Different Color",
        ],
        "category": "T-shirts",
        "reviews": 132,
        "shortservices": [
            {"icon": "mdi-sync", "value": "10 Days Replacement"},
            {"icon": "mdi-currency-usd-circle", "value": "Cash on Delivery available"},
        ],
        "colorOptions": [
            {"image": product2, "color": "Blue"},
            {"image": product3, "color": "Cyan"},
            {"image": product4, "color": "Green"},
        ],
        "specification": [
            {"type": "Category", "value": "T-shirt"},
            {"type": "Brand", "value": "Jack & Jones"},
            {"type": "Color", "value": "Blue"},
            {"type": "Material", "value": "Cotton"},
            {"type": "Weight", "value": "140 Gm"},
        ],
    },
    {
        "id": 4,
        "image": product4,
        "name": "Full sleeve T-shirt",
        "extrades": "Blue color, T-shirt",
        "description": "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
        "date": "22/05/2017",
        "oldprice": 290,
        "newprice": 275,
        "extraimgs": [product1, product2, product3],
        "shortspecifications": [
            "Full Sleeve",
            "Cotton",
            "All Sizes available",
            "4 Different Color",
        ],
        "category": "T-shirts",
        "reviews": 132,
        "shortservices": [
            {"icon": "mdi-sync", "value": "10 Days Replacement"},
            {"icon": "mdi-currency-usd-circle", "value": "Cash on Delivery available"},
        ],
        "colorOptions": [
            {"image": product2, "color": "Blue"},
            {"image": product3, "color": "Cyan"},
            {"image": product4, "color": "Green"},
        ],
        "specification": [
            {"type": "Category", "value": "T-shirt"},
            {"type": "Brand", "value": "Jack & Jones"},
            {"type": "Color", "value": "Blue"},
            {"type": "Material", "value": "Cotton"},
            {"type": "Weight", "value": "140 Gm"},
        ],
    },
    {
        "id": 5,
        "image": product5,
        "name": "Hoodie (Green)",
        "extrades": "Gray color, Hoodie",
        "description": "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
        "date": "22/05/2017",
        "oldprice": 290,
        "newprice": 275,
        "islike": True,
        "extraimgs": [product5, product2, product3],
        "shortspecifications": [
            "Full Sleeve",
            "Cotton",
            "All Sizes available",
            "4 Different Color",
        ],
        "category": "T-shirts",
        "reviews": 132,
        "shortservices": [
            {"icon": "mdi-sync", "value": "10 Days Replacement"},
            {"icon": "mdi-currency-usd-circle", "value": "Cash on Delivery available"},
        ],
        "colorOptions": [
            {"image": product2, "color": "Blue"},
            {"image": product3, "color": "Cyan"},
            {"image": product4, "color": "Green"},
        ],
        "specification": [
            {"type": "Category", "value": "T-shirt"},
            {"type": "Brand", "value": "Jack & Jones"},
            {"type": "Color", "value": "Blue"},
            {"type": "Material", "value": "Cotton"},
            {"type": "Weight", "value": "140 Gm"},
        ],
    },
    {
        "id": 7,
        "image": product6,
        "name": "Full sleeve T-shirt",
        "extrades": "Blue color, T-shirt",
        "description": "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
        "date": "22/05/2017",
        "oldprice": 242,
        "newprice": 0,
        "extraimgs": [product6, product4, product3],
        "shortspecifications": [
            "Full Sleeve",
            "Cotton",
            "All Sizes available",
            "4 Different Color",
        ],
        "category": "T-shirts",
        "reviews": 132,
        "shortservices": [
            {"icon": "mdi-sync", "value": "10 Days Replacement"},
            {"icon": "mdi-currency-usd-circle", "value": "Cash on Delivery available"},
        ],
        "colorOptions": [
            {"image": product2, "color": "Blue"},
            {"image": product3, "color": "Cyan"},
            {"image": product4, "color": "Green"},
        ],
        "specification": [
            {"type": "Category", "value": "T-shirt"},
            {"type": "Brand", "value": "Jack & Jones"},
            {"type": "Color", "value": "Blue"},
            {"type": "Material", "value": "Cotton"},
            {"type": "Weight", "value": "140 Gm"},
        ],
    },
    {
        "id": 1,
        "image": product1,
        "name": "Half sleeve T-shirt",
        "extrades": "Black color, T-shirt",
        "description": "Lorem ipsum dolor sit consec te imperdiet iaculis ipsum..",
        "date": "22/05/2017",
        "oldprice": 240,
        "newprice": 225,
        "extraimgs": [product2, product4, product3],
        "shortspecifications": [
            "Full Sleeve",
            "Cotton",
            "All Sizes available",
            "4 Different Color",
        ],
        "category": "T-shirts",
        "reviews": 132,
        "shortservices": [
            {"icon": "mdi-sync", "value": "10 Days Replacement"},
            {"icon": "mdi-currency-usd-circle", "value": "Cash on Delivery available"},
        ],
        "colorOptions": [
            {"image": product2, "color": "Blue"},
            {"image": product3, "color": "Cyan"},
            {"image": product4, "color": "Green"},
        ],
        "specification": [
            {"type": "Category", "value": "T-shirt"},
            {"type": "Brand", "value": "Jack & Jones"},
            {"type": "Color", "value": "Blue"},
            {"type": "Material", "value": "Cotton"},
            {"type": "Weight", "value": "140 Gm"},
        ],
    },
]

comments = [
    {
        "id": 1,
        "name": "James",
        "description": "To an English person, it will seem like simplified English, as a skeptical Cambridge",
        "date": "11 Feb, 2020",
    },
    {
        "id": 2,
        "name": "David",
        "description": "Everyone realizes why a new common language would be desirable",
        "date": "22 Jan, 2020",
    },
    {
        "id": 3,
        "name": "Scott",
        "description": "If several languages coalesce, the grammar of the resulting",
        "date": "04 Jan, 2020",
    },
]
