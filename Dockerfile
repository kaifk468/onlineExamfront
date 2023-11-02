# Use an official Node.js runtime as the base image
FROM node:14
EXPOSE 4200
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build the Angular app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 4200

# Start the Angular app when the container starts
CMD ["npm", "start"]