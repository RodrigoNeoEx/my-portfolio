import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {register, handleSubmit, reset, formState: { errors }, } = useForm(
    { resolver: yupResolver(schema),});

    const onSubmit = (data: { name: string; email: string; message: string; }) => {
        const formattedData = {
          from_name: data.name,
          from_mail: data.email,
          message: data.message,
        };
      
        emailjs
          .send("service_draja", "template_draja.acc", formattedData, "5ZUuDGTox67muVhZC")
          .then(() => {
            alert("Message sent successfully!");
            reset();
          })
          .catch(() => alert("Failed to send message. Please try again."));
      };
      

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Your Name</label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-lime-400"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-lime-400"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                {...register("message")}
                rows={5}
                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-lime-400"
                placeholder="Write your message"
              ></textarea>
              {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-lime-400 text-white font-bold rounded-lg hover:bg-lime-500 transition"
            >
              Send Message
            </button>
            <button type="button" disabled>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
</button>
          </form>
        </div>
        <div className="flex justify-center">
          <img
            src="/path/to/your/image.jpg"
            alt="Contact Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
