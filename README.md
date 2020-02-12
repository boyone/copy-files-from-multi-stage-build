# Docker Commands

## Build without remove container

```sh
docker build --rm=false -t hellots .
```

## Copy specific files from stopped container by filter (-f) with label

```sh
docker cp $(docker container ps -a -f "label=image=test" -f "label=id=hello" -f "status=exited" --format "{{.ID}}"):/app/coverage/ .
```

## Prune docker container by filter (-f) with label

```sh
docker container rm $(docker container ps -a -f "label=id=hello" --format "{{.ID}}")
```

## Prune docker image by filter (-f) with label

```sh
docker image rm $(docker image ls -a -f "label=id=hello" --format "{{.ID}}")
```

ref: [https://medium.com/@cyril.delmas/how-to-keep-the-build-reports-with-a-docker-multi-stage-build-on-jenkins-507200f4007f](https://medium.com/@cyril.delmas/how-to-keep-the-build-reports-with-a-docker-multi-stage-build-on-jenkins-507200f4007f)