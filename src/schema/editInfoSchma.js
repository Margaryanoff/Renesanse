import * as Yup from "yup";

export const editPersonalInfromationInitialValues = {
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    bio: "",
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
};

export const EPIvalidation = Yup.object().shape({
    firstName: Yup.string().min(4, "Min 4 letters").max(20, "Max 20 letters").optional(),
    lastName: Yup.string().min(4, "Min 4 letters").max(20, "Max 20 letters").optional(),
    nickname: Yup.string().min(4, "Min 4 letters").max(20, "Max 20 letters").optional(),
    email: Yup.string().email().optional(),
    bio: Yup.string().min(5, "Min 5 letters").max(50, "Max 50 letters").optional(),
    oldPassword: Yup.string()
        .min(4, "Min 4 letters")
        .max(20, "Max 20 letters")
        .optional(),
    newPassword: Yup.string()
        .min(4, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter"),
    newPasswordConfirm: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        'Must match "New Password" field value'
    ),
});
