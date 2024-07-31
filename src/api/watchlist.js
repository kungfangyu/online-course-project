/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-31 11:52:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 19:34:43
 * @FilePath: /online-course-project/src/api/watchlist.js
 */
import service from "./axios";

export const addCourseToWatchList = async (userId, courseId) => {
  return await service({
    url: `/watchlist/${userId}/addCourse`,
    method: "post",
    data: { courseId },
  });
};

export const getWatchList = async (userId) => {
  return await service({
    url: `/watchlist/${userId}`,
    method: "get",
  });
};

export const deleteCourseFromWatchList = async (userId, courseId) => {
  return await service({
    url: `/watchlist/removeCourse`,
    method: "delete",
    data: { userId, courseId },
  });
};
