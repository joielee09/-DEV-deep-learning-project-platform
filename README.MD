## Deep Learning Project Platform

![12](https://user-images.githubusercontent.com/67178982/111092523-a45c9500-8579-11eb-8e5a-f8423ca24d38.PNG)

##### github 주소: https://github.com/joielee09/webpage2
##### 기술스택:
프론트: JavaScript, React JS <br>
웹백엔드(서버): JavaScript, Node JS: express를 사용. <br>
모델 백엔드(서버): Python, Flask (Flask-ngrok): python 기반으로 데이터 분석 및 머신러닝/딥러닝 모델을 작성. python 언어 중 flask를 사용해서 서버를 구축하고 ngrok을 통해 외부와 통신하는 포트를 엶. <br>

통신: axios: axios post를 사용해 웹 프론트와 학습모델을 가진 GPU EC2 사이의 통신으로 모델을 이용함. <br>
데이터베이스(예정): CPU EC2에 AWS RDS(mySQL)를 연결시켜 프로젝트의 정보를 담은 정형 데이터베이스로 사용. GPU EC2에 AWS DynamoDB를 연결시켜 비정형 데이터베이스(사진, 영상, 등)로 사용. <br>

CI/CD: travis(예정) <br>
Build: webpack, babel("babel/preset-env",, "babel/preset-react") <br>
Deploy: AWS EC2 <br>
커뮤니케이션 툴: git <br>

##### 간단한 소개: 딥러닝 모델을 중심으로 실제 구현 가능하게 만든 프로젝트의 End-to-End 프로젝트 플랫폼입니다. 딥러닝 종류별로 카테고리화해서 Computer Vision, NLP, Recommendation System, 기타로 구성되어 있습니다. <br>

##### 기본기능(데모영상):

https://user-images.githubusercontent.com/67178982/111092954-ea662880-857a-11eb-8786-82f31fdf33d0.mp4
CV의 프로젝트 중 이미지를 분류하는 프로젝트입니다. transform 학습방법을 이용해 주어진 이미지를 강아지, 고양이, 다람쥐로 분류합니다.
https://user-images.githubusercontent.com/67178982/111093104-6b252480-857b-11eb-9905-364dc70a619a.mp4
영화 정보를 받아 content-based 추천방식으로 관련된 영화를 추천해주는 영화 추천 프로젝트입니다.


##### 사용 언어: Python, JavaScript, React

##### 폴더구조:
![tree](https://user-images.githubusercontent.com/67178982/111092725-3369ad00-857a-11eb-93d4-d736fe8e5206.png)

/client: 프론트 코드 파일 <br>
/client/res/scss: scss 파일이 포함된 폴더, 변수와 mixin. <br>
/client/src/actions: <br>
/client/src/components: react 컴포넌트가 포함된 폴더 <br>
/client/src/conts: <br>
/client/src/containers: <br>
/client/src/projects: 딥러닝 모델 서버와 통신해 결과물을 랜더링하는 파일이 포함된 폴더. <br>
/client/src/reducers: <br>
/model: 딥러닝 모델 코드가 포함된 폴더, ipynb 파일로 구성되어있다. <br>
/server <br>
/server/bin: 서버 실행파일이 포함된 폴더 <br>
/server/public: 프런트 실행 파일이 포함된 폴더 <br>
/server/routes: express 와 ssr 파일이 포함된 폴더 <br>
/server/views: ejs view engine이 포함된 폴더 <br>
/webpack: 웹팩 파일이 포함된 폴더 <br>

##### 실행 시나리오
설치 : <br>
$ git clone https://github.com/joielee09/webpage2.git <br>
$ cd ./webpage2 <br>
빌드: <br>
$ npm run build <br>
This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`. `server.js` will be used for serving the application on port 5001 and `index.js` is the actual react app itself. <br>
실행: <br>
$ npm run start <br>
run on http://localhost:5001 <br>

##### Architecture
![Group 7](https://user-images.githubusercontent.com/67178982/111092921-d28ea480-857a-11eb-9714-ee8584a00216.png)


##### BasedOn
- boilerplate: https://github.com/tahnik/react-expressjs
- image classification pipeline: https://github.com/ndb796/CNN-based-Celebrity-Classification-AI-Service-Using-Transfer-Learning
