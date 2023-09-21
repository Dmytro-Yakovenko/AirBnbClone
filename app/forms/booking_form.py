from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired





class BookingForm(FlaskForm):
   check_in  = StringField('check_in', validators=DataRequired())
   check_out = StringField('check_out', validators=DataRequired())
  