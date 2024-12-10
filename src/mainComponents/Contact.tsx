import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useColorContext } from "@/context/ColorContext";
import { useScreen } from "@/context/ScreenContext";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
    const {register, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });
    const { contactColor } = useColorContext();
    const {isMobile, loading, isLoading, horizontalMob} = useScreen();

    const onSubmit = (data: { name: string; email: string; message: string; }) => {
        const formattedData = {
          from_name: data.name,
          from_mail: data.email,
          message: data.message,
        };
        isLoading(true)
        emailjs
          .send("service_draja", "template_draja.acc", formattedData, "5ZUuDGTox67muVhZC")
          .then(() => {
            setTimeout(() => {
                isLoading(false)
                reset();
              }, 2700); 
        })
        .catch(() => {
            setTimeout(() => {
                isLoading(false)
                alert("Failed to send message. Please try again.")
            }, 2700);            
        });
    };      
    
    return (
        <section id="contact" className={`${contactColor ? "bg-black py-56" : "bg-white py-20"}  px-8 font-helv font-bold relative`}>
            <div className={`container mx-auto grid ${isMobile ? "grid-cols-1" : "grid-cols-2" } gap-8 items-center`}>
                <div 
                    className={`p-8 rounded-lg bg-black ${contactColor 
                        ? "shadow-[0_0_10px_5px_rgb(212,225,87,0.75)]" 
                        : "shadow-[0_0_10px_2px_rgb(0,0,0,0.65)]"}`}
                >
                    {loading 
                        ? 
                        <motion.div
                            className="relative flex justify-around"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src="/assets/loadMail.gif"
                                alt="Contact Illustration"
                                className="absolute w-96"
                            />
                        </motion.div>
                        : <></>
                    }
                    <h2 className="text-2xl font-bold text-lime-400 mb-6">Get in Touch</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>                
                            <label htmlFor="name" className="block text-sm font-medium text-lime-400"> Your Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register("name")}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-lime-400"
                                placeholder="Enter your name"
                                disabled={loading}
                            />
                                {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-lime-400">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-lime-400"
                                placeholder="Enter your email"
                                disabled={loading}
                            />
                            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-lime-400">Message</label>
                            <textarea
                                id="message"
                                {...register("message")}
                                rows={5}
                                className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-lime-400"
                                placeholder="Write your message"
                                disabled={loading}
                            />
                            {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-500 transition"
                            disabled={loading}
                        >
                            {loading ? "Sending Message" : "Send Message" }
                        </button>            
                    </form>
                </div>
                {!isMobile && 
                    <div className="flex justify-center">
                        <img
                            src="/assets/mail.gif"
                            alt="Contact Illustration"
                            className="w-full min-w-[33rem]"
                        />
                    </div>
                }
            </div>
        </section>
    );
};

export default Contact;
