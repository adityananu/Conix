import React from "react";

function InformationBox() {
  return (
    <div className="container mx-auto mt-8 px-3 lg:px-10 ">
      <div className="ml-4">
        <h1 className="text-3xl font-semibold  mb-4">Team</h1>
        <p className=" mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          felis euismod, vehicula quam eu, placerat libero.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          felis euismod, vehicula quam eu, placerat libero.
        </p>
      </div>

      <div className="flex flex-col lg:flex w-full justify-center items-center px-4 ">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:flex items-center gap-3 mb-7">
          <div>
            <img
              src="https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg"
              alt="Person 1"
              className="w-[100px] h-20  mb-4 mx-auto lg:mx-0 lg:w-[200px]"
            />
            <h2 className="text-lg font-semibold text-center lg:text-left">
              henna
            </h2>
          </div>
          <p className="text-sm text-gray-600 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eveniet expedita obcaecati vel ea eaque dolor, nam, enim dolorum a
            cumque, earum animi! Harum repellat, magni fuga enim doloremque nam!
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:flex items-center gap-3 mb-7">
          <div>
            <img
              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
              alt="Person 1"
              className="w-[100px] h-20  mb-4 mx-auto lg:mx-0 lg:w-[200px]"
            />
            <h2 className="text-lg font-semibold text-center lg:text-left">
              Prakash
            </h2>
          </div>
          <p className="text-sm text-gray-600 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eveniet expedita obcaecati vel ea eaque dolor, nam, enim dolorum a
            cumque, earum animi! Harum repellat, magni fuga enim doloremque nam!
          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-lg p-4 md:flex items-center gap-3 mb-7">
          <div>
            <img
              src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg"
              alt="Person 1"
              className="w-[100px] h-20  mb-4 mx-auto lg:mx-0 lg:w-[200px]"
            />
            <h2 className="text-lg font-semibold text-center lg:text-left">
              keerthi
            </h2>
          </div>
          <p className="text-sm text-gray-600 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            eveniet expedita obcaecati vel ea eaque dolor, nam, enim dolorum a
            cumque, earum animi! Harum repellat, magni fuga enim doloremque nam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default InformationBox;
