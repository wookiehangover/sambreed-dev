---
title: AWS Lambda Python Makefile
description: My quick-and-dirty recipe for deploying a containerized Python app to AWS Lambda
createdAt: 2023-12-10
categories:
  - Computers
  - Web Development
  - Python
type: note
---

## Background

AWS Lambda has been around since 2015 and I've been using it in some form or fashion since then. AWS is an infamously complex set of (mostly) backend building blocks.

Over the years, I’ve tried many different open source projects to deploy lambdas, like [Serverless](https://www.serverless.com/), [Architect](https://arc.codes/docs/en/get-started/quickstart), and most recently [AWS Sam](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html).

These tools are great and all but I use them infrequently enough so that every time I come back I feel like I have to either re-learn a tool I’ve used before or figure out a new way to do it. Last time out was AWS Sam, which again is great, but I have no memory for yaml configuration. 

This week when I needed to deploy some Python code for running a custom embeddings search, I decided to go with the vanilla AWS docs and see where it got me. The results are two files, which now that I’ve done it, are pretty easy (for me) to understand.

Scroll to the end for the [full source](#source).

## 1. Makefile

The Makefile does the bulk of the scripting. Bash scripts pile up quickly and require boilerplate to do even the most basic command parsing or sequence control. So, makefiles.

I put this together by scouring [my bash history](https://atuin.sh/) for the [aws-cli](https://aws.amazon.com/cli/) commands entered by following the [documentation for deploying a python container image](https://docs.aws.amazon.com/lambda/latest/dg/python-image.html).

There are a few steps:

1. Create the ECR registry
	- authenticate the docker-cli so it canpublish
2. Build the docker container for lambda
3. Create the lambda function
4. Update the lambda code with the latest container image

The makefile has a few variables for configuration and is able to string together sequences of commands. .I think this is much easier than using bash scripts, even if Makefiles are somewhat archaic. LLMs help get over the syntax hump with ease.

## 2. Dockerfile

Why Docker?

The reason: Python dependencies.

Of course, you can simply upload a .zip archive and skip a bunch of steps, but only if your application and its dependencies are less that 50mb zipped. Popular python libraries did not receive this memo.

The code I needed to deploy trains a simple model and runs an embeddings search. Like most ml code, it uses pandas, numpy, and scikit-learn, easily smashing through the 50mb cutoff for a one-shot upload.

Fortunately, the sample dockerfile provided by AWS is short and clear.

The only gotcha is remembering to build the image with `--platform linux/amd64` to build dependencies correctly for lambda.

## Conclusion

Yeah so I really understand is why platforms like Vercel exist and are widely used.

There is a lot of yak-shaving here.

My ideal developer experience is “here is my code” — having to create a container registry, build a container, publish it to the registry, and _then_ deploy your code is a painful developer journey.

I’m writing this down so that the next time I need to do this, I can copy these two files and update the post for whatever has changed in the meantime.

## Source

Makefile
```makefile
CONTAINER_NAME=
FN_NAME=
ROLE_ARN=
AWS_ID=
REGION=us-west-2

all: build push

# build the image
build:
	docker build --platform linux/amd64 -t $(CONTAINER_NAME):prod .

# push the image to the ECR registry
push:
	docker tag $(CONTAINER_NAME):prod $(AWS_ID).dkr.ecr.$(REGION).amazonaws.com/$(CONTAINER_NAME):latest
	docker push $(AWS_ID).dkr.ecr.$(REGION).amazonaws.com/$(CONTAINER_NAME):latest

# update the lambda function
update:
	aws lambda update-function-code \
	  --function-name $(FN_NAME) \
	  --image-uri $(AWS_ID).dkr.ecr.$(REGION).amazonaws.com/$(CONTAINER_NAME):latest \
		--output yaml-stream

# create the lambda function
create:
	aws lambda create-function \
		--function-name $(FN_NAME) \
		--package-type Image \
		--code ImageUri=$(AWS_ID).dkr.ecr.$(REGION).amazonaws.com/$(CONTAINER_NAME):latest \
		--role $(ROLE_ARN)

# create the ECR registry
registry:
	aws ecr get-login-password --region $(REGION) | docker login --username AWS --password-stdin $(AWS_ID).dkr.ecr.$(REGION).amazonaws.com
	aws ecr create-repository \
		--repository-name reticle_similar_profiles \
		--region $(REGION) \
		--image-scanning-configuration scanOnPush=true \
		--image-tag-mutability MUTABLE	

.PHONY: all build push update create registry
```

Dockerfile
```dockerfile
FROM public.ecr.aws/lambda/python:3.11

# Copy requirements.txt
COPY requirements.txt ${LAMBDA_TASK_ROOT}

# Install the specified packages
RUN pip install -r requirements.txt

# Copy function code
COPY lambda_function.py ${LAMBDA_TASK_ROOT}
COPY data.csv ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "lambda_function.handler" ]
```