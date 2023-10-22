import useSWR from "swr";
import {
  showAllUser,
  showOneUser,
  showProjectOneUser,
  showProjectUser,
} from "../api/API";

export const useAllUser = () => {
  const { data } = useSWR("all-user", showAllUser);

  return { data };
};

export const useProjectUser = (userID: string) => {
  const { data } = useSWR(`read-project/${userID}`, () =>
    showProjectUser(userID)
  );

  return { data };
};

export const useOneUser = (userID: string) => {
  const { data: userData } = useSWR(`one-user/${userID}`, () =>
    showOneUser(userID)
  );

  return { userData };
};

export const useOneProject = (projectID: string) => {
  const { data } = useSWR(`one-read-project/${projectID}`, () =>
    showProjectOneUser(projectID)
  );

  return { data };
};
