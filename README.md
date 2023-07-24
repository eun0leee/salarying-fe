# 👥 JOBKOK
**지원자들에게는 투명하고 공정한 안내를 절차별로 도와주고, 사업주에게는 더 쉬운 자동화 채용 절차를 도와주는 서비스**  

2023.03.03 ~ 2023.04.10(5주)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f14f6822-855c-4a25-b7d7-5c8aacecfb93/deploy-status)](https://app.netlify.com/sites/kdt-final/deploys)
![React](https://img.shields.io/badge/react-v18+-blue?logo=react)  

서비스 링크 : ~~jobkok.netlify.app/~~

<img width="700px" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-10_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5 00 07" src="https://user-images.githubusercontent.com/83855636/232267130-727049c5-eb9b-4ae0-9f58-faf61f86e3bf.png">


## 1. 기능 목록

### 1.1 채용 폼 작성 페이지
- zod, react-hook-form을 활용해 모든 입력값에 대한 유효성 검사를 진행합니다.
- 나가기 및 삭제 클릭시 채용폼관리 메인으로 이동합니다.
- 작성완료 클릭시 api 호출돼 폼이 서버로 저장됩니다. 그 후 모달창이 뜨고 링크복사를 하거나 지원서로 이동할 수 있습니다.

### 1.2 지원자 인증 페이지
-  zod, react-hook-form을 활용하여 이름, 휴대전화, 이메일, 인증번호 유효성 검사를 진행하고 오류시 에러메시지를 표시합니다.
-  submit 했을 때 미입력 항목이 있으면 해당 요소로 focus 됩니다.
-  이메일 입력값이 없으면 확인창('이메일을 입력해주세요')이 뜹니다.
-  이메일 입력 상태에 따라 코드발송 버튼 활성화 여부가 달라집니다.
-  인증번호 입력 상태에 따라 인증완료 버튼 활성화 여부가 달라집니다.
-  지원자 중복확인 api 를 요청해 중복확인합니다.
-  지원서 작성 버튼 클릭시 지원서 작성 페이지로 이동합니다.
  
### 1.3 지원자 작성 페이지
- zod, react-hook-form을 활용하여 모든 입력값에 대한 유효성 검사를 진행합니다.
- submit 했을 때 모두 입력해야 다음 페이지로 이동합니다.
- 스크롤의 움직임에 따라 사이드바가 움직입니다.

## 2. 개발 환경 세팅
```
git clone https://github.com/eun0leee/salarying-fe.git
cd salarying-fe
npm install
npm dev
```

## 3. 기술 스택

- vite, react, typescript, redux-toolkit, tailwindcss, axios, react-hook-form, zod, react-router-dom, react-query

## 4. 협업 방식

- 공통 소통 툴: 슬랙, 노션, 게더타운
- FE & UXUI: 피그마, 제플린
- FE & BE: 깃헙, 포스트맨

## 5. 회고

좋았던 점

- 게더타운 데일리스크럼과 다양한 문서로 원활한 소통을 위해 모두가 노력한 것.
- 타직군과 커뮤니케이션하는 법을 배운 점(네이밍의 중요성).
- 촉박한 시간 속에서도 프론트파트끼리 열심히 코드리뷰한 것.
- 타 팀원의 코드를 보며 배운 것이 정말 많았던 점.
- 안해봤던 지원서 구현을 해본 점.
- 멘토링을 통해 기능구현의 고민을 해결하고, 현업의 다양한 이야기를 들을 수 있었던 점.

아쉬운 점

- 초반부터 일정관리를 탄탄히 하지 못한 것.
- 타파트에 개인별 작업상황 공유가 잘 안됐던 점(담당자 찾는데 시간걸림).
- 잡담을 더 시간내서 하지 못한 것.
- 초반에 컴포넌트 재사용성 더 고민하지 못했던 것.

## 6. 팀원

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/83855636?v=4"  alt="유지석님"/><br />
        <br/>
        <a href="https://github.com/yujiseok">
          <img src="https://img.shields.io/badge/팀장 : 유지석-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90189513?v=4'  alt="이은영님"/><br />
        <br/>
        <a href="https://github.com/eun0leee">
          <img src="https://img.shields.io/badge/이은영-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/113823957?v=4"  alt="이혜란님"/><br />
       <br/>
        <a href="https://github.com/hyerani">
          <img src="https://img.shields.io/badge/이혜란-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
   <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
       <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         
  </tbody>
</table>

* ![팀 레포지토리](https://github.com/kdt-final-3/jobkok-fe)
* ![팀 노션](https://quickest-asterisk-75d.notion.site/3-e6ecfb1d3143440f9afa58481929ab5a?pvs=4)
