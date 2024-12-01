# Use the official Node.js image
FROM node:20-alpine 

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./ 

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .  

# Expose the port Vite's dev server uses
EXPOSE 5173 

# Start the Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]

