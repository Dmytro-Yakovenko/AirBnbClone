from app.models import db, Review, environment, SCHEMA

from sqlalchemy.sql import text 

def seed_reviews():
    review1=Review(user_id=1, spot_id=1, review ="good spot", rating=5)
    review2=Review(user_id=2, spot_id=2, review ="good place", rating=4)
    review3=Review(user_id=3, spot_id=3, review ="amazing spot", rating=5)
    review4=Review(user_id=4, spot_id=4, review ="nice house", rating=4)
   
    
    db.session.add_all([review1, review2, review3, review4])
    db.session.commit()

def undo_reviews():
    if environment=="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews")) 
    db.session.commit()
