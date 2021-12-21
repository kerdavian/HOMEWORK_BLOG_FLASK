from python_cms.db import BaseModel, db


class CategoryModel(BaseModel):
  __tablename__ = "category"
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.String(80), nullable=False)

  posts = db.relationship('PostModel', back_populates='category')

  def __init__(self, name):
    self.name = name

  @classmethod
  def get(cls, id):
    return cls.query.filter_by(id=id).first()

  @classmethod
  def get_all(cls):
    return cls.query.all()

  def save(self):
    db.session.add(self)
    db.session.commit()