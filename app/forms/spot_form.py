from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired





class SpotForm(FlaskForm):
   title  = StringField('title', validators=[DataRequired()])
   description  = TextAreaField('description', validators=[DataRequired()])
   address =StringField('address', validators=[DataRequired()])
   
   city  = StringField('city', validators=[DataRequired()])
   state  = StringField('state', validators=[DataRequired()])
   country =StringField('country', validators=[DataRequired()])
   
   lat  = StringField('lat', validators=[DataRequired()])
   long  = StringField('long', validators=[DataRequired()])
   price =StringField('price', validators=[DataRequired()])
   
   owner_id=StringField('owner_id', validators=[DataRequired()])
   spot_image_url=StringField('spot_image_url', validators=[DataRequired()])
   spot_image_url1=StringField('spot_image_url1')
   spot_image_url2=StringField('spot_image_url2')
   spot_image_url3=StringField('spot_image_url3')

   
    