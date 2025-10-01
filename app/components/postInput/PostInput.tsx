// components/PostInput.tsx
"use client";
import { useState } from "react";

export default function PostInput() {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    // send post (replace with your logic)
    console.log("post:", text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <label htmlFor="post" className="sr-only">
        Create a post
      </label>

      {/* Container with only top-right corner rounded */}
      <div
        className={
          "border border-gray-300 bg-white shadow-sm rounded-none rounded-tr-lg overflow-hidden"
        }
      >
        {/* Textarea */}
        <textarea
          id="post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full min-h-[90px] p-4 resize-none placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primaryColorDark)]"
        />

        {/* Footer with buttons (keeps square edges except top-right) */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
          <div className="text-sm text-gray-500">
            You can attach images later
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--primaryColorDark)]"
            >
              Draft
            </button>

            <button
              type="submit"
              className="px-4 py-1 text-sm text-white bg-[var(--primaryColorMain)] rounded-md hover:bg-[var(--primaryColorDark)] focus:outline-none focus:ring-2 focus:ring-[var(--primaryColorDark)]"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
