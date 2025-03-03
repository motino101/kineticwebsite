import os
import hashlib
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pyrebase

app = FastAPI()

# Enable CORS if your frontend is hosted on a different domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production (e.g., ["https://yourdomain.com"])
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

config = {
    "apiKey": "AIzaSyD6kU40BfqVjLrM8jlFNkjp-NdZuhBp2ZM",
    "authDomain": "kinetic-tool.firebaseapp.com",
    "projectId": "kinetic-tool",
    "storageBucket": "kinetic-tool.firebasestorage.app",  # Double-check this value
    "messagingSenderId": "772795621592",
    "appId": "1:772795621592:web:e374ab97d4433b4f1177ad",
    "measurementId": "G-43MVHME8C1"
}

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

# Function to compute SHA-256 hash of a file
def compute_file_hash(file):
    hasher = hashlib.sha256()
    # Read in chunks to avoid loading the entire file into memory
    while chunk := file.read(4096):
        hasher.update(chunk)
    file.seek(0)  # Reset file pointer after reading
    return hasher.hexdigest()

# Function to check if a file with this hash already exists in Firebase Storage
def check_existing_file(file_hash):
    try:
        file_path = f"videos/{file_hash}.mp4"
        url = storage.child(file_path).get_url(None)
        return url  # If file exists, return its URL
    except Exception:
        return None  # File does not exist

# Function to upload a video to Firebase Storage
def upload_video_to_firebase(video, file_hash):
    file_path = f"videos/{file_hash}.mp4"
    storage.child(file_path).put(video.file.read())  # Read the file content
    return storage.child(file_path).get_url(None)

# FastAPI endpoint for video upload
@app.post("/upload")
async def upload_videos(videos: List[UploadFile] = File(...)):
    results = []
    for video in videos:
        try:
            file_hash = compute_file_hash(video.file)

            # Check if the video already exists in Firebase Storage
            existing_url = check_existing_file(file_hash)
            if existing_url:
                results.append({"success": True, "message": "Video already exists", "video_url": existing_url})
                continue

            # Upload new video and return its URL
            video_url = upload_video_to_firebase(video, file_hash)
            results.append({"success": True, "video_url": video_url})
        except pyrebase.pyrebase.StorageException as e:
            results.append({"success": False, "error": f"Storage error: {str(e)}"})
        except Exception as e:
            results.append({"success": False, "error": str(e)})

    return results