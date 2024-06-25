import { useEffect } from "react";
import AuthorsContainer from "../../components/customerComponents/authors/AuthorsContainer";

const AuthorsHome = () => {
  useEffect(() => {
    document.title = "PickBazar";
  });
  return (
    <div className="mt-20">
      <AuthorsContainer />
    </div>
  );
};

export default AuthorsHome;
