from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import session
from model import Data
from model import Names, Usernames, Passwords, Playlists





app= FastAPI()

origins = [
    "http://localhost"
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials= True,
    allow_methods=['*'],
    allow_headers=["*"]
)

@app.get('/')
def home():
    return{"yoooo sup?"}

@app.get('/data')
def get_data():
    data = session.query(Data)
    return data.all()


@app.get('/names')
def get_names():
    names = session.query(Names)
    return names.all()

@app.get('/usernames')
def get_usernames():
    usernames = session.query(Usernames)
    return usernames.all()

@app.get('/playlist')
def get_playlist():
    playlist = session.query(playlist)
    

@app.post('/create/names')
async def create_name(first:str, last:str ):
    name = Names(first=first, last=last)
    session.add(name)
    session.commit()
    return{"first": name.first, "last":name.last}

@app.post('/create/username')
async def create_username(username:str):
    username = Usernames(id=username)
    session.add(username)
    session.commit()
    return{"made username": username.id}

@app.post('/create/playlist')
async def create_playlist(id:int, artists:str, song:str, album:str, genre:str):
    playlist = Playlists(playlist=id)
    session.add(playlist)
    session.commit()
    return{"made playlist": playlist.id, "artist": artists.artist, "songs": song.songs}
    
    
