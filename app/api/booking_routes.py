from flask import Blueprint, jsonify, session, request
from app.models import db, Booking
from app.forms import BookingForm
from flask_login import current_user,login_required
from app.api.auth_routes import validation_errors_to_error_messages


booking_routes = Blueprint("bookings", __name__)


@booking_routes.route("/")
def get_all_bookings():
    bookings=Booking.query.all()
    booking_list=[]
    for booking in bookings:
        spot_dict = booking.to_dict()
        booking_list.append(spot_dict)
    return jsonify({"bookings":booking_list})




        




