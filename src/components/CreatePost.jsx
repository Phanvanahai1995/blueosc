import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { createPost } from "../store/postSlice";

const postValidation = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title is min 3 characters.")
    .max(100, "Title is min 100 characters."),
  body: Yup.string().required("Body is required"),
});

function CreatePost() {
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(createPost(values));
    actions.resetForm();
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      enableReinitialize
      initialValues={{ title: "", body: "" }}
      validationSchema={postValidation}
    >
      {({
        errors,
        touched,
        handleBlur,
        handleChange,
        values,
        isSubmitting,
      }) => (
        <Form className="flex flex-col w-[50%] mb-10 mx-auto mt-10 gap-3">
          <input
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className="outline-none border border-slate-500 px-4 py-2 rounded-md"
            type="text"
            name="title"
            placeholder="Enter title post"
          />
          <span className="text-red-500">
            {errors.title && touched.title && errors.title}
          </span>
          <input
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            className="outline-none border border-slate-500 px-4 py-2 rounded-md"
            type="text"
            name="body"
            placeholder="Enter body post"
          />
          <span className="text-red-500">
            {errors.body && touched.body && errors.body}
          </span>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-sky-500 text-white py-2 w-[200px] mx-auto rounded-md hover:shadow hover:shadow-sky-500/100 transition-shadow duration-300"
          >
            {isSubmitting ? "Sending...." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CreatePost;
