/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-30 12:07:23
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-30 13:57:26
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
