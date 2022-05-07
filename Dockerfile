# ==================================================================
# Copy package.json and build node_modules 
FROM node:lts-alpine as build-env

WORKDIR /usr/src/app

COPY package-lock.json package.json ./
# clean-install only dependencies(not dev-dependencies)
RUN npm ci --production

# ==================================================================
# Copy (node_modules from build-env) and (js files from local /build)
FROM node:lts-alpine
# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn


# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

## Puppeteer v13.5.0 works with Chromium 100.
# RUN yarn add puppeteer@13.5.0
# # Add user so we don't need --no-sandbox.
# RUN addgroup -S pptruser && adduser -S -G pptruser pptruser \
#     && mkdir -p /home/pptruser/Downloads /app \
#     && chown -R pptruser:pptruser /home/pptruser \
#     && chown -R pptruser:pptruser /app
# # Run everything after as non-privileged user.
# USER pptruser

WORKDIR /app
COPY --from=build-env /usr/src/app/node_modules node_modules

COPY /build .

ENV NODE_ENV production

EXPOSE 5000
CMD ["node","index.js"]










# FROM node:16

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 5000
# CMD [ "node", "build/index.js" ]