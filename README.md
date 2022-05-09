<h1 align="center">프로그래밍 언어 검색</h1>

<img width="790" alt="image" src="https://user-images.githubusercontent.com/63354527/167340147-c603b1da-eecc-4347-8b3c-4ccb1c4396b9.png">

<p align="center">프로그래머스 2022 Dev-Matching: 웹 프론트엔드 개발자 (상반기) 과제<br/> Vanilla JS 프로그래밍 언어 검색</p>
<p align="center"><a href="" target="_blank">DEMO</a></p>

## Description

<img width="632" alt="image" src="https://user-images.githubusercontent.com/63354527/167340406-3b69d02e-f154-4aaf-b207-aac861372a9f.png">

화면에 구현해야하는 부분들을 위와 같이 쪼개서 생각해 볼 수 있다. 각 컴포넌트는 아래와 같은 관계를 갖는다.

<img width="752" alt="image" src="https://user-images.githubusercontent.com/63354527/167340528-4f007efa-c349-49f1-b9b3-3b568eae0134.png">

App 컴포넌트가 세 컴포넌트를 제어하는 형태이고, SelectedLanguages, SearchInput, Suggestion 각각의 컴포넌트는 서로의 의존성을 띄지 않는 형태로 작성해야 추후 재사용 가능한 컴포넌트가 된다.
