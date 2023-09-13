from flask import Blueprint, jsonify, session, request
from app.models import db, Spot
# from app.forms import SpotForm
from flask_login import current_user,login_required
from app.api.auth_routes import validation_errors_to_error_messages


spot_routes = Blueprint("spots", __name__)


@spot_routes.route("/")
def get_all_spots():
    spots=Spot.query.all()
    spot_list=[]
    for spot in spots:
        spot_dict = spot.to_dict()
        spot_list.append(spot_dict)
    return jsonify({"spots":spot_list})


@spot_routes.route('/<int:id>')
def get_spot(id):
    """
    Query for a spot  by id and returns that spot in a dictionary
    """
    spot = Spot.query.get(id)
    # checks if board exists
    if not spot:
        return {'errors': f"Spot {id} does not exist."}, 404
    return spot.to_dict()
        
        
@spot_routes.route("/", method=["POST"])   
def create_spot():
    """
    Creates a new spot
    """
    form = SpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    """
    Query for a spot  by id and returns that spot in a dictionary
    """
  
    if form.validate_on_submit():
        spot = Spot(
            title=form.data['title'],
            description= "2 bedroom 2 bath",
            address=form.data['address'],
            city =form.data['city'],
            state=form.data['state'],
            country=form.data['country'],
            lat=form.data['lat'],
            long=form.data['long'],
            price=form.data['price'],
            owner_id=form.data['owner_id']
        )
        db.session.add(spot)
        db.session.commit()
        return spot.to_dict(), 201
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
        




