/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-31 21:54:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 22:35:00
 * @FilePath: /online-course-project/src/components/Loading.js
 */
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
