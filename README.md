Make sure you got installed environment to work - visual studio, flask, node js and git.

Create one directory or separate directories for back-end and front-end as I did.

Additionally I needed to install in the right directory flask_cors to handle with cors.

Python comes bundled with the venv module to create virtual environments, for that create an environment( py -3 -m venv .venv) and activate the environement before to run the backend(.venv\Scripts\activate).

While listening from web to backend make sure both the Flask server (by default on port 5000 if it is not busy) and the React app (by default on port 3000 if it is not busy) are running. 
