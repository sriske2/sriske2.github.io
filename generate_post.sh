# Skyler Riske 2023
# Generate a template blog post for my website.
# Usage: "./generate_post.sh example-title"

if [ -z "$1" ]; then
    echo "no title supplied"
    exit 1
fi
HEADER_DATE=$(date +"%Y-%m-%d %H:%M:%S %z")
DIR="_posts"
FILENAME="$(date +%Y-%m-%d)-$1.md"
HEADER="--- 
layout: post
title: \"$1\"
date: $HEADER_DATE
tags: [general]
---"

if [ -e $FILENAME ]
then
    echo "post exists already"
else
    echo "$HEADER" > $DIR/$FILENAME
fi