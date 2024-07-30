/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-14 17:08:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-14 17:29:25
 * @FilePath: /online-course-project/src/api/auth.js
 */
import service from "./axios";

export const login = async (email, password) => {
  return await service({
    url: `/login`,
    method: "post",
    data: {
      email,
      password,
    },
  });
};
