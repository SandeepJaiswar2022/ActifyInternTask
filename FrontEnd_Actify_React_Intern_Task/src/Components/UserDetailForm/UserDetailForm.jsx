import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../../States/UserProfile/UserProfileSlice";
import { useNavigate } from "react-router-dom";

// Validation Schema
const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contactNo: yup
        .string()
        .matches(/^[0-9]{10}$/, "Contact No. must be 10 digits")
        .required("Contact No. is required"),
    address: yup.string().required("Address is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    pincode: yup
        .string()
        .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
        .required("Pincode is required"),
});

const UserDetailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const onSubmit = (data) => {
        // console.log("Form Data Submitted: ", data);
        dispatch(addUser(data));
        alert("Form submitted successfully!");
        navigateTo("/allAccounts");
    };

    return (
        <div className="container mx-auto px-6 border-2 rounded-md m-4 py-8 max-w-3xl">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 text-white text-center ">
                <h1 className="text-2xl font-bold">Personal Details</h1>
                <p>Make changes to your profile account here.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="firstName" className="font-semibold">First Name *</label>
                        <input
                            type="text"
                            id="firstName"
                            {...register("firstName")}
                            className={`w-full p-2 focus:outline-none border border-gray-500  rounded ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                        />
                        <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="lastName" className="font-semibold">Last Name *</label>
                        <input
                            type="text"
                            id="lastName"
                            {...register("lastName")}
                            className={`w-full p-2 focus:outline-none border border-gray-500  rounded ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                        />
                        <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                    </div>
                </div>

                {/* Email and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="email" className="font-semibold">Email *</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className={`w-full p-2 focus:outline-none border border-gray-500  rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        />
                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="contactNo" className="font-semibold">Contact No. *</label>
                        <input
                            type="text"
                            id="contactNo"
                            {...register("contactNo")}
                            className={`w-full p-2 focus:outline-none border border-gray-500  rounded ${errors.contactNo ? "border-red-500" : "border-gray-300"}`}
                        />
                        <p className="text-red-500 text-sm">{errors.contactNo?.message}</p>
                    </div>
                </div>

                {/* Address */}
                <div className="grid gap-2">
                    <label htmlFor="address" className="font-semibold">Address *</label>
                    <textarea
                        id="address"
                        {...register("address")}
                        className={`w-full p-2 focus:outline-none border border-gray-500  rounded ${errors.address ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-red-500 text-sm">{errors.address?.message}</p>
                </div>

                {/* State, City */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="state" className="font-semibold">State *</label>
                        <input
                            type="text"
                            id="state"
                            {...register("state")}
                            className={`w-full p-2 focus:outline-none border border-gray-500  rounded ${errors.state ? "border-red-500" : "border-gray-300"}`}
                        />
                        <p className="text-red-500 text-sm">{errors.state?.message}</p>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="city" className="font-semibold">City *</label>
                        <input
                            type="text"
                            id="city"
                            {...register("city")}
                            className={`w-full p-2 focus:outline-none border border-gray-500  rounded ${errors.city ? "border-red-500" : "border-gray-300"}`}
                        />
                        <p className="text-red-500 text-sm">{errors.city?.message}</p>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="pincode" className="font-semibold">Pincode *</label>
                        <input
                            type="text"
                            id="pincode"
                            {...register("pincode")}
                            className={`w-full p-2 focus:outline-none border border-gray-500 rounded ${errors.pincode ? "border-red-500" : "border-gray-300"}`}
                        />
                        <p className="text-red-500 text-sm">{errors.pincode?.message}</p>
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-indigo-700 text-white text-lg p-3 rounded-md hover:bg-blue-600"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default UserDetailForm
