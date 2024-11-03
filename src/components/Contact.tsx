import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css"

const Contact:React.FC = () => {
  const formRef:any = useRef();
  const [form, setForm] = useState<{
    [x: string]: string | number | readonly string[] | undefined;f_name:string, l_name:string, email:string, budget:number, message:string
}>({
    f_name: "",
    l_name: "",
    email: "",
    budget: 0,
    message: "",
  });
  const [loading, setLoading] = useState<Boolean>(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_jwe2i7o",
        "template_xywf6xc",
        {
          from_name: form.f_name + " " + form.l_name,
          to_name: "Muhammad Rizwan Malik",
          from_email: form.email,
          to_email: "malik.rizwan1777@gmail.com",
          message: `Budget: ${form.budget}$ \n` + form.message,
        },
        "xaXiDx6V6nWk2B-td"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");
          setForm({
            f_name: "",
            l_name: "",
            email: "",
            budget: 0,
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Something went wrong! Kindly check your connection and try again"
          );
        }
      );
  };
  return (
    <>
      <footer id="contact" className="px-8 lg:px-32 py-10 md:py-20 bg-primary">
        <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-[350px] lg:max-w-[400px]">
            <a
              href="/"
              className="text-secondary cursor-pointer flex font-medium text-[40px]"
            >
              PORT<p className="text-white">folio</p>
            </a>
            <p>
              Let's connect and build amazing and eye-catching websites together using the latest Technologies such as React and TailwindCSS{" "}
            </p>
            <p className="text-gradient mt-10">Email</p>
            <p>malik.rizwan1777@gmail.com</p>
            <p className="text-gradient mt-10">Phone</p>
            <p>+92 313 1579396</p>
            <p className="text-gradient mt-10 flex flex-row gap-2">
              LinkedIn{" "}
              <img
                loading="lazy"
                src="./icons/linkedin.png"
                alt="linkedin"
                className="w-5 h-5"
              />
            </p>
            <a
              href="https://www.linkedin.com/in/rizwan-malik-281888283/"
              target="_blank"
              className="hover:text-blue-500 flex flex-row justify-start items-start gap-2"
            >
              Check Profile{" "}
              <img src="./icons/link.svg" alt="link" loading="lazy" className="w-5 h-5" />
            </a>
            <p className="text-gradient mt-10 flex flex-row gap-2">
              Github{" "}
              <img
                loading="lazy"
                src="./icons/github.png"
                alt="github"
                className="w-5 h-5 bg-white rounded-xl p-[0.1rem]"
              />
            </p>
            <a
              href="https://github.com/malikrizwan177"
              target="_blank"
              className="hover:text-blue-500 flex flex-row justify-start items-start gap-2"
            >
              Check Profile{" "}
              <img src="./icons/link.svg" alt="link" loading="lazy" className="w-5 h-5" />
            </a>
          </div>
          <div className="w-full max-w-[750px]">
            <p className="text-[32px] md:text-[40px] mt-10 md:mt-0">
              Let's Work Together
            </p>
            <ScrollAnimation animateIn="fadeIn">
            <div className="mt-10">
              <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
                <div className="grid grid-cols-2 gap-x-5 md:gap-x-10  gap-y-10 w-full">
                  <div className="flex flex-col">
                    <label htmlFor="f_name">Your First Name</label>
                    <input type="text" name="f_name" id="f_name" value={form.value} onChange={handleChange} required/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="l_name">Your Last Name</label>
                    <input type="text" name="l_name" id="l_name" value={form.value} onChange={handleChange} required/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={form.value} onChange={handleChange} required/>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="budget">Budget</label>
                    <input type="number" name="budget" id="budget" placeholder="In $" value={form.value} onChange={handleChange} required/>
                  </div>
                </div>
                <div className="flex flex-col mt-10">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={5} value={form.value} onChange={handleChange} required></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-full px-8 py-2 mt-10 background-gradient"
                >
                  {loading ? "Sending..." : "Contact Me"}
                </button>
              </form>
            </div>
            </ScrollAnimation>
          </div>
        </div>
        </div>
      </footer>
      <p className="text-[10px] md:text-[14px] bg-primary-dark py-3 w-full text-center px-5">
        All Rights Reserved - Muhammad Rizwan Malik -
        @2024
      </p>
    </>
  );
};

export default Contact;