import PostInput from "@/app/components/postInput/PostInput";

export default function FeedPage() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Feed</h1>
        <p>Welcome to the Feed page!</p>
        <PostInput />
      </div>
    );
}