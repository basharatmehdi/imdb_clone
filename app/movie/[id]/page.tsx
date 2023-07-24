const MovieDetail = () => {
  return (
    <div>
      <h5 className="font-semibold mb-3">Comments</h5>
      <hr />

      <form>
        <textarea
          name="comment"
          placeholder="Add a Comment..."
          className="w-full text-sm mt-6 border border-cyan-400 py-2 px-4 focus:border focus:outline-none focus:border-cyan-600 rounded-lg resize-none"
        ></textarea>
        <button
          className="px-4 py-1 text-sm bg-teal-200 rounded-md mt-2 mb-4 font-semibold hover:bg-teal-300 transition duration-200"
          type="submit"
        >
          Post Comment
        </button>
      </form>
      <hr />
      <div className="bg-teal-100/40 rounded p-2 mt-4">This is a comment.</div>
    </div>
  );
};
export default MovieDetail;
