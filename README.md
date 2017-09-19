Django Angular Boilerplate
==========================
Definition for the structure recommendation for integrating Django with Angular for.

Dependencies
------------

    pip install django
    pip install djangorestframework
    pip install markdown
    pip install django-filter
    pip install djangorestframework-jwt
    pip install django-cors-headers
    
Angular Dependencies
--------------------

    NodeJS
    
Usage
-----

    npm install # In frontend directory
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
    ng serve
    
Remarks
-------
1. The generated build file from angular is stored in dist folder. Points of interest would involve running a custom gulp task to move the files to /static/ and /templates/ folders as defined by Django.
2. When you run `ng build`, the generated file does not have the `{% load static %}`, you need to define this and load the paths for scripts as `src="{% static 'main.bundle.js' %}"` to enable Django defining the paths correctly. 
