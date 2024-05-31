import React, { useContext, useEffect } from "react";
import "./index.css";
import { toast } from "react-toastify";
import { GrFormClose } from "react-icons/gr";
import { createApiContext } from "../../context/apiContext";
import InputContainer from "../dashboard/InputContainer";
import LoadingModal from "../ApiLoader";

const UpdateFaq = ({ faq, onClose, setFaq, setLoading, handleFetch }) => {
  const { updateFaqByAdmin, getAllNodes } = useContext(createApiContext);
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [updateLoading, setUpdateLoading] = React.useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setQuestion(faq?.question);
    setAnswer(faq?.answer);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  //update faq handler fn
  const updateFaqHandler = async (id, formData) => {
    setUpdateLoading(true);
    setLoading(true);
    const data = await updateFaqByAdmin(id, formData);
    if (data.status == "success") {
      setUpdateLoading(false);
      handleFetch((prev) => !prev);
      toast.success(data.message);
      // setFaq(response);
      setLoading(false);
      onClose();
    } else {
      setUpdateLoading(false);
      toast.error(data.message);
    }
  };

  //submit handler fn
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      question: question,
      answer: answer,
    };
    updateFaqHandler(faq._id, formData);
  };

  return (
    <>
      <div className="popUp">
        {updateLoading && <LoadingModal />}
        <div className="popbox">
          <div className="right">
            <span className="close" onClick={onClose}>
              <GrFormClose />
            </span>
          </div>
          <form className="update_node_form" onSubmit={submitHandler}>
            <InputContainer
              label={"Question"}
              id={"question"}
              type={"text"}
              value={question}
              name="question"
              onChange={(e) => setQuestion(e.target.value)}
            />
            <InputContainer
              label={"Answer"}
              id={"answer"}
              type={"text"}
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button type="submit" className="btn primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateFaq;
