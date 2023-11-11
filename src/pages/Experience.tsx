
import reactGif from "../assets/gif/react.jpg";
import mongoGif from "../assets/gif/mongo.gif";
import expressGif from "../assets/gif/expressjs.png";
import nodeGif from "../assets/gif/node2.png";
import js from "../assets/gif/js.png";
import sass from "../assets/gif/sass.png";
import tailwind from "../assets/gif/tailwind.png";
import ts from "../assets/gif/ts.png";
import redux from "../assets/gif/redux.png";




const Experience = () => {


  const stacks = [

    {
      name:'MongoDB',
      gif: mongoGif
    },
    {
      name:'Express JS',
      gif: expressGif
    },
    {
      name:'React',
      gif: reactGif
    },
    {
      name:'NodeJS',
      gif: nodeGif
    },
    {
      name:'Javascript',
      gif: js
    },
    {
      name:'Typescript',
      gif: ts
    },    {
      name:'Scss',
      gif: sass
    },
    {
      name:'Tailwind',
      gif: tailwind
    },

  ]
  return (
    <main
      id="experience"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="200"
      className="w-screen flex pr-10 flex-col items-center justify-center lg:min-h-screen pt-8 bg-no-repeat bg-black"
    >
      <section
        className="summary self-end   w-[55%]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h4 className="text-lg uppercase z-5 text-[#B7AB98] text-left font-medium pb-2">
          Experience
        </h4>
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="summary-text text-[#d6d1c8]  uppercase text-left text-[20px] lg:text-[60px]">
          " WIth{" "}
          <strong className="text-[#39eb8a] whitespace-nowrap">
            3 years +
          </strong>{" "}
          <strong className=" underline"> Learning</strong> and{" "}
          <strong className=" underline"> working</strong> Experience. I have
          worked As a <strong className=" underline">team member</strong> and{" "}
          <strong className=" underline">freelancer </strong>. "
        </div>

        <p className="text-lg hidden md:block uppercase underline z-5 mt-8 my-4 text-[#B7AB98] text-left font-medium pb-2" >
            Tools and Technologies
          </p>
        <div className="tech-stacks hidden md:flex flex-wrap justify-start items-center">


          {
            stacks.map((stack):JSX.Element =>{
              return(
                <li className="m-2 list-none flex justify-start items-center">
                  <img src={stack.gif} className=" w-[50px] h-[50px] rounded-full" alt="" />
                  <p className="md:text-lg text-xs text-[#39eb8a] mx-2">
                    {
                      stack.name
                    }
                  </p>
                </li>
              )
              })
          }
        </div>
      </section>
    </main>
  );
};

export default Experience;
