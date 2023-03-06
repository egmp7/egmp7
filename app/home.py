from flask import ( Blueprint, flash, g, redirect, render_template, request, url_for);
from werkzeug.exceptions import abort;
import json;
import os;


bp = Blueprint('home', __name__)

@bp.route('/')
def index():
    
    return getJson()

""" Get jason file from static folder """
def getJson():

    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    f = open(os.path.join( SITE_ROOT , "static/data.json" ))
    return json.load(f)