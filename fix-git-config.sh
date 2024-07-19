#!/bin/bash

# Configure Git to handle divergent branches
git config pull.rebase false  # Change to true for rebase or ff only for fast-forward only

# Pull the latest changes from the repository
git pull origin gh-pages  # Adjust the branch name as needed

# Run any additional build commands if necessary
# For example, if you're using a static site generator like Zola:
# zola build
