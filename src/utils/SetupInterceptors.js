// import { toast } from "react-toastify";

export const SetupInterceptors = (httpAuthAxios) => {
  httpAuthAxios.interceptors.request.use(
    null,
    // (config) => {
    //   config.headers["token"] = `${localStorage.getItem("token")}`;
    //   config.headers["content-type"] = "application/json";
    //   return config;
    // },
    (error) => {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
      if (!expectedError) {
        // toast.error("Oh my something just went wrong!");
        console.log("something went wrong");
      }

      return Promise.reject(error);
    }
  );
};

export default SetupInterceptors;
