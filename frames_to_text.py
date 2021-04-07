# pip install Pillow
import PIL.Image
# pip install fpstimer
import fpstimer
# pip install playsound
from playsound import playsound
import time
from threading import Thread
import csv
import json
import os


def textCapture():
	cwd = os.getcwd() + "/video frames"
	count = 0

	dictionary = {}
	for file in os.listdir(cwd):
		image = PIL.Image.open(cwd + "/%d.jpg" % count)
		new_image_data = pixels_to_ascii(image)
		dictionary[count] = new_image_data
		count += 1

	with open("bad_apple.json", "w") as outfile:
		json.dump(dictionary, outfile)
	# test(dictionary)


def pixels_to_ascii(image):
	pixels = image.getdata()
	image_str = ""
	for pixel in pixels:
		#check if pixel is white.
		if pixel[0] < 200 and pixel[1] < 200 and pixel[2] < 200:
			image_str += 'O'
		else:
			image_str += '-'
	return image_str


def test(dictionary):
	Thread(target = startMusic).start()
	Thread(target = terminalRun(dictionary)).start()
	quit()


def terminalRun(dictionary):
	timer = fpstimer.FPSTimer(60)
	Frame_Counter = 0

	for frame in dictionary.keys():
		Pixel_Counter = 0

		count = 0
		str = ""
		for pixel in dictionary[frame]:
			if count == 40:
				count = 0
				str += '\n'
			str += pixel
			count += 1
			Pixel_Counter += 1
		Frame_Counter += 1
		print(str)

		print()
		print("Current Frame: %d" % Frame_Counter)
		print("Total Pixels of Current Frame: %d" % Pixel_Counter)
		print()

		timer.sleep()


def startMusic():
	time.sleep(0.01666)
	playsound("Bad Apple.mp3")


if __name__ == '__main__': 
	textCapture()