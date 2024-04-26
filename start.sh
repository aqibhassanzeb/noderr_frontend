#!/bin/bash
# CREATED BY SAUD KHAN
# Variables
PROCESS_NAME="node-block-main"  # Name of the pm2 process
PM2_EXEC="pm2"  # Path to pm2 executable, assuming it's in your PATH

# Check if PM2 is installed
command -v $PM2_EXEC >/dev/null 2>&1 || { echo "PM2 is not installed. Install with 'npm install -g pm2'"; exit 1; }

# Start the process with PM2 using 'npm start'
$PM2_EXEC start npm --name $PROCESS_NAME -- start  # This starts 'npm start'

# Set PM2 to start on system boot
$PM2_EXEC startup  # Output systemd/OS-specific instructions

# Save the PM2 process list to ensure persistence across reboots
$PM2_EXEC save

echo "Started $PROCESS_NAME with PM2 and set to auto-start on boot."
