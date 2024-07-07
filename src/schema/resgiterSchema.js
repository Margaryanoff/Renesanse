import * as Yup from "yup";
const year = new Date().getFullYear().toFixed(0);
const month = new Date().getMonth().toFixed(0);
const day = new Date().getDate().toFixed(0);

export const registerSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Minimum 2 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Minimum 2 letters")
        .max(20, "Max 20 letters")
        .required("Required"),
    email: Yup.string().email("Email is not valid").required("Required"),
    age: Yup.number().integer().positive().required("Required"),
});

export const reigsterValues = {
    id: Date.now().toString(),
    firstName: "",
    lastName: "",
    age: "",
    nickname: "",
    password: "",
    gender: "",
    email: "",
    bio: "",
    birthdayDate: "",
    loginDate: `${year}-${month}-${day}`,
    shopping: [
        {
            id: "",
            itemName: "",
            itemPrice: "",
            itemPainter: "",
            itemDate: "",
        },
    ],
    whishlist: [
        {
            id: "",
            itemName: "",
            itemPrice: "",
            itemPainter: "",
            itemDate: "",
        },
    ],
    interests: ["", "", ""],
};
