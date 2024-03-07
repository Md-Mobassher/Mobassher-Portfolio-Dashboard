const PersonalInfo = () => {
  return (
    <section className="lg:max-w-2/3 mt-14">
      <h2 className="lg:text-4xl text-3xl font-bold  text-center lg:mb-12">
        Personal <span className="text-primary">Informations</span>
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 justify-center items-center">
        <div className=" justify-start mr-10">
          <p className="mb-3 font-semibold ">
            Name:{" "}
            <span className="text-primary hover:text-secondary">
              Md Mobassher Hossain
            </span>
          </p>
          <p className="mb-3 font-semibold ">
            Address:{" "}
            <span className="text-primary hover:text-secondary">
              Rajarhat, Kurigram, Bangladesh
            </span>
          </p>
          <p className="mb-3 font-semibold ">
            Nationality:{" "}
            <span className="text-primary hover:text-secondary">
              Bangladeshi
            </span>
          </p>
          <p className="mb-3 font-semibold ">
            Age: <span className="text-primary hover:text-secondary">25</span>
          </p>
          <p className="mb-3 font-semibold ">
            Language:{" "}
            <span className="text-primary hover:text-secondary">
              Bengali (Native), English
            </span>
          </p>
        </div>

        <div className="justify-start">
          <p className="mb-3 font-semibold ">
            Phone:{" "}
            <a
              href="tell:+8801706060647"
              className=" text-primary hover:text-secondary ml-2 "
            >
              +88-01706060647
            </a>
          </p>

          <p className="mb-3 font-semibold ">
            Email:{" "}
            <a
              target="_black"
              href="mailto:mdmobassherhossain1@gmail.com"
              className=" text-primary hover:text-secondary ml-2 "
            >
              mdmobassherhossain1@gmail.com
            </a>
          </p>

          <p className="mb-3 font-semibold ">
            Github:{" "}
            <a
              target="_black"
              href="https://github.com/Md-Mobassher"
              className=" text-primary hover:text-secondary ml-2 "
            >
              https://github.com/Md-Mobassher{" "}
            </a>
          </p>

          <p className="mb-3 font-semibold ">
            Linkedin:{" "}
            <a
              target="_black"
              href="https://www.linkedin.com/in/md-mobassher"
              className=" text-primary hover:text-secondary ml-2 "
            >
              https://www.linkedin.com/in/md-mobassher{" "}
            </a>
          </p>

          <p className="mb-3 font-semibold ">
            Facebook:{" "}
            <a
              target="_black"
              href="https://www.facebook.com/mdmobassherf"
              className=" text-primary hover:text-secondary ml-2 "
            >
              https://www.facebook.com/mdmobassherf{" "}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
