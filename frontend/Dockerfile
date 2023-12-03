# Use an official Node runtime as a parent image
FROM node:14-slim

# Set the working directory to /app
WORKDIR /user/src/app

# Copy the current directory contents into the container at /app
COPY ./package.json ./
COPY ./package-lock.json ./

# Install dependencies
RUN npm install
COPY . .
# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
