import axios from "axios";

const url: string = "http://localhost:2266";
// const url: string = "https://codelab-hack.onrender.com";
// localhost:2266/start-follow/6533ca10ef7f623dbbc62496/6533c4c6ef7f623dbbc62480/

export const followME = async (userID: string, friendID: string) => {
  try {
    return await axios.get(`${url}/start-follow/${userID}/${friendID}`);
  } catch (error) {
    console.log(error);
  }
};

export const showClassUsers = async (data: any) => {
  try {
    return await axios.post(`${url}/user-class`, data).then((res: any) => {
      console.log(res);
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const showAllUser = async () => {
  try {
    return await axios.get(`${url}/all-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const show = async () => {
  try {
    return await axios.get(`${url}/`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const showOneUser = async (userID: string) => {
  try {
    return await axios.get(`${url}/one-user/${userID}`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const showProjectOneUser = async (projectID: string) => {
  try {
    return await axios
      .get(`${url}/read-one-project/${projectID}`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const showProjectUser = async (userID: string) => {
  try {
    return await axios.get(`${url}/read-project/${userID}`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyUser = async (userID: string) => {
  try {
    return await axios.get(`${url}/verify-user/${userID}`);
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${url}/sign-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProject = async (data: any, userID: string) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .post(`${url}/create-project/${userID}`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const createProjectComment = async (
  data: any,
  userID: string,
  projectID: string
) => {
  try {
    return await axios
      .post(`${url}/create-comment/${userID}/${projectID}`, { title: data })
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readProjectComment = async (projectID: string) => {
  try {
    return await axios
      .get(`${url}/read-comment/${projectID}`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readProjectCommentReply = async (commentID: string) => {
  try {
    return await axios
      .get(`${url}/read-reply/${commentID}`)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileInfo = async (userID: string, data: any) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };
    return await axios
      .patch(`${url}/update-one-user/${userID}`, data, config)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfileNameInfo = async (userID: string, data: any) => {
  try {
    return await axios
      .patch(`${url}/update-one-user-info/${userID}`, { userName: data })
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
