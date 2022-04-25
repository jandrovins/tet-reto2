FROM nginx:1.12.2

# Create app directory
WORKDIR /BookStore-frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./build .
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./fullchain.pem /etc/letsencrypt/live/vincent-tet-reto2.tk/fullchain.pem
COPY ./privkey.pem /etc/letsencrypt/live/vincent-tet-reto2.tk/privkey.pem
