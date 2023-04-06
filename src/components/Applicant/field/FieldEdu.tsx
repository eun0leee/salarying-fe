import { useFormContext } from "react-hook-form";
import { EDULEVEL_OPTION, EDUSTATUS_OPTION } from "@/constants/applicant";
import FieldInputBox from "@components/Applicant/FieldInputBox";

const FieldEdu = ({ handleKeyDown }: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="applicant-field-box">
      <legend className="applicant-field-legend">최종학력</legend>
      <div className="applicant-filed-row">
        <FieldInputBox errors={errors.eduName}>
          <label className="applicant-field-label" htmlFor="eduName">
            학교명
          </label>
          <input
            className="max-w-[200px] bg-transparent focus:outline-none"
            type="text"
            id="eduName"
            maxLength={20}
            placeholder="학교명을 입력해주세요."
            {...register("eduName")}
          />
        </FieldInputBox>
        <FieldInputBox errors={errors.eduMajor}>
          <label className="applicant-field-label" htmlFor="eduMajor">
            전공
          </label>
          <input
            className="max-w-[190px] bg-transparent focus:outline-none"
            type="text"
            id="eduMajor"
            maxLength={20}
            placeholder="전공을 입력해주세요."
            {...register("eduMajor")}
          />
        </FieldInputBox>
        <FieldInputBox errors={errors.eduLevel}>
          <label className="sr-only" htmlFor="eduLevel">
            년제
          </label>
          <select
            className="max-w-[160px] focus:outline-none"
            id="eduLevel"
            {...register("eduLevel")}
          >
            {EDULEVEL_OPTION.map((level) => {
              return (
                <option key={level.value} value={level.value}>
                  {level.keywords}
                </option>
              );
            })}
          </select>
        </FieldInputBox>
        <FieldInputBox errors={errors.eduStatus}>
          <label className="sr-only" htmlFor="eduStatus">
            졸업상태
          </label>
          <select
            className="max-w-[160px] focus:outline-none"
            id="eduStatus"
            {...register("eduStatus")}
          >
            {EDUSTATUS_OPTION.map((status) => {
              return (
                <option key={status.value} value={status.value}>
                  {status.keywords}
                </option>
              );
            })}
          </select>
        </FieldInputBox>
        <FieldInputBox errors={errors.eduPeriodStart}>
          <label className="applicant-field-label" htmlFor="eduPeriodStart">
            입학날짜
          </label>
          <input
            className="max-w-[120px] focus:outline-none"
            type="date"
            id="eduPeriodStart"
            onKeyDown={handleKeyDown}
            {...register("eduPeriodStart")}
          />
        </FieldInputBox>
        <FieldInputBox errors={errors.eduPeriodEnd}>
          <label className="applicant-field-label" htmlFor="eduPeriodEnd">
            졸업날짜
          </label>
          <input
            className="max-w-[120px] focus:outline-none"
            type="date"
            id="eduPeriodEnd"
            onKeyDown={handleKeyDown}
            {...register("eduPeriodEnd")}
          />
        </FieldInputBox>
      </div>
    </div>
  );
};
export default FieldEdu;
