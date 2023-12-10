import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originDate, setOriginDate] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id),
      );

      if (targetDiary) {
        setOriginDate(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);
  return (
    <div>
      {originDate && <DiaryEditor isEdit={true} originDate={originDate} />}
    </div>
  );
};

export default Edit;
