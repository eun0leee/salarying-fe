<div align="center">
  
# 👥 JOBKOK
**지원자들에게는 투명하고 공정한 안내를 절차별로 도와주고, 사업주에게는 더 쉬운 자동화 채용 절차를 도와주는 서비스**  

2023.03.03 ~ 2023.04.10(5주)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f14f6822-855c-4a25-b7d7-5c8aacecfb93/deploy-status)](https://app.netlify.com/sites/kdt-final/deploys)
![React](https://img.shields.io/badge/react-v18+-blue?logo=react)  

서비스 링크 : ~~jobkok.netlify.app/~~

<img width="700px" alt="JOBKOK" src="https://user-images.githubusercontent.com/83855636/232267130-727049c5-eb9b-4ae0-9f58-faf61f86e3bf.png">

</div>

<br/>

## 1. 담당 구현 기능

### 1.1 지원자 인증 페이지

| 지원자 인증 - 인증성공 | 
| :---------: |
| <img src="https://github.com/eun0leee/salarying-fe/assets/90189513/f141c591-6e45-4228-af5f-8c6de1d4653e" alt="인증성공" width="700px" />  |

| 지원자 인증 - 미입력 | 
| :---------: |
| <img src="https://github.com/eun0leee/salarying-fe/assets/90189513/a3a9cf02-542d-4d0b-99d8-2917a782a205" alt="미입력" width="700px" />  |

-  zod, react-hook-form을 활용하여 이름, 휴대전화, 이메일, 인증번호 유효성 검사를 진행하고 오류시 에러메시지를 표시합니다.
-  submit 했을 때 미입력 항목이 있으면 해당 요소로 focus 됩니다.
-  이메일 입력값이 없으면 확인창('이메일을 입력해주세요')이 뜹니다.
-  이메일 입력 상태에 따라 코드발송 버튼 활성화 여부가 달라집니다.
-  인증번호 입력 상태에 따라 인증완료 버튼 활성화 여부가 달라집니다.
-  지원자 중복확인 api 를 요청해 중복확인합니다.
-  지원서 작성 버튼 클릭시 지원서 작성 페이지로 이동합니다.
  
### 1.2 지원자 작성 페이지

| 지원서 작성 - 작성중 | 
| :---------: |
| <img src="https://github.com/eun0leee/salarying-fe/assets/90189513/d84885bd-5013-4cc7-9313-7f4ea3978f32" alt="미입력" width="700px" />  |

| 지원서 작성 - 제출 | 
| :---------: |
| <img src="https://github.com/eun0leee/salarying-fe/assets/90189513/d75e6fa5-f778-4257-9b62-85f28d63fa88" alt="미입력" width="700px" />  |

- zod, react-hook-form을 활용하여 모든 입력값에 대한 유효성 검사를 진행합니다.
- submit 했을 때 모두 입력해야 다음 페이지로 이동합니다.
- 스크롤의 움직임에 따라 사이드바가 움직입니다.

### 1.3 채용 폼 생성 페이지

| 채용 폼 생성 - 진입 | 
| :---------: |
| <img src="https://github.com/eun0leee/salarying-fe/assets/90189513/abc04722-4ada-4c3d-a256-5fd116443477" alt="진입" width="700px" />  | 

| 채용 폼 생성 - 작성과정 |
| :---------: |
| <img src="https://github.com/eun0leee/salarying-fe/assets/90189513/aa55fa8f-a71d-4266-965d-28fb474cc1cd" alt="작성과정" width="700px" /> |

| 채용 폼 생성 - 작성완료 |
| :---------: |
| <img src="https://github.com/eun0leee/salarying-fe/assets/90189513/7fdc3a0b-4449-4287-b26d-510d7da4b555" alt="작성완료" width="700px" /> |

- 사용자가 값을 입력하자마자 즉각적으로 에러 문구를 출력하기로 했고, 이를 위해 실시간으로 값을 갱신해 주는 React-hook-form 의 onChange mode 를 사용하였습니다. 이를 통해 사용자가 submit 버튼을 누르기 전에 입력값이 유효한지 검사해줘, UX 친화적으로 구현할 수 있었습니다.
- 입력값의 복잡한 유효성 검증은 Zod 라이브러리를 사용해 간단하게 처리했고, Typescript 와 함께 사용함으로써 타입의 안정성을 향상시켰습니다.
- 폼의 중복 제출을 방지하기 위해, 버튼의 disabled 속성에 현재 제출 중인 상태인지 아닌지를 알아낼 수 있는 isSubmitting 값을 설정해 주었습니다.
- 나가기 및 삭제 클릭시 채용폼관리 메인으로 이동합니다.
- 작성완료 클릭시 api 호출돼 폼이 서버로 저장됩니다. 그 후 모달창이 뜨고 링크복사를 하거나 지원서로 이동할 수 있습니다.

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
        <a href="https://github.com/yujiseok">
          <img src="https://img.shields.io/badge/팀장 : 유지석-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90189513?v=4'  alt="이은영님"/><br />
        <a href="https://github.com/eun0leee">
          <img src="https://img.shields.io/badge/이은영-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/113823957?v=4"  alt="이혜란님"/><br />
        <a href="https://github.com/hyerani">
          <img src="https://img.shields.io/badge/이혜란-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
   <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         
  </tbody>
</table>

* [팀 레포지토리](https://github.com/kdt-final-3/jobkok-fe)
* [팀 노션](https://quickest-asterisk-75d.notion.site/3-e6ecfb1d3143440f9afa58481929ab5a?pvs=4)
