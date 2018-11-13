FROM python:3.7-alpine
ADD . /usr/app
WORKDIR /usr/app
RUN pip install -e '.[dev]'
RUN pip install -e '.[tests]'
