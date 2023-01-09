import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({ topics: [] });
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [course, setCourse] = useState(null);
  const [subject, setSubject] = useState(null);
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitApplication = async()=>{
    try {
      const {data} = await axios.post("http://localhost:5000/facultyRegister",formData)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    submitApplication();
  };
  useEffect(() => {
    const getCourses = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/courses");
        setCourses(data.courses);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);
  useEffect(() => {
    const getSubjects = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/subjects/${course}`
        );
        setSubjects(data.subjects);
      } catch (error) {
        console.log(error);
      }
    };
    if (course !== null) getSubjects();
  }, [course]);
  useEffect(() => {
    if (subject !== null) {
      const top = subjects.reduce((acc, curr) => {
        if (curr._id === subject) {
          acc = curr.topics;
        }
        return acc;
      }, []);
      setTopics(top);
    }
  }, [subject]);
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        topics: [...formData.topics, e.target.value],
      });
    } else {
      setFormData({
        ...formData,
        topics: formData.topics.filter((t) => t !== e.target.value),
      });
    }
  };
  return (
    <>
      <div className="flex justify-center p-10">
        <form className="w-[70%]" onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                onChange={handleFormData}
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <input
                type="email"
                onChange={handleFormData}
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="john.doe@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone 1
              </label>
              <input
                type="number"
                onChange={handleFormData}
                name="phone1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Phone"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone 2
              </label>
              <input
                type="number"
                onChange={handleFormData}
                name="phone2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Phone 2 (optional)"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Adhar number
              </label>
              <input
                type="number"
                onChange={handleFormData}
                name="adharNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Adhar number"
              />
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Date of birth
              </label>
              <div className="flex">
                <input
                  type="number"
                  onChange={handleFormData}
                  name="bDay"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60px] p-2.5 "
                  placeholder="DD"
                />
                <input
                  type="number"
                  onChange={handleFormData}
                  name="bMonth"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60px] p-2.5 "
                  placeholder="MM"
                />
                <input
                  type="number"
                  onChange={handleFormData}
                  name="bYear"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60px] p-2.5 "
                  placeholder="YYYY"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Caste
              </label>
              <input
                type="text"
                onChange={handleFormData}
                name="caste"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="flowbite.com"
              />
            </div>

            <div>
              <label
                htmlFor="default-radio-1"
                className=" text-sm font-medium text-gray-900 "
              >
                Gender
              </label>
              <div className="flex items-center gap-[10px] mb-4 pt-3">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="male"
                  onChange={handleFormData}
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className=" text-sm font-medium text-gray-900 "
                >
                  Male
                </label>

                <input
                  id="default-radio-2"
                  type="radio"
                  value="female"
                  onChange={handleFormData}
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className=" text-sm font-medium text-gray-900 "
                >
                  Female
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="default-radio-1"
                className=" text-sm font-medium text-gray-900 "
              >
                Type
              </label>
              <div className="flex items-center gap-[10px] mb-4 pt-3">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="online"
                  onChange={handleFormData}
                  name="type"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className=" text-sm font-medium text-gray-900 "
                >
                  Online
                </label>

                <input
                  id="default-radio-2"
                  type="radio"
                  value="offline"
                  onChange={handleFormData}
                  name="type"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className=" text-sm font-medium text-gray-900 "
                >
                  Offline
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Education
              </label>
              <input
                type="text"
                onChange={handleFormData}
                name="education"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Education"
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Experience
              </label>
              <div className="flex gap-[5px]">
                <input
                  type="text"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      experience: {
                        ...formData?.experience,
                        institution: e.target.value,
                      },
                    });
                  }}
                  name="institution"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Institution"
                />
                <input
                  type="number"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      experience: {
                        ...formData?.experience,
                        year: e.target.value,
                      },
                    });
                  }}
                  name="year"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Years"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Expected salary
              </label>
              <input
                type="number"
                onChange={handleFormData}
                name="expectedSalary"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Expected salary"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select course
            </label>
            <select
              id="countries"
              name="course"
              onChange={(e) => {
                setFormData({ ...formData, course: e.target.value });
                setCourse(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value={null}>Choose a course</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="subjects"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select subject
            </label>
            <select
              id="subjects"
              name="subjects"
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                setSubject(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value={null}>Choose a course</option>
              {course !== null &&
                subjects.map((subject) => (
                  <option key={subject._id} value={subject._id}>
                    {subject.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-6">
            {topics.map((topic,i) => (
              <div key={i}>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    onChange={handleCheckBox}
                    value={topic.name}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="defaultcheckbox"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    {topic.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Pincode
              </label>
              <input
                type="number"
                onChange={handleFormData}
                name="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Pincode"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <textarea
              type="text"
              name="address"
              onChange={handleFormData}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
