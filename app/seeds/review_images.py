from app.models import db, Review_image, environment, SCHEMA

from sqlalchemy.sql import text 

def seed_review_images():
    review_image_url1=Review_image(review_id=1,user_id=4, review_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684125685/pokerEventImages/jerbotron_italian_vacation_photo._scenery._vibrant._e8ad0c09-154f-4e4d-9638-aaab059f5e13_ngdfee.webp" )
    review_image_url2=Review_image(review_id=2,user_id=3, review_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684125685/pokerEventImages/jerbotron_italian_vacation_photo._scenery._vibrant._e8ad0c09-154f-4e4d-9638-aaab059f5e13_ngdfee.webp" )
    review_image_url3=Review_image(review_id=3,user_id=2,review_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684125685/pokerEventImages/jerbotron_italian_vacation_photo._scenery._vibrant._e8ad0c09-154f-4e4d-9638-aaab059f5e13_ngdfee.webp" )
    review_image_url4=Review_image(review_id=4,user_id=1, review_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684125685/pokerEventImages/jerbotron_italian_vacation_photo._scenery._vibrant._e8ad0c09-154f-4e4d-9638-aaab059f5e13_ngdfee.webp" )
   
    
    db.session.add_all([review_image_url1, review_image_url2, review_image_url3, review_image_url4])
    db.session.commit()

def undo_review_images():
    if environment=="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.review_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM review_images")) 
    db.session.commit()
