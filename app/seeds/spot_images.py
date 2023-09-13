from app.models import db, Spot_image, environment, SCHEMA

from sqlalchemy.sql import text 

def seed_spot_images():
    spot_image_url1=Spot_image(spot_id=1, spot_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684203061/pokerEventImages/Dmytro_real_estate_ea3dcef7-6358-4488-bcb3-e47362ec3c44_h9o6sx.png" )
    spot_image_url2=Spot_image(spot_id=2, spot_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684203061/pokerEventImages/Dmytro_real_estate_ea3dcef7-6358-4488-bcb3-e47362ec3c44_h9o6sx.png" )
    spot_image_url3=Spot_image(spot_id=3, spot_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684203061/pokerEventImages/Dmytro_real_estate_ea3dcef7-6358-4488-bcb3-e47362ec3c44_h9o6sx.png" )
    spot_image_url4=Spot_image(spot_id=4, spot_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684203061/pokerEventImages/Dmytro_real_estate_ea3dcef7-6358-4488-bcb3-e47362ec3c44_h9o6sx.png" )
   
    
    db.session.add_all([spot_image_url1, spot_image_url2, spot_image_url3, spot_image_url4])
    db.session.commit()

def undo_spot_images():
    if environment=="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.spot_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM spot_images")) 
    db.session.commit()
