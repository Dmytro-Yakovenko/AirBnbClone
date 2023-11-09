from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired





class ProfileForm(FlaskForm):
    first_name  = StringField('first_name', validators=[DataRequired("first name is required")])
    last_name  = StringField('last_name', validators=[DataRequired("last name is required")])
    username  = StringField('username', validators=[DataRequired("username is required")])
    email  = StringField('email', validators=[DataRequired("email is required")])
    user_image_url  = StringField('user_image_url', validators=[DataRequired("user image url is required")])
    