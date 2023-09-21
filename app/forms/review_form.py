from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired





class ReviewForm(FlaskForm):
   review  = StringField('review', validators=DataRequired())
   rating =StringField('rating', validators=DataRequired())
   review_image =StringField('review_image', validators=DataRequired())
   
   
    