import "./PageLoading.scss";
import { FingerprintSpinner } from "react-epic-spinners";

const PageLoading = () => {
  return (
    <div className="PageLoading">
      <FingerprintSpinner color="#eb9605" size={300} />
    </div>
  );
};

export default PageLoading;
