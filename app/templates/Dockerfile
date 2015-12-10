FROM docker-bj03.ucloud.cn/node
MAINTAINER kimzhang

RUN mkdir -p /var/<%= lodash.slugify(lodash.humanize(appname)) %>
ADD client /var/<%= lodash.slugify(lodash.humanize(appname)) %>/client
ADD server /var/<%= lodash.slugify(lodash.humanize(appname)) %>/server
ADD node_modules /var/<%= lodash.slugify(lodash.humanize(appname)) %>/node_modules
#ADD package.json /var/<%= lodash.slugify(lodash.humanize(appname)) %>/
#ADD bower.json /var/<%= lodash.slugify(lodash.humanize(appname)) %>/
#ADD .bowerrc /var/<%= lodash.slugify(lodash.humanize(appname)) %>/
#ADD .tmp /var/<%= lodash.slugify(lodash.humanize(appname)) %>/.tmp

WORKDIR /var/<%= lodash.slugify(lodash.humanize(appname)) %>

EXPOSE 9000

ENTRYPOINT NODE_ENV=production node server/app.js
