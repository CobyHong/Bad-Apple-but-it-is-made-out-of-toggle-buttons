# Bad Apple but it is actually a bunch of toggle buttons

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/jS6CQruJdfQ/0.jpg)](https://www.youtube.com/watch?v=jS6CQruJdfQ)

## Introduction

Hi my name is Coby Hong (Cal Poly Liberal Arts of Engineering Major).

I made this out of boredom.
If you have any inquiries or wanna contact me on other stuff / jobs, contact me!

Contacts:
LinkedIn: https://www.linkedin.com/in/coby-hong-a61445160/ <br />
Email: CobyHong98@gmail.com <br />



## Current Issues:

-video currently plays some frames faster than others. This means that the framerate of the show is not consistent leading to trailing off from the audio. Currently, trying to implement frameAnimationTimeOuts to get consistent 60 FPS. If you got suggestions / fixes, let me know!



## Installation / Running:

### Step 1:

-Download the repository. <br />
-cd into the file directory. <br /> 
-do "python -m http.server" in terminal. <br /> <br/>

#### Installing packages: <br />
do ```pip install Pillow" in terminal```. <br />
do ```pip install fpstimer" in terminal```. <br />
do ```pip install playsound" in terminal```. <br />
do ```pip install opencv-python" in terminal```. <br />

###  Step 2: <br />

-create a folder called ```video frames``` in the same directory. <br />
-do ```python video_to_frames.py``` in terminal. <br />

NOTE: this script will take a while as it is generating frames / images to store from the Bad Apple video. Check your ```video frames``` folder to see if you got a bunch of images. If you do that is good! <br />

###  Step 3:

-do ```python frames_to_text.py``` in terminal. <br />

NOTE: this script will take a while as it is converting frames into a giant dictionary of two-value-only strings for later use. This will create the json file. <br />

###  Step 4:

-do: ```http://localhost:8000/index.html``` in browser (or whatever local host you are running on) and enjoy the show! <br />

