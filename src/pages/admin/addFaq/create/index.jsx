import React, { useContext, useState } from "react";
// import "./index.css";
import PageHeader from "../../../../components/dashboard/pageHeader/pageHeader";
import InputContainer from "../../../../components/dashboard/InputContainer";
import { images } from "../../../../images";
import { toast } from "react-toastify";
import LoadingModal from "../../../../components/ApiLoader";
import { useNavigate } from "react-router-dom";
import { createApiContext } from "../../../../context/apiContext";
const CreateFaq = () => {
  const navigate = useNavigate();
  const { createFaqByAdmin } = useContext(createApiContext);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFaqCreate = async (data) => {
    setLoading(true);

    const response = await createFaqByAdmin(data);
    console.log(response);
    if (response.data) {
      setLoading(false);
      setAnswer("");
      setQuestion("");
      toast.success(response.message);
      navigate("/dashboard/all-faq");
    } else if (
      !response.data.faq
    ) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!answer || !question) {
      return;
    }

    const data = {
      question: question,
      answer: answer
    };
    handleFaqCreate(data);
  };
  return (
    <>
      {loading && <LoadingModal />}
      <div className="right_dashboard">
        <div className="right_container">
          <PageHeader page_title={"Create Faq"} badge={"GGM, Noderr"} />
          <form className="node_create_form" onSubmit={submitHandler}>
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
              create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateFaq;
