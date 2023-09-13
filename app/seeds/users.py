from app.models import db, User, environment, SCHEMA

from sqlalchemy.sql import text 

def seed_users():
    demo=User(first_name="Demo", last_name="Lition", username ="demol", password="password", email="demo@aa.io",user_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1691812110/776229ef8d0028f88330a492116ab40b_zelqge.jpg" )
    dmytro=User(first_name="Dmytro", last_name="Yakovenko", username ="dmytroy", password="password", email="dmytro@aa.io",user_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1675927089/pokerEventImages/2023-01-17_21.30.42_xu2x2i.jpg" )
    nadezhda=User(first_name="Nadezhda", last_name="Epina", username ="nadezhdae", password="password", email="nadezhda@aa.io",user_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1676008985/pokerEventImages/photo_2023-02-09_22.02.46_zxg2qp.jpg" )
    david=User(first_name="David", last_name="Dolan", username ="davidd", password="password", email="david@aa.io",user_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1673016570/samples/people/kitchen-bar.jpg" )
    roman=User(first_name="Roman", last_name="Alexandrenko", username ="romana", password="password", email="roman@aa.io",user_image_url="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1689863102/pexels-jeffrey-reed-769732_nuosab.jpg" )
    
    db.session.add_all([demo, dmytro, nadezhda, david, roman])
    db.session.commit()

def undo_users():
    if environment=="production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users")) 
    db.session.commit()

    