from flask import Blueprint, jsonify, session, request
from app.models import db, Spot, Review
from app.forms import SpotForm, ReviewForm
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
    # checks if spot exists
    if not spot:
        return {'errors': f"Spot {id} does not exist."}, 404
    return spot.to_dict()
        
        
@spot_routes.route("/", methods=["POST"])   
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




@spot_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_spot(id):
    """
    Updates a spot
    """
    spot = Spot.query.get(id)
    # checks if spot exists
    if not spot:
        return {'errors': f"Spot {id} does not exist."}, 404
    # checks if current user is a creator of the spot
    if spot.user_id != current_user.id:
        return {'errors': f"User is not the creator of spot {id}."}, 401
    form = SpotForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(spot)
        db.session.commit()
        return spot.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@spot_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_spot(id):
    """
    Deletes a spot
    """
    spot = Spot.query.get(id)
    # checks if spot exists
    if not spot:
        return {'errors': f"Spot {id} does not exist."}, 400
    # checks if current user is a creator of the spot
    if spot.user_id != current_user.id:
        return {'errors': f"User is not the creator of spot {id}."}, 401
    db.session.delete(spot)
    db.session.commit()
    return {'message': 'Delete successful.'}


        



@spot_routes.route("/<int:id>/reviews", methods=["POST"]) 
@login_required  
def create_review():
    """
    Creates a new review
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    """
    Query for a review  by id and returns that review in a dictionary
    """
  
    if form.validate_on_submit():
        review = Review(
           
            review=form.data['review'],
            rating=form.data['rating'],
         
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict(), 201
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400




@spot_routes.route('/<int:spot_id>/reviews/<int:review_id>', methods=["PUT"])
@login_required
def update_review(spot_id, review_id):
    """
    Updates a review
    """
      # checks if spot exists
    spot = Spot.query.get(spot_id)
    if not spot:
        return {'errors': f"Spot {spot_id} does not exist."}, 404
    
    review = Review.query.get(review_id)
    if not review:
        return {'errors': f"Review {review_id} does not exist."}, 400
    
    # checks if current user is a creator of the spot
    if review.user_id != current_user.id:
        return {'errors': f"User is not the creator of review {review_id}."}, 401
    form = ReviewForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@spot_routes.route('/<int:spot_id>/reviews/<int:review_id>', methods=["DELETE"])
@login_required
def delete_review(spot_id, review_id):
    """
    Deletes a spot
    """
    spot = Spot.query.get(spot_id)
    # checks if spot exists
    if not spot:
        return {'errors': f"Spot {spot_id} does not exist."}, 400
    
    review = Review.query.get(review_id)
    # checks if current user is a creator of the review
    if not review:
        return {'errors': f"Review {review_id} does not exist."}, 400
    
    if review.user_id != current_user.id:
        return {'errors': f"User is not the creator of review {review_id}."}, 401
    db.session.delete(spot)
    db.session.commit()
    return {'message': 'Delete successful.'}

