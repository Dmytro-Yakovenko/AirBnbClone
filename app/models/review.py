from datetime import datetime
from .db import SCHEMA, db, environment,  add_prefix_for_prod


class Review(db.Model):
    __tablename__="reviews"
    if environment == "production":
        __table_args__={'schema':SCHEMA}
    
    id=db.Column(db.Integer, primary_key=True)
   
    user_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    spot_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("spots.id")), nullable=False)
    review=db.Column(db.String, nullable=False)
    rating=db.Column(db.Integer, nullable=False)
    
    
    created_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow )
    updated_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow, onupdate=datetime.utcnow)

    user = db.relationship("User", back_populates="reviews")
    spot = db.relationship("Spot", back_populates = "reviews")
    review_images=db.relationship("Review_image", back_populates="reviews")
    def to_dict(self):
        return {
            "id":self.id,
            'user_id':self.user_id,
            'spot_id':self.spot_id,
            'review':self.review,
            'rating':self.rating,
            'user':self.user.to_dict,
            'spot':self.spot.to_dict,
            "review_image":[review_image.to_dict() for review_image in self.review_images],
            "created_at":self.created_at,
            "updated_at":self.updated_at,
        }