import "./style.scss";
import tags from "language-tags";

const BasicInfo = (props) => {
    const language = tags.language('en');
    const convertedLan = language.data.record.Description;
  return (
    <div className="basic__container">
      <h1>{convertedLan[0]}</h1>
      <h1>{props.props.release_date}</h1>
    </div>
  );
};

export default BasicInfo;
