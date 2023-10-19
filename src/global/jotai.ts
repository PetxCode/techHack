import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const toggled = atom(false);
const toggle = atomWithStorage("stateToggle", false);
const userData = atomWithStorage("stateUsers", "" || null);
const userDataState = atomWithStorage("userDataState", {} || null);

export const useToggle = () => {
  return useAtom(toggled);
};

export const useUserData = () => {
  return useAtom(userData);
};

export const useUserDataState = () => {
  return useAtom(userDataState);
};
