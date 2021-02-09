from flask import Flask, render_template, redirect
import os
from datetime import datetime


app = Flask(__name__)

path = "static/content/images/"


class image:
    def __init__(self, path, number, sequence):
        self.path = path
        self.number = number
        self.sequence = sequence


images = os.listdir(path)
img_list = []
img_number = 1
sequence = 0

for i in images:
    img_list.append(image(path + i, img_number, sequence))
    if img_number < 4:
        img_number += 1
    else:
        img_number = 1
        sequence += 1

images = img_list

year = datetime.now().year


@app.route('/')
def index():
    return render_template('index.html', images=images, year=year)


if __name__ == "__main__":
    app.run(debug=True)
