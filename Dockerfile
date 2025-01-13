# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install `next` runtime dependencies only (production mode)
RUN npm prune --production

# Step 2: Use a lightweight Node.js image for production
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Expose the application port
EXPOSE 3000


# Start the Next.js application
CMD ["npm", "start"]
