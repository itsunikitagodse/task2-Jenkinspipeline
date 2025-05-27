# Use Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Copy app files
COPY package.json ./
COPY index.js ./

# Install dependencies
RUN npm install

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
