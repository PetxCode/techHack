import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const toggled = atom(false);
const toggle = atomWithStorage("stateToggle", true);
const countedNumber = atomWithStorage("countedNumber", 0);
const userData = atomWithStorage("stateUsers", "" || null);
const userDataState = atomWithStorage("userDataState", {} || null);
const createProject = atomWithStorage("createProject", {} || null);

export const useToggle = () => {
  return useAtom(toggle);
};

export const useUserData = () => {
  return useAtom(userData);
};

export const useUserDataState = () => {
  return useAtom(userDataState);
};

export const useCreateProject = () => {
  return useAtom(createProject);
};

export const useCountedNumber = () => {
  return useAtom(countedNumber);
};

// showOneUser
