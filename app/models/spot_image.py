from datetime import datetime
from .db import SCHEMA, db, environment,add_prefix_for_prod


class Spot_image(db.Model):
    __tablename__="spot_images"
    if environment == "production":
        __table_args__={'schema':SCHEMA}
    
    id=db.Column(db.Integer, primary_key=True)
    spot_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('spots.id')), nullable=False)
    spot_image_url =db.Column(db.String, nullable=False, default ="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684203061/pokerEventImages/Dmytro_real_estate_ea3dcef7-6358-4488-bcb3-e47362ec3c44_h9o6sx.png")
    created_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow )
    updated_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow, onupdate=datetime.utcnow)

   
    spots = db.relationship("Spot", back_populates="spot_images")
    
    def to_dict(self):
        return {
            "id":self.id,
            'spot_id':self.spot_id,
            "spot_image_url":self.spot_image_url,
            "created_at":self.created_at,
            "updated_at":self.updated_at,
        }