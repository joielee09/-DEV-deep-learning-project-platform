# Deep Learning Project Platform

![12](https://user-images.githubusercontent.com/67178982/111092523-a45c9500-8579-11eb-8e5a-f8423ca24d38.PNG)

```
<p align="center">
	<a href="https://github.com/joielee09/webpage2">Web Develop</a>  
	<a href="https://github.com/joielee09/deep-learning-project-platform-pythonserver.git">Python Server</a>  
</p>
```

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

(badge -> 다른 조합 가능)

## Release issue

Activating recommendation system based on contents (2021/03/15)



## About

This repository is an end-to-end project platform for a project that is made possible to actualize around a deep learning model. Currently, it is consists of Computer Vision, NLP, Recommendation System, and others. We plan to carry out deep learning projects on various topics in the future. If you want to look around the details of this project's tech stack, architecture, etc., please refer to the [Specification](#Sepcification).

(이 레포는 딥러닝 모델을 중심으로 실제 구현 가능하게 만든 프로젝트의 End-to-End 프로젝트 플랫폼입니다. 현재 딥러닝 종류별로 카테고리화해서 Computer Vision, NLP, Recommendation System, 기타로 구성되어 있습니다. 앞으로 다양한 주제의 딥러닝 프로젝트를 진행할 예정입니다. 이 프로젝트의 tech stack, architecture 등, 자세한 사항을 참고하고 싶다면 Specification을 참고 바랍니다.)



## Table of Contents

* [Build Process](#Build Process)
  * 
* Features
  * 
* Specification
  * Technology stack
  * File Structure
  * Architecture
* [Contributing](#Contributing)
* [License](#License)



## Build Process

You can clone this repository and run npm scripts yourself on local with the following process.

(이 문서는 이 코드를 직접 로컬 컴퓨터 상에서 실행시켜보고자 하는 분을 위해 작성된 설치 방법 문서입니다. )

#### Project setup

Fork `master` branch into your personal repository. Clone it to local computer. 

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


### 

## Specification

#### Technology stack

* Language : Python, JavaScript, React

- Frontend: JavaScript, React JS

- Backend(Server): JavaScript, Node JS: express, SSR(In progress) 

- Model(Server): written in Python, Flask (Flask-ngrok) 

  (python 기반으로 데이터 분석 및 머신러닝/딥러닝 모델을 작성. python 언어 중 flask를 사용해서 서버를 구축하고 ngrok을 통해 외부와 통신하는 포트를 엶.)

- Network: axios: axios post를 사용해 웹 프론트와 학습모델을 가진 GPU EC2 사이의 통신으로 모델을 이용함. 

- Database(In progress): CPU EC2에 AWS RDS(mySQL)를 연결시켜 프로젝트의 정보를 담은 정형 데이터베이스로 사용. GPU EC2에 AWS DynamoDB를 연결시켜 비정형 데이터베이스(사진, 영상, 등)로 사용.

- CI/CD: travis(In progress) 

- Build: webpack, babel("babel/preset-env",, "babel/preset-react") 

- Deploy: AWS EC2 

- Test: Jest (In progress)

- Team Collaboration Tool: git 

#### 

#### Directory Structure

![tree](https://user-images.githubusercontent.com/67178982/111092725-3369ad00-857a-11eb-93d4-d736fe8e5206.png)

- /client: 프론트 코드 파일
  - /client/res/scss: scss 파일이 포함된 폴더, 변수와 mixin.
  - /client/src/actions:
  - /client/src/components: react 컴포넌트가 포함된 폴더 
  - /client/src/conts: 
  - /client/src/containers:
  - /client/src/projects: 딥러닝 모델 서버와 통신해 결과물을 랜더링하는 파일이 포함된 폴더. 
  - /client/src/reducers: 
- /model: 딥러닝 모델 코드가 포함된 폴더, ipynb 파일로 구성되어있다. 
- /server 
  - /server/bin: 서버 실행파일이 포함된 폴더 
  - /server/public: 프런트 실행 파일이 포함된 폴더 
  - /server/routes: express 와 ssr 파일이 포함된 폴더 
  - /server/views: ejs view engine이 포함된 폴더 
- /webpack: 웹팩 파일이 포함된 폴더 





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






