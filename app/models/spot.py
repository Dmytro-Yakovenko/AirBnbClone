from datetime import datetime
from .db import SCHEMA, db, environment, add_prefix_for_prod


class Spot(db.Model):
    __tablename__="spots"
    if environment == "production":
        __table_args__={'schema':SCHEMA}
    
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String(255), nullable=False)
    description=db.Column(db.String(255), nullable=False)
    address=db.Column(db.String(255), nullable=False)
    city=db.Column(db.String(255), nullable=False)
    state=db.Column(db.String(255), nullable=False)
    country =db.Column(db.String(255), nullable=False)
    lat=db.Column(db.Float, nullable=False)
    long=db.Column(db.Float, nullable=False)
    price=db.Column(db.Float, nullable=False)
    owner_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    created_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow )
    updated_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow, onupdate=datetime.utcnow)

    # user = db.relationship("User", secondary=add_prefix_for_prod('booking'), back_populates="spot")
    bookings = db.relationship("Booking", back_populates="spot")
    reviews = db.relationship("Review", back_populates="spot")
    
    spot_images = db.relationship("Spot_image", back_populates="spots")
    user = db.relationship("User", back_populates="spots")

    def to_dict(self):
        return {
            "id":self.id,
            'title':self.title,
            'description':self.description,
            'address':self.address,
            'city':self.city,
            'state':self.state,
            'country':self.country,
            'lat':self.lat,
            'long':self.long,
            'price':self.price,
            'owner_id':self.owner_id,
            "spot_image":[spot_image.to_dict() for spot_image in self.spot_images],
            "created_at":self.created_at,
            "updated_at":self.updated_at,
        }

        