from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired





class ReviewForm(FlaskForm):
   review  = StringField('review', validators=[DataRequired("review is required")])
   rating =StringField('rating', validators=[DataRequired("rating is required")])
   review_images =StringField('review_images')
   user_id = StringField("user_id", validators=[DataRequired()])
   review_images1=StringField('review_images1')
   review_images2=StringField('review_images2')
   review_images3=StringField('review_images3')
    