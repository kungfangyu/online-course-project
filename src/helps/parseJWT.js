/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-31 00:15:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 00:18:51
 * @FilePath: /online-course-project/src/helps/parseJWT.js
 */
export const parseJwt = (token) => {
  const strings = token.split(".");
  const jwtInfo = JSON.parse(
    decodeURIComponent(
      escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))
    )
  );
  return jwtInfo;
};
