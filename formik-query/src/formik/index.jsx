import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
const FormikStructure = () => {
  const yupSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir e-posta adresi girin")
      .required("E-posta adresi girilmesi zorunludur"),
    password: Yup.string()

      .min(4, "Minimum 4 karakterden oluşan bir şifre girmelisin")
      .max(8, "Maksimum 8 karakterden oluşan bir şifre girmelisin")
      .required("Şifre alanı girilmesi zorunludur"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password")],
      "Şifre alanları uyuşmuyor"
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <>
      <h2>Component</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={yupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field type="email" name="email" placeholder="E-Mail" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Şifre" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <Field
                type="password"
                name="passwordConfirm"
                placeholder="Şifre Tekrar"
              />
              <ErrorMessage name="passwordConfirm" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {" "}
              Giriş
            </button>
          </Form>
        )}
      </Formik>

      <hr />
      <h2>Hook </h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="E-mail"
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Şifre"
            name="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="passwordConfirm">Şifre Tekrar</label>
          <input
            type="password"
            id="passwordConfirm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
            placeholder="Şifre Tekrar"
            name="passwordConfirm"
          />
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <div>{formik.errors.passwordConfirm}</div>
          ) : null}
        </div>
        <button type="submit">Giriş</button>
      </form>
    </>
  );
};

export default FormikStructure;
