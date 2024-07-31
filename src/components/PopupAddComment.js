/*
 * @Author: Fangyu Kung
 * @Date: 2024-07-31 22:42:05
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-07-31 23:28:10
 * @FilePath: /online-course-project/src/components/PopupAddComment.js
 */
"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export const PopupAddComment = ({ handleClose, open }) => {
  const [content, setContent] = useState("");

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Comment</DialogTitle>
        <DialogContent>
          <TextField
            sx={{
              width: "100%",
              mt: 2,
            }}
            label="comment"
            multiline
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
