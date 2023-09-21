from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired





class SpotForm(FlaskForm):
   title  = StringField('title', validators=DataRequired())
   description  = TextAreaField('description', validators=DataRequired())
   address =StringField('address', validators=DataRequired())
   
   city  = StringField('city', validators=DataRequired())
   state  = StringField('state', validators=DataRequired())
   country =StringField('country', validators=DataRequired())
   
   lat  = StringField('lat', validators=DataRequired())
   long  = StringField('long', validators=DataRequired())
   price =StringField('price', validators=DataRequired())
   
    