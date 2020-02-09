FROM ruby:latest
ENV HOME /root
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g yarn
WORKDIR /home/app/frontend
ADD ./frontend/package.json /home/app/frontend
ADD ./frontend/yarn.lock /home/app/frontend
RUN yarn install --silent
RUN yarn add react-router-dom --silent
RUN yarn add @material-ui/core --silent
RUN yarn add @material-ui/icons --silent
COPY ./frontend /home/app/frontend
CMD ["yarn", "start"]
