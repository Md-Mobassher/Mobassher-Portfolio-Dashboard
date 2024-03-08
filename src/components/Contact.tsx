import { useForm } from "react-hook-form";
import { FcManager } from "react-icons/fc";
import { GoLocation } from "react-icons/go";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: Record<string, string>) => {
    try {
      console.log(data);
      await emailjs.send("service_6ioyfyn", "template_vcxutb8", data, {
        publicKey: "KYzXXSYc5Sml-ySqX",
      });
      toast.success("Successfully Contacted.");
      reset();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(`FAILED to Contact... ${err.message}`);
      } else {
        toast.error("FAILED to Contact...");
      }
    }
  };

  return (
    <div id="contact" className="lg:mt-20 md:mt-18 mt-10 py-6 lg:px-20">
      <Container>
        <Title title="Hire Me" />
        <div className="lg:flex md:flex lg:mt-10 mt-6 justify-center items-start">
          <div className="flex-1  lg:mb-10 mb-8 ">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center">
              Contact <span className="text-primary"> Info</span>
            </h1>
            <div className="max-w-sm mx-auto mt-6">
              <div className="flex justify-start max-w-sm items-center lg:mt-12 mt-6">
                <div>
                  <FcManager className="w-10 h-10 mr-6 text-primary"></FcManager>
                </div>
                <div>
                  <h2 className="font-bold">Name</h2>
                  <h2 className="text-primary font-semibold">
                    Md Mobassher Hossain
                  </h2>
                </div>
              </div>
              <div className="flex justify-start max-w-sm items-center mt-7">
                <div>
                  <GoLocation className="w-10 h-10 mr-6  text-primary"></GoLocation>
                </div>
                <div>
                  <h2 className="font-bold">Location</h2>
                  <h2 className="text-primary font-semibold">
                    Tograihat, Rajarhat, Kurigram, Bangladesh-5600.
                  </h2>
                </div>
              </div>
              <div className="flex justify-start max-w-sm items-center mt-7">
                <div>
                  <TbPhoneCall className="w-10 h-10 mr-6 text-primary"></TbPhoneCall>
                </div>
                <div>
                  <h2 className="font-bold">Call / WhatsApp</h2>
                  <h2 className="text-primary font-semibold">
                    <a href="tell:+8801706060647" className=" text-primary">
                      +88-01706060647
                    </a>
                  </h2>
                </div>
              </div>
              <div className="flex justify-start max-w-sm items-center mt-7">
                <div>
                  <HiOutlineMailOpen className="w-10 h-10 mr-6 text-primary"></HiOutlineMailOpen>
                </div>
                <div>
                  <h2 className="font-bold">Email</h2>
                  <h2 className="text-primary font-semibold">
                    <a
                      target="_black"
                      href="mailto:mdmobassherhossain1@gmail.com"
                      className=" text-primary"
                    >
                      mdmobassherhossain1@gmail.com
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold text-center ">
              Contact <span className="text-primary"> Me</span>
            </h1>
            <div className=" max-w-sm mx-auto mt-6">
              <div className=" bg-base-100 ">
                <div className="">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered input-primary w-full "
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors?.name?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {"Name is Required"}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="form-control w-full ">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered input-primary w-full "
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is Required",
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid Email",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.email?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {"Email is Required"}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span className="label-text-alt text-red-500">
                            {"Provide a valid Email"}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="form-control w-full ">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered input-primary w-full "
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Subject is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.subject?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {"Subject is Required"}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="form-control w-full ">
                      <textarea
                        placeholder="Message"
                        className="textarea textarea-bordered textarea-primary h-24 w-full "
                        {...register("message", {
                          required: {
                            value: true,
                            message: "Message is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.message?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {"Message is Required"}
                          </span>
                        )}
                      </label>
                    </div>

                    <input
                      className="btn w-1/2 mx-auto btn-primary hover:btn-secondary border-0 max-w-xs text-white"
                      type="submit"
                      value="Contact"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
