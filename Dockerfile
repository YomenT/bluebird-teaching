FROM nikolaik/python-nodejs:latest
RUN apt update
RUN apt install -y software-properties-common
WORKDIR /home/app
ADD . /home/app
RUN pip install django
RUN pip install djangorestframework
RUN pip install Pillow
RUN pip install gunicorn
RUN apt install -y libpq-dev python3-dev
RUN pip3 install psycopg2
RUN pip3 install django-heroku
RUN pip3 install whitenoise
WORKDIR /home/app/reactapp
RUN npm install
RUN npm audit fix 
RUN npm run build
WORKDIR /home/app
RUN python manage.py collectstatic
RUN python manage.py migrate
RUN python manage.py makemigrations
CMD ["gunicorn", "djreact.wsgi"]
