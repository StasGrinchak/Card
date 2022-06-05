FROM python:3.9.6
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip install --upgrade pip

WORKDIR /app
COPY req.txt /app/
RUN pip install -r req.txt
COPY . /app/