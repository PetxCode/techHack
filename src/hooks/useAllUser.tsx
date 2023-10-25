import useSWR from "swr";
import {
  createProjectComment,
  readProjectComment,
  readProjectCommentReply,
  showAllUser,
  showClassUsers,
  showOneUser,
  showProjectOneUser,
  showProjectUser,
} from "../api/API";

export const useAllUser = () => {
  const { data } = useSWR("all-user", showAllUser, { refreshInterval: 1000 });

  return { data };
};

export const useClassUser = (classData: string) => {
  const { data } = useSWR(
    ["user-class", classData],
    () => showClassUsers(classData),
    {
      refreshInterval: 1000,
    }
  );

  return { data };
};

export const useProjectUser = (userID: string) => {
  const { data } = useSWR(
    `read-project/${userID}`,
    () => showProjectUser(userID),
    { refreshInterval: 1000 }
  );

  return { data };
};

export const useOneUser = (userID: string) => {
  const { data: userData } = useSWR(
    `one-user/${userID}`,
    () => showOneUser(userID),
    { refreshInterval: 1000 }
  );

  return { userData };
};

export const useOneProject = (projectID: string) => {
  const { data } = useSWR(
    `one-read-project/${projectID}`,
    () => showProjectOneUser(projectID),
    { refreshInterval: 1000 }
  );

  return { data };
};

export const useProjectComment = (userID: string, projectID: string) => {
  const { data }: any = useSWR(
    `read-comment/${projectID}`,
    () => createProjectComment(data, userID, projectID),
    { refreshInterval: 1000 }
  );

  return { data };
};

export const useProjectCommentRead = (projectID: string) => {
  const { data: projectData }: any = useSWR(
    `read-comment/${projectID}`,
    () => readProjectComment(projectID),
    { refreshInterval: 1000 }
  );

  return { projectData };
};

export const useProjectCommentReadReply = (commentID: string) => {
  const { data: commentData }: any = useSWR(
    `read-reply/${commentID}`,
    () => readProjectCommentReply(commentID),
    { refreshInterval: 1000 }
  );

  return { commentData };
};
