import { textDecoration } from "../utils/tranform";

function PostItem({ title, body, id }) {
  return (
    <div className="border bg-indigo-50 p-5">
      <h3 className="text-2xl font-semibold">
        {id + "." + " " + textDecoration(title)}
      </h3>
      <p>{body}</p>
    </div>
  );
}

export default PostItem;
