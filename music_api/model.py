from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import declarative_base
from db import engine



Base = declarative_base()


class Data(Base):
    __tablename__ = "folk_music"
    
    
    id = Column(Integer, primary_key=True)
    
    
    
class Names(Base):
    __tablename__ = "names"

    first = Column(String, primary_key=True)
    last = Column(String)


class Usernames(Base):
    __tablename__ = "usernames"

    id = Column(String, primary_key=True)
    # name = Column(String)

class Passwords(Base):
    __tablename__ = "passwords"

    passwords = Column(Integer, primary_key=True)
    
class Playlists(Base):
    __tablename__ = "playlists"
    
    id = Column(Integer, primary_key=True)
    artists = Column(String)
    songs = Column(String)
    albums = Column(String)
    genres = Column(String)
    
class Token(Base):
      __tablename__ = "token"
      
      access_token =Column(String, primary_key=True)
      token_type = Column(String)

class User(Base):
      __tablename__ = "user"
      username = Column(String, primary_key=True)   
   
    

        
    
Base.metadata.create_all(engine)