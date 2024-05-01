import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CommonDropdown from "../Dropdown/CommonDropdown";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

const FormRightSection = () => {
  return (
    <>
      <div className="md:w-[45%] w-full">
        <Formik
          initialValues={{
            petName: "",
            lastName: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          <div>
            <div className="mb-6 mt-10 md:mt-0">
              <div>
                <label className="text-[14px] uppercase w-full">
                  Pet's Name
                </label>
              </div>
              <div className="py-3 px-6 border border-black rounded-full">
                <Field
                  id="petName"
                  name="petName"
                  type="text"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div className="md:flex justify-between w-full mb-6">
              <div className="md:w-[48%] w-full md:mb-0 mb-6">
                <div>
                  <label className="text-[14px] uppercase w-full">
                    Select Pets Category
                  </label>
                </div>
                <div>
                  <div className="dropdown inline-block relative w-full mt-4 md:mt-0">
                    <button className="px-6 py-3 border border-black rounded-full w-full  text-gray-700 font-semibold items-center flex justify-between z-1">
                      {/* <span className="mr-1">Dog</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg> */}
                      <CommonDropdown
                        animal="Dog"
                        animal1="Cat"
                        animal2="Dog"
                        animal3="Cat"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:w-[48%] w-full">
                <div>
                  <label className="text-[14px] uppercase w-full">
                    Select breads
                  </label>
                </div>
                <div className="px-6 py-3 border border-black rounded-full w-full  text-gray-700 font-semibold items-center flex justify-between z-1">
                  {/* <input
                    type="text"
                    placeholder="Pemarian"
                    className="py-3 px-6 border border-black rounded-full w-full outline-none"
                  /> */}

                  <CommonDropdown
                    animal="Pemarian"
                    animal1="German Shepherd"
                    animal2="Siberian Husky"
                    animal3="Shih Tzu"
                  />
                </div>
              </div>
            </div>

            <div className="md:flex justify-between w-full mb-6">
              <div className="md:w-[48%] w-full md:mb-0 mb-6">
                <div>
                  <label className="text-[14px] uppercase w-full">
                    Date of birth
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="03/01/2023"
                    className="py-3 px-6 border border-black rounded-full w-full outline-none"
                  />
                </div>
              </div>

              <div className="md:w-[48%] w-full">
                <div>
                  <label className="text-[14px] uppercase w-full">
                    select Location
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="New york"
                    className="py-3 px-6 border border-black rounded-full w-full outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div>
                <label className="text-[14px] uppercase w-full">
                  What's your address?
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="py-3 px-6 border border-black rounded-full w-full outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <div>
                <label className="text-[14px] uppercase w-full">
                  About Pets
                </label>
              </div>
              <div>
                <textarea
                  rows={5}
                  cols={45}
                  className="py-3 px-6 border border-black rounded-xl w-full outline-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="lg:py-4 lg:px-6 md:py-3 md:px-3 px-2 py-3 bg-[#FF553E] rounded-full w-full outline-none text-[20px] text-white"
            >
              Submit
            </button>
          </div>
        </Formik>
      </div>
    </>
  );
};

export default FormRightSection;
