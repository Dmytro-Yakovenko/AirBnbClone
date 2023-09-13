from app.models import db, Booking, environment, SCHEMA

from sqlalchemy.sql import text 

def seed_bookings():
    booking1=Booking(user_id=1, spot_id=1)
    booking2=Booking(user_id=2, spot_id=2)
    booking3=Booking(user_id=3, spot_id=3)
    booking4=Booking(user_id=4, spot_id=4)
   
    
    db.session.add_all([booking1, booking2, booking3, booking4])
    db.session.commit()

def undo_bookings():
    if environment=="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.bookings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM bookings")) 
    db.session.commit()
