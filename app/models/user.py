
from datetime import datetime
from .db import SCHEMA, db, environment, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
class User(db.Model, UserMixin):
    __tablename__="users"
    if environment == "production":
        __table_args__={'schema':SCHEMA}
    
    id=db.Column(db.Integer, primary_key=True)
    first_name=db.Column(db.String(255), nullable=False)
    last_name=db.Column(db.String(255), nullable=False)
    username=db.Column(db.String(255), nullable=False, unique =True)
    hashed_password=db.Column(db.String(255), nullable=False)
    email=db.Column(db.String(255), nullable=False,unique =True )
    user_image_url=db.Column(db.String(255), nullable=False, default ="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1691812110/776229ef8d0028f88330a492116ab40b_zelqge.jpg" )
    created_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow )
    updated_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow, onupdate=datetime.utcnow)
    
   
    
    bookings = db.relationship("Booking", back_populates="user")
    reviews = db.relationship("Review", back_populates = "user")
    review_images = db.relationship("Review_image", back_populates = "user")
    spots = db.relationship("Spot", back_populates = "user")
    
    
    
    
    @property 
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password=generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash (self.password, password)   

    def to_dict(self):
        return {
            "id":self.id,
            "first_name":self.first_name,
            "last_name":self.last_name,
            "username":self.username,
            "email":self.email,
            "user_image_url":self.user_image_url,
            "created_at":self.created_at,
            "updated_at":self.updated_at,
        }

        