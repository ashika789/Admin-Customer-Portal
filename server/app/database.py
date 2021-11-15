from flask_pymongo import PyMongo

class DB(object):

    @staticmethod
    def init_app(app):
        DB.client = PyMongo(app).db
    
    @staticmethod
    def replace_one(collection, key, data, should_upsert):
        DB.client[collection].replace_one(key, data, should_upsert)

    @staticmethod
    def find_one(collection, key):
        return DB.client[collection].find_one(key)