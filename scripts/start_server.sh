#!/bin/bash

# Create app directory if it doesn't exist
mkdir -p /home/ec2-user/app

# Copy repo contents to the app directory
cp -r /home/ec2-user/app/* /home/ec2-user/app/

# Start a simple Python HTTP server on port 80 in the background
nohup python3 -m http.server 80 --directory /home/ec2-user/app &

echo "Server started on port 80"
