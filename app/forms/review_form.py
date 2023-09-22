from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired





class ReviewForm(FlaskForm):
   review  = StringField('review', validators=[DataRequired("review is required")])
   rating =StringField('rating', validators=[DataRequired("rating is required")])
   review_image =StringField('review_image', validators=[DataRequired()])
   
   
    