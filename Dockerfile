#################################
# node-pipe-changelog-generator #
#################################

FROM madoos/node-dind:latest

MAINTAINER Maurice Dominguez <maurice.dominguez@gigigo.com>

WORKDIR /home/changelog-generator/

ADD . .

RUN npm install

CMD [ "node", "./index.js" ]