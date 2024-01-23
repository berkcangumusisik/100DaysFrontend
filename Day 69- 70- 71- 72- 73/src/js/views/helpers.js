import { TIMEOUT_SEC } from "../config";
import { async } from "regenerator-runtime";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  }
};
