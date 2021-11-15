from app.config import mongo_uri
from flask import Flask
from flask_cors import CORS

from app.blueprints.service_info.routes import service_info_bp

def create_app():
    app = Flask(__name__, static_folder="build", static_url_path="")
    CORS(app)
    app.config["MAX_CONTENT_LENGTH"] = 20 * 1024 * 1024
    app.config["MONGO_URI"] = mongo_uri

    from app.database import DB
    DB.init_app(app)

    from app.blueprints.service_info.background_tasks import scheduler
    scheduler.api_enabled = False
    scheduler.init_app(app)
    scheduler.start()

    v1_api_prefix = "/api/v1"
    app.register_blueprint(sgx_apis_bp, url_prefix=f"{v1_api_prefix}/sgx")

    # All other routes should return the static React files.
    # Browser will perform client-side routing.
    @app.route('/', defaults={'path': ''})
    @app.route("/sgx/<path:path>")
    @app.route("/sevsnpvm/<path:path>")
    @app.route("/<string:path>")
    @app.route("/<path:path>")
    def index(path):
        return app.send_static_file("index.html")

    return app