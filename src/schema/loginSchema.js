import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(3, "Min 3 letters")
        .max(20, "Maximum 20 letters")
        .required("Required"),
    password: Yup.string()
        .min(4, "Minimum 4 letters")
        .max(20, "Maximum 20 letters")
        .required("Required"),
});

export const loginValues = {
    nickname: "",
    password: "",
};
