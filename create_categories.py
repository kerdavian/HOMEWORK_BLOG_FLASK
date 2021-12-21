from python_cms.models.category import CategoryModel
from python_cms import app
from python_cms.db import db

db.init_app(app)

with app.app_context():
  for category_name in ['Sports', 'Travel', 'Music', 'Food']:
    category = CategoryModel(category_name)
    category.save()