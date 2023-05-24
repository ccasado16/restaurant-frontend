import axios from "axios";
import { ILogin } from "../models/IAuth";

const authLogin = async (model: ILogin): Promise<boolean> => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/auth/login/",
      model
    );

    // prints the access and refresh tokens
    if (data) console.log(data);

    return true;
  } catch (error: any) {
    console.log("error login");
    return false;
  }
};

export default authLogin;
