# Step 1: Use an official Node.js image to build the app
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app
COPY . .

# Step 6: Build the app
RUN npm run build

# Step 7: Use a lightweight web server to serve the app
FROM nginx:alpine

# Step 8: Copy the build output from the previous step into the Nginx server directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port that Nginx will use
EXPOSE 80

# Step 10: Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
