# Deep Learning Project Platform

![12](https://user-images.githubusercontent.com/67178982/111092523-a45c9500-8579-11eb-8e5a-f8423ca24d38.PNG)

```
<p align="center">
	<a href="https://github.com/joielee09/webpage2">Web Develop</a>  
	<a href="https://github.com/joielee09/deep-learning-project-platform-pythonserver.git">Python Server</a>  
</p>
```

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)



## 갱신 이력

Activating recommendation system based on contents (2021/03/15)





## About

This repository is an end-to-end project platform for a project that is made possible to actualize around a deep learning model. The purpose of this project is to learn how to implement deep learning models, not just learning about theory, but learning how to implement real services.

Currently, it is consists of Computer Vision, NLP, Recommendation System, and others. We plan to carry out deep learning projects on various topics in the future. If you want to look around the details of this project's tech stack, architecture, etc., please refer to the [Specification](#Sepcification).





## Table of Contents

* [Build Process](#Build Process)
* [Features](#Features)
* [Specification](#Specification)
  * [Technology stack](#Technology stack)
  * [Directory Structure](#Directory Structure)
  * [Architecture](#Architecture)
* [Contributing](#Contributing)
* [License](#License)





## Build Process

You can clone this repository and run npm scripts yourself on local with the following process.



#### Setup

Fork `master` branch into your personal repository. Clone it to local computer. Before starting development, you should check to see if there are any errors.

```
$ git clone https://github.com/joielee09/webpage2.git 
$ cd ./webpage2 
```



#### Build

```
$ npm run build
```


This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`. 

`server.js` will be used for serving the application on port 5001 and `index.js` is the actual react app itself.



#### Run

```
$ npm run start 
```


run on http://localhost:5001 





## Features

A few of the things you can do with this project  : 

* **Image Classification**
  * https://user-images.githubusercontent.com/67178982/111093508-7b89cf00-857c-11eb-8ece-fe6affbfc667.mp4 <br>Classify images into some classes(dog, cat, squirrel) using transform model. (
    CV의 프로젝트 중 이미지를 분류하는 프로젝트입니다. transform 학습방법을 이용해 주어진 이미지를 강아지, 고양이, 다람쥐로 분류합니다.)
* **Movie Recommendation**
  * https://user-images.githubusercontent.com/67178982/111093104-6b252480-857b-11eb-9905-364dc70a619a.mp4 <br>Recommend related movies based on specific features using content-based filtering.(
    영화 정보를 받아 content-based 추천방식으로 관련된 영화를 추천해주는 영화 추천 프로젝트입니다.)





## Specification

#### Technology stack

| Contents                | Specification                                                |
| :---------------------- | ------------------------------------------------------------ |
| Language                | Python, JavaScript, React                                    |
| Front-end               | JavaScript, React JS                                         |
| Back-end(Server)        | JavaScript, Node JS: express, SSR(In progress)               |
| Model(Server)           | Python, Flask (Flask-ngrok)<br />Model is written by Python.<br />Server is developed by Flask, opening port using ngrok |
| Network                 | axios<br />axios post를 사용해 웹 프론트와 학습모델을 가진 GPU EC2 사이의 통신으로 모델을 이용함. |
| Database(In progress)   | CPU EC2에 AWS RDS(mySQL)를 연결시켜 프로젝트의 정보를 담은 정형 데이터베이스로 사용. GPU EC2에 AWS DynamoDB를 연결시켜 비정형 데이터베이스(사진, 영상, 등)로 사용. |
| CI/CD                   | travis(In progress)                                          |
| Build                   | webpack, babel("babel/preset-env", "babel/preset-react")     |
| Deploy                  | AWS EC2                                                      |
| Test                    | Jest (In progress)                                           |
| Team Collaboration Tool | git                                                          |

#### 

#### Directory Structure

![tree](https://user-images.githubusercontent.com/67178982/111092725-3369ad00-857a-11eb-93d4-d736fe8e5206.png)

- `/client`: Front-end source codes
  - `/client/res/scss`: SCSS source code, including variables and mixin
  - `/client/src/actions`:
  - `/client/src/components`: React component source codes
  - `/client/src/conts`: 
  - `/client/src/containers`:
  - `/client/src/projects`: Files rendering the result of communicating with the deep learning model server
  - `/client/src/reducers`: 
- `/model`: Deep learning model source codes which have colab's extension(ipynb) 
- `/server` 
  - `/server/bin`: Server executable codes 
  - `/server/public`: Front-end executable codes
  - `/server/routes`: Express and SSR source codes
  - `/server/views`: EJS view engine codes
- `/webpack`: Webpack source codes



#### Architecture

![Group 7](https://user-images.githubusercontent.com/67178982/111092921-d28ea480-857a-11eb-9714-ee8584a00216.png)

##### BasedOn

- boilerplate: https://github.com/tahnik/react-expressjs
- image classification pipeline: https://github.com/ndb796/CNN-based-Celebrity-Classification-AI-Service-Using-Transfer-Learning





## Contributing

Contributions are always welcome!

Please [open an issue](https://github.com/joielee09/deep-learning-project-platform/issues) or submit PRs. 



#### Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/joielee09/deep-learning-project-platform/graphs/contributors"><img src="https://opencollective.com/standard-readme/contributors.svg?width=890&button=false" />

</a>

[사진 수정 필요]

--> 아래의 사람들의 사진을 첨부할 수 있도록 하기. contributor가 될 수 있게 해야

🙌coworking with...🙌 <br>
https://github.com/joielee09 <br>
https://github.com/doritos0812 <br>
https://github.com/atica57 <br>





## License

#재영님께 여쭤보기..(원본 소스코드를 바탕으로 작성해야 할 듯하다.)






