from app.models import db, Spot, environment, SCHEMA

from sqlalchemy.sql import text 

def seed_spots():
    spot1=Spot(title="villa", description="villa 3bedrooms 2 bath", address ="355 London street", city="San Francisco", state="California",country="USA", lat=53.1234567, long = 100.2338492, price =100, owner_id=1)
    spot2=Spot(title="villa", description="villa 3bedrooms 2 bath", address ="355 London street", city="San Francisco", state="California",country="USA", lat=53.1234567, long = 100.2338492, price =100, owner_id=1)
    spot3=Spot(title="villa", description="villa 3bedrooms 2 bath", address ="355 London street", city="San Francisco", state="California",country="USA", lat=53.1234567, long = 100.2338492, price =100, owner_id=1)
    spot4=Spot(title="villa", description="villa 3bedrooms 2 bath", address ="355 London street", city="San Francisco", state="California",country="USA", lat=53.1234567, long = 100.2338492, price =100, owner_id=1)
   
    
    db.session.add_all([spot1, spot2, spot3, spot4])
    db.session.commit()

def undo_spots():
    if environment=="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.spots RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM spots")) 
    db.session.commit()

    