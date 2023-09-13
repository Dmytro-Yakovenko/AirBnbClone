from datetime import datetime
from .db import SCHEMA, db, environment, add_prefix_for_prod


class Review_image(db.Model):
    __tablename__="review_images"
    if environment == "production":
        __table_args__={'schema':SCHEMA}
    
    id=db.Column(db.Integer, primary_key=True)
    review_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')), nullable=False)
    user_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    review_image_url=db.Column(db.String, nullable=False, default ="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684125685/pokerEventImages/jerbotron_italian_vacation_photo._scenery._vibrant._e8ad0c09-154f-4e4d-9638-aaab059f5e13_ngdfee.webp")
    created_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow )
    updated_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow, onupdate=datetime.utcnow)

    reviews=db.relationship("Review", back_populates="review_images")
    user=db.relationship("User", back_populates="review_images")
 
    def to_dict(self):
        return {
            "id":self.id,
            'review_id':self.review_id,
            "review_image_url":self.review_image_url,
            "created_at":self.created_at,
            "updated_at":self.updated_at,
        }

        