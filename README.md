## Local run

```commandline
npm install
npm start
```

## Docker local run

```commandline
docker build --tag=frontend:latest .
docker run -p8080:8080 frontend:latest
```

## Docker remote run (warning: may be outdated)

```commandline
docker run -p8080:8080 slawekradzyminski/frontend:latest
```

## Verification

Application should run on [http://localhost:8080](http://localhost:8080)

## wait-on

```commandline
npm start & ./node_modules/.bin/wait-on http://localhost:8080 && npx cypress run --browser chrome --headed
```

## allure

```commandline
npm run
allure serve
```

## testrail

[Installation](https://www.gurock.com/testrail/docs/admin/installation/docker/overview)