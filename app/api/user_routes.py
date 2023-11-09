from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import db, User, Booking
from app.forms import BookingForm, ProfileForm
from app.api.auth_routes import validation_errors_to_error_messages
from datetime import datetime

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:user_id>', methods=["PUT"])
@login_required
def userUpdate(user_id):
    
    """
    updates user
    
    """
    user = User.query.get(user_id)
    
    if not user:
        return {'errors': f"User {user_id} does not exist"}, 404
    form = ProfileForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(user)
        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400




@user_routes.route('/<int:user_id>', methods=["DELETE"])
@login_required
def userDelete(user_id):
    """
    deletes user
    
    """
    user = User.query.get(user_id)
    if not user:
        return {'errors': f"User {user_id} does not exist"}, 404
    db.session.delete(user)
    db.session.commit()
    return {'message': 'Delete successful.'}
    


@user_routes.route('/<int:user_id>/bookings')
@login_required
def get_bookings(user_id):
    """
    Query for a booking   by user_id and returns that bookings in a dictionary
    """
    user = User.query.get(user_id)
    if not user:
        return {'errors': f"User {user_id} does not exist"}, 404
    
    bookings = Booking.query.filter(Booking.user_id == user.id).all()
    

    return bookings.to_dict()
        

@user_routes.route("/<int:user_id>/bookings", methods=["POST"]) 
@login_required  
def create_booking(user_id):
    user = User.query.get(user_id)
    if not user:
        return {'errors': f"User {user_id} does not exist"}, 404
    """
    Creates a new booking
    """
    form = BookingForm()
   
    
    """
    Query for a booking  by id and returns that booking in a dictionary
    """
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
       
        booking = Booking(
            check_in=datetime.strptime(form.data['check_in'],'%Y-%m-%d'),
            check_out=datetime.strptime(form.data['check_out'],'%Y-%m-%d'),
            user_id =user_id,
            spot_id = form.data['spot_id']
        )
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict(), 201
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400




@user_routes.route('/<int:user_id>/bookings/<int:booking_id>', methods=["PUT"])
@login_required
def update_booking(user_id, booking_id):
    """
    Updates a booking
    """
    user = User.query.get(user_id)
    if not user:
        return {'errors': f"User {user_id} does not exist"}, 404
    
    booking = Booking.query.get(booking_id)
    
    if not booking:
        return {'errors': f"Booking {id} does not exist."}, 404

    if user_id != booking.user_id:
        return {'errors':f"User is not the creator of spot {id}."}, 401
    form = BookingForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        form.populate_obj(booking)
        db.session.commit()
        return booking.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

   
    
    
   
@user_routes.route('/<int:user_id>/bookings/<int:booking_id>', methods=["DELETE"])
@login_required
def delete_spot(user_id, booking_id):
    """
    Deletes a booking
    """
    user = User.query.get(user_id)
    if not user:
        return {'errors': f"User {user_id} does not exist"}, 404
    booking = Booking.query.get(booking_id)
    # checks if booking exists
    if not booking:
        return {'errors': f"Booking {booking_id} does not exist."}, 400
    # checks if current user is a creator of the booking
    if booking.user_id != user.id:
        return {'errors': f"User is not the creator of booking {booking_id}."}, 401
    db.session.delete(booking)
    db.session.commit()
    return {'message': 'Delete successful.'}
