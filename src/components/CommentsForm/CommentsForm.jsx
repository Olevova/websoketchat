import { useState, useEffect } from "react";

export const CommentsForm = ({ commentText, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Please tape something..."
        value={commentText}
        onChange={onInputChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};
