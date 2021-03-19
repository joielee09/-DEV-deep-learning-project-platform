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

이미지 분류 시스템 활성화 (2021/03/15)

영화 추천 시스템 활성화 (2021/03/15)





## 프로젝트 소개

딥러닝 모델을 중심으로 실제 구현 가능하게 만든 프로젝트의 End-to-End 프로젝트 플랫폼입니다. 이 프로젝트를 통해 얻는 목표는 아래와 같습니다.

> * 딥러닝 모델을 이론으로만 그치지 않고 실제 서비스를 구현함으로써 개발 환경에 대한 이해도 향상
> * 간단한 서비스에서 더 나아가 고차원적인 다양한 아이디어를 실제로 구현

현재 구성된 모델 항목은 아래와 같습니다. 차후 각 분야에 관하여 다양한 기법을 활용한 모델 및 서비스를 업데이트할 예정입니다.

* Computer Vision
* NLP
* Recommendation System,
* 기타

프로젝트에 사용한 기술 스택, 구조 등에 관한 세부사항을 보고 싶다면 [세부사항](#세부사항) 항목을 참조하시길 바랍니다.





## 목차

* [설치 안내](#설치 안내)
* [사용법](#사용법)
* [세부사항](#세부사항)
  * [기술 스택 목록](#기술 스택 목록)
  * [파일 구조](#파일 구조)
  * [시스템 구성](#시스템 구성)
* [기여하는 방법](#기여하는 방법)
* [저작권 및 사용권](#저작권 및 사용권)





## 설치 안내

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





## 사용법

현재 사용할 수 있는 기능은 다음과 같습니다. 

* **이미지 분류**
  * https://user-images.githubusercontent.com/67178982/111093508-7b89cf00-857c-11eb-8ece-fe6affbfc667.mp4 <br>
    CV의 프로젝트 중 이미지를 분류하는 프로젝트입니다. transform 학습방법을 이용해 주어진 이미지를 강아지, 고양이, 다람쥐로 분류합니다.
* **영화 추천**
  * https://user-images.githubusercontent.com/67178982/111093104-6b252480-857b-11eb-9905-364dc70a619a.mp4 <br>
    영화 정보를 받아 content-based 추천방식으로 관련된 영화를 추천해주는 영화 추천 프로젝트입니다.





## 세부사항

#### 기술 스택 목록

| 목록               | 설명                                                         |
| :----------------- | ------------------------------------------------------------ |
| 사용 언어          | Python, JavaScript, React                                    |
| 프론트엔드         | JavaScript, React JS                                         |
| 벡엔드(서버)       | JavaScript, Node JS: express, SSR(In progress)               |
| 모델 벡엔드(서버)  | Python(모델), Flask(서버) (Flask-ngrok(포트))                |
| 통신               | axios (axios post를 사용해 웹 프론트와 학습모델을 가진 GPU EC2 사이의 통신으로 모델을 이용) |
| 데이터베이스(예정) | CPU EC2에 AWS RDS(mySQL)를 연결시켜 프로젝트의 정보를 담은 정형 데이터베이스로 사용. <br />GPU EC2에 AWS DynamoDB를 연결시켜 비정형 데이터베이스(사진, 영상, 등)로 사용. |
| CI/CD              | travis(예정)                                                 |
| 빌드               | webpack, babel("babel/preset-env", "babel/preset-react")     |
| 가상 사설 서버     | AWS EC2                                                      |
| 테스트 환경        | Jest (예정)                                                  |
| 협업도구           | git                                                          |



#### 파일 구조

![tree](https://user-images.githubusercontent.com/67178982/111092725-3369ad00-857a-11eb-93d4-d736fe8e5206.png)

- `/client`: 프론트엔드 코드 파일
  - `/client/res/scss`: SCSS 파일이 포함된 폴더, 변수 및 mixin
  - `/client/src/actions`:
  - `/client/src/components`: React 컴포넌트가 포함된 폴더
  - `/client/src/conts`: 
  - `/client/src/containers`:
  - `/client/src/projects`: 딥러닝 모델 서버와 통신해 얻은 결과물을 랜더링하는 파일이 포함된 폴더
  - `/client/src/reducers`: 
- `/model`: 딥러닝 모델 코드(코랩(.ipynb))가 포함된 폴더 
- `/server` 
  - `/server/bin`: 서버 실행 파일이 포함된 폴더
  - `/server/public`: 프런트 실행 파일이 포함된 폴더
  - `/server/routes`: Express와 SSR 파일이 포함된 폴더
  - `/server/views`: EJS view engine이 포함된 폴더
- `/webpack`: Webpack 파일이 포함된 폴더



#### 시스템 구성

![Group 7](https://user-images.githubusercontent.com/67178982/111092921-d28ea480-857a-11eb-9714-ee8584a00216.png)





## 기여하는 방법

이 프로젝트에 대해 관심을 갖고 기여하고 싶으신 분은 [open an issue](https://github.com/joielee09/deep-learning-project-platform/issues) 으로 이슈를 제기해주시거나 PR(Pull Request)을 보내주시길 바랍니다. 



#### 프로젝트 기여자

이 프로젝트에 기여한 사람은 아래와 같습니다.

<a href="https://github.com/joielee09/deep-learning-project-platform/graphs/contributors"><img src="https://opencollective.com/standard-readme/contributors.svg?width=890&button=false" />

</a>

[사진 수정 필요]

--> 아래의 사람들의 사진을 첨부할 수 있도록 하기. contributor가 될 수 있게 해야

🙌coworking with...🙌 <br>
https://github.com/joielee09 <br>
https://github.com/doritos0812 <br>
https://github.com/atica57 <br>





## 저작권 및 사용권

* 이 프로젝트는 MIT 라이선스를 따르고 있습니다. 자세한 사항은 [LICENSE](./LICENSE)을 참조해주시길 바랍니다.

* 딥러닝 모델 구현에 참조된 소스코드 주소는 아래와 같습니다. 아래의 image classification pipeline의 경우 원저작자에게 게시 허락을 받았음을 명시하는 바입니다.
  - boilerplate: https://github.com/tahnik/react-expressjs
  - image classification pipeline: https://github.com/ndb796/CNN-based-Celebrity-Classification-AI-Service-Using-Transfer-Learning

