export default function Skills() {
  const pl_image_data = [
    ["programming_language/python.png", "Python"],
    ["programming_language/js.png", "JavaScript"],
    ["programming_language/java.png", "Java"],
    ["programming_language/sql.png", "SQL"],
    ["programming_language/html.png", "HTML"],
    ["programming_language/css.png", "CSS"],
  ];

  const framework_image_data = [
    ["frameworks/pytorch.png", "Pytorch"],
    ["frameworks/tensorflow.png", "Tensorflow"],
    ["frameworks/numpy.png", "Numpy"],
    ["frameworks/mongo.png", "MongoDB"],
    ["frameworks/node.png", "Node.js"],
    ["frameworks/react.png", "React.js"],
    ["frameworks/tailwind.png", "Tailwind"],
  ];

  const technology_image_data = [
    ["technologies/git.png", "git"],
    ["technologies/computerVision.png", "Computer Vision"],
    ["technologies/generativeAI.png", "Generative AI"],
    ["technologies/crypto.png", "Cryptography"],
    ["technologies/windows.png", "Windows"],
  ];

  const dev_image_data = [
    ["developerTools/colab.png", "Google Colab"],
    ["developerTools/anaconda.png", "Anaconda"],
    ["developerTools/vscode.png", "VS Code"],
    ["developerTools/pycharm.png", "PyCharm"],
  ];
  return (
    <section
      id="skill"
      className="flex flex-col w-screen items-center min-h-screen"
    >
      <div className="bg-transparent text-3xl font-bold text-white p-5 tittle">
        Skills
      </div>
      <div className="relative flex items-center p-10 pt-4 justify-center w-screen">
        <h1 className="text-white bg-text1 w-1/6 py-2 rounded-md text-center">
          Programming Languages
        </h1>
        <div className="relative flex justify-center items-end w-2/3">
          {pl_image_data.map((item) => (
            <div className="flex flex-col items-center skills py-2">
              <img className="bg-inherit w-1/2" src={item[0]} />
              <h1 className="text-white font-medium mt-1 bg-transparent">
                {item[1]}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center p-10 justify-center w-screen">
        <h1 className="text-white bg-text2 w-1/6 text-center py-2 rounded-md">
          Frameworks
        </h1>
        <div className="relative flex justify-center items-end w-2/3 ">
          {framework_image_data.map((item) => (
            <div className="flex flex-col items-center skills py-2">
              <img className="bg-inherit w-1/2" src={item[0]} />
              <h1 className="text-white font-medium mt-1 bg-transparent">
                {item[1]}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center p-10 justify-center w-screen">
        <h1 className="text-white bg-text3 w-1/6 text-center py-2 rounded-md">
          Technologies
        </h1>
        <div className="relative flex justify-center items-end w-2/3">
          {technology_image_data.map((item) => (
            <div className="flex flex-col items-center skills py-2">
              <img className="bg-inherit w-1/2" src={item[0]} />
              <h1 className="bg-transparent text-white font-medium mt-1">
                {item[1]}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center p-10 justify-center w-screen">
        <h1 className="text-white bg-text4 w-1/6 text-center py-2 rounded-md">
          Developer Tools
        </h1>
        <div className="relative flex justify-center items-end w-2/3">
          {dev_image_data.map((item) => (
            <div className="flex flex-col items-center skills py-2">
              <img className="bg-inherit w-1/2" src={item[0]} />
              <h1 className="bg-transparent text-white font-medium mt-1">
                {item[1]}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
