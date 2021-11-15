"""
Gunicorn searches for the "app" callable in a file called "app.py".
Since we use a custom module and function to generate the callable,
we have to export the callable in a startup file.
More info here: https://docs.microsoft.com/en-us/azure/developer/python/tutorial-deploy-app-service-on-linux-04#flask-startup-commands
"""
from app import create_app
app = create_app()