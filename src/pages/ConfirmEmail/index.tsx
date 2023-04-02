import { useState } from "react";

const ConfirmEmail = () => {
  const [authCode, setAuthCode] = useState(true);
  return (
    <div>
      <h2>이메일 인증</h2>
      <p>회원님의 정보를 안전하게 보호하기 위해, 이메일 인증을 해주세요.</p>
      <form>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" />
        {authCode ? null : (
          <div>
            <label>인증코드 입력</label>
            <input type="text" placeholder="6자리 인증코드를 입력해주세요" />
            <span>2:59</span>
            <button>인증하기</button>
          </div>
        )}
        <button type="submit" onClick={() => setAuthCode(false)}>
          {authCode ? "인증코드 발송" : "다음으로"}
        </button>
      </form>
    </div>
  );
};
export default ConfirmEmail;
