'use client';

import { useState } from 'react';
import { useFormik, FormikValues } from 'formik';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { contactSchema } from '@/schemas';

const ContactForm = () => {
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleFormSubmit = async (values: FormikValues, actions: any) => {
    if (!privacyAccepted) {
      // Show an error message or perform any desired action to inform the user
      return;
    }
    try {
      // Make call to send-email file in pages/api directory
      await axios.post('/api/send-email', values);

      // Display a success message
      toast.success('Email sent successfully');

      // Reset the form
      actions.resetForm();
    } catch (error) {
      console.error('Failed to send email:', error);
      // Display an error message
      toast.error('Failed to send email');
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: handleFormSubmit,
  });

  const handlePrivacyAcceptance = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrivacyAccepted(event.target.checked);
  };

  return (
    <div className="rounded-lg bg-white p-[62px] w-[470px] drop-shadow-md z-10 dark:bg-black dark:border dark:border-white/20">
      <h1 className="text-3xl font-bold">Email Us Here</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-5 flex flex-col gap-6">
          <div className="">
            <label
              htmlFor="name"
              className="font-medium text-sm"
            >
              Full name
            </label>
            <input
              className={`w-full border rounded-md px-3 py-2 dark:border-white/20 bg-transparent ${
                errors.name && touched.name ? 'input-error' : ''
              }`}
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder=""
              onBlur={handleBlur}
            />

            {errors.name && touched.name && (
              <p className="text-red-600 text-xs">Please enter your name</p>
            )}
          </div>

          {/* End .col */}

          <div className="">
            <label
              htmlFor="email"
              className="font-medium text-sm mb-2"
            >
              Email address
            </label>
            <input
              className={`w-full border rounded-md px-3 py-2 dark:border-white/20 bg-transparent ${
                errors.email && touched.email ? 'input-error' : ''
              }`}
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder=""
              onBlur={handleBlur}
            />

            {errors.email && touched.email && (
              <p className="text-red-600 text-xs">Please enter your email</p>
            )}
          </div>

          {/* End .col */}

          <div className="">
            <label
              htmlFor="subject"
              className="font-medium text-sm mb-2"
            >
              Subject
            </label>
            <input
              className={`w-full border rounded-md px-3 py-2 dark:border-white/20 bg-transparent`}
              value={values.subject}
              onChange={handleChange}
              id="subject"
              type="text"
              placeholder=""
              onBlur={handleBlur}
            />
          </div>

          {/* End .col */}

          <div>
            <div>
              <label
                htmlFor="message"
                className="font-medium text-sm mb-2"
              >
                Message
              </label>
              <textarea
                className={`w-full border rounded-md px-3 py-2 resize-none dark:border-white/20 bg-transparent ${
                  errors.message && touched.message ? 'input-error' : ''
                }`}
                rows={6}
                value={values.message}
                onChange={handleChange}
                id="message"
                placeholder=""
                onBlur={handleBlur}
              ></textarea>

              {errors.message && touched.message && (
                <p className="text-red-600 text-xs">
                  Please enter your message
                </p>
              )}
            </div>
            {/* End .col */}

            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white rounded-md py-2 mt-5 hover:bg-primary-dark"
                disabled={isSubmitting}
                onClick={() => setSubmitted(true)}
              >
                Send
              </button>
            </div>
            {/* End button submit */}
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={privacyAccepted}
              onChange={handlePrivacyAcceptance}
            />
            <span className="mx-1 text-xs">I have read and accept the</span>

            <a
              href="/privacy"
              className="!text-primary hover:text-primary-dark text-xs"
            >
              Privacy Policy
            </a>

            {submitted && !privacyAccepted && (
              <div className="text-red-500 text-xs">
                Please accept the privacy policy
              </div>
            )}
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactForm;
