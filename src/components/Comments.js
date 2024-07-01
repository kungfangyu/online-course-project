/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-01 16:25:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-01 16:26:19
 * @FilePath: /online-course-project/src/components/Comments.js
 */
const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
