from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired


class SpotImagesForm(FlaskForm):

   spot_image_url=StringField('spot_image_url')
  