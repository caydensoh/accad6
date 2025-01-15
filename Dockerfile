# Step 1: Use an official Node.js image to build the app
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: reinstall dependencies just in case
RUN npm install

# Step 5: Copy the rest of the app
COPY . .

# Step 6: Build the app
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80  # ✅ Exposing port 80 for App Runner
CMD ["nginx", "-g", "daemon off;"]