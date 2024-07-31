/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-30 12:07:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 18:50:43
 * @FilePath: /online-course-project/src/api/courses.js
 */
import service from "./axios";

export const getCourseList = async (category) => {
  return await service({
    url: `/course/category`,
    method: "get",
    params: { category },
  });
};

export const getCourse = async (courseId) => {
  return await service({
    url: `/course/${courseId}`,
    method: "get",
  });
};

export const getCourseListByUser = async (userId, category) => {
  return await service({
    url: `/course/user/${userId}`,
    method: "get",
    params: { category },
  });
};
