# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (if your app runs on this port)
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
