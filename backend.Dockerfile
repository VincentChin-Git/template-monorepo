# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.12.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine 

# Set working directory for all build stages.
WORKDIR /app

# Copy built folders into image
ADD dist .

# Install dependencies using pnpm
RUN npm install -g pnpm && \
    pnpm install

# # Copy the production dependencies from the deps stage and also
# # the built application from the build stage into the image.
# COPY ./node_modules ./node_modules

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD cd backend && pnpm run start