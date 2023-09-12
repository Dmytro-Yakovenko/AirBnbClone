from datetime import datetime
from .db import SCHEMA, db, environment,  add_prefix_for_prod

class Booking(db.Model):
    __tablename__ = "bookings"
    if environment == "production":
        __table_args__={'schema':SCHEMA}
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
    check_in = db.Column(db.DateTime, default = datetime.utcnow, nullable=False)
    check_out = db.Column(db.DateTime, default = datetime.utcnow, nullable=False)

    # Define the relationships
    user = db.relationship("User", back_populates="bookings")
    spot = db.relationship("Spot", back_populates="bookings")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "spot_id": self.spot_id,
            "check_in": self.check_in,
            "check_out": self.check_out,
        }
# class Booking(db.Model):
#     __tablename__="bookings"
#     if environment == "production":
#         __table_args__={'schema':SCHEMA}
    
#     id=db.Column(db.Integer, primary_key=True)
   
#     user_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
#     spot_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("spots.id")), nullable=False)
#     check_in=db.Column(db.DateTime,default = datetime.utcnow, nullable=False)
#     check_out=db.Column(db.DateTime, default = datetime.utcnow, nullable=False)
    
#     created_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow )
#     updated_at=db.Column(db.DateTime, nullable=False, default = datetime.utcnow, onupdate=datetime.utcnow)
 
    # user = db.relationship("User", back_populates="bookings")
    # spot = db.relationship("Spot", back_populates="bookings")
  

 
 
 
    def to_dict(self):
        return {
            # "id":self.id,
            # 'user_id':self.user_id,
            # 'spot_id':self.spot_id,
            'check_in':self.check_in,
            'check_out':self.check_out,
            # 'user':self.user.to_dict(),
            # 'spot':self.spot.to_dict(),
           
            "created_at":self.created_at,
            "updated_at":self.updated_at,
        }