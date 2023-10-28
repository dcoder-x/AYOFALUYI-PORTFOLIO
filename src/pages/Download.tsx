import React from "react";
import face from "../assets/images/halfFace.jpg";
import Lottie from "lottie-react";

const Download = () => {
    const documents:{name:string,file_url:string,lottie:string}[] = [
        {
            name:'Resume',
            file_url:'',
            lottie:''
        }
    ]

  return (
    <main
      className="w-screen flex flex-col items-center justify-center min-h-screen pt-8 bg-no-repeat"
      style={{
        background: `linear-gradient(0,rgb(0,0,0,0.6),rgb(0,0,0,0.4)),url(${face})`,
      }}
    >
      <section className="summary  w-[70%]">
        <h4 className="text-lg uppercase text-[#B7AB98] text-left font-medium pb-2">
          Download documents
        </h4>
        <div className="flex .item-center justify-evenly">
          {
            documents.map((document):JSX.Element=>(
                <div className="flex flex-col item-center">
                    <Lottie animationData={document.lottie}/>
                    <a href={document.file_url} download={document.name}>
                        <button className="rounded p-2 bg-green-600 text-white font-semibold">
                            Download
                        </button>
                    </a>
                </div>
            ))
          }
        </div>
      </section>
    </main>
  );
};

export default Download;
