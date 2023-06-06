import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (value) => value !== "",
  message: (props) => `the "${props.path}" field cannot be empty!`,
});
