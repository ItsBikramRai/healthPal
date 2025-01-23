import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    secret: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      match: [/^\d{10}$/, "Please enter a valid phone number"],
    },
    
  },

  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
