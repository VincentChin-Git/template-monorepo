import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div>Oops! Looks like this page has error</div>
    </div>
  );
};

export default ErrorPage;
