from flask import ( Blueprint, flash, g, redirect, render_template, request, url_for);
from werkzeug.exceptions import abort;
import json;
import os;


bp = Blueprint('game', __name__)

@bp.route('/game')
def index():
    return render_template('game.html')