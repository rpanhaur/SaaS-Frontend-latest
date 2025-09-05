import { appDispatch, appSelector } from "@/store/hooks";
import { createInstituteTeacher } from "@/store/institute/teacher/institue-teacher-slice";
import { IInstituteTeacherInitialData } from "@/store/institute/teacher/institute-teacher-types";

import { ChangeEvent, FormEvent, useState } from "react";

interface ITeacherClose {
  closeModal: () => void;
}
const TeacherPopupModal: React.FC<ITeacherClose> = ({ closeModal }) => {
  const dispatch=appDispatch
  const {course}=appSelector((store)=>store.course)
  const [teacherData,setTeacherData]=useState<IInstituteTeacherInitialData>({
    teacherName:"",
    teacherEmail:"",
    teacherPhoneNumber:"",
    teacherExperience:"",
    teacherSalary:"",
    teacherJoinedDate:"",
    courseId:""

  })

  function handleChangeTeacherData(e:ChangeEvent<HTMLInputElement>){
    const{name,value}=e.target
    setTeacherData({
      ...teacherData,
      [name]:value
    })
  }

  async function handleSubmitTeacherData(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    await dispatch(createInstituteTeacher(teacherData))
    

  }
  return (
    <div
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="fixed inset-0 bg-black/50" />
      <div className="relative w-full max-w-md p-6 bg-blue-300 dark:bg-blue-800 rounded-lg shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Create Teacher
          </h3>
          <button
            onClick={closeModal}
            id="closeModalButton"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              className="h-4 w-4 inline-block ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="website_url"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Teacher Name
            </label>
            <input
              type="text"
              name="teacherName"
              id="website_url"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="Teacher Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="website_url"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Teacher Email
            </label>
            <input
              type="email"
              name="teacherEmail"
              id="website_url"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="rabindra@gmail.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="website_url"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Teacher Phone Number
            </label>
            <input
              type="text"
              name="teacherPhoneNumber"
              id="website_url"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="985*******"
              required
            />
          </div>
          <div className="flex">
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher Experience
              </label>
              <input
                type="text"
                name="teacherExperience"
                id="website_url"
                className="w-50 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Years"
                required
              />
            </div>
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher Salary
              </label>
              <input
                type="text"
                name="teacherSalary"
                id="website_url"
                className="w-50 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="40k/month"
                required
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Teacher joined Date
              </label>
              <input
                type="Date"
                name="teacherJoinedDate"
                id="website_url"
                className="w-50 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              
                required
              />
            </div>
            <div>
              <label
                htmlFor="website_url"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Course ID
              </label>
              {
                course.length >0 && course.map((course)=>{
                  return(
                    <select name="courseId" id="">
                      <option value={course.id}>{course.courseName}</option>

                    </select>
                  )
                })
              }
            </div>
          </div>

          <form className="flex justify-end gap-3">
            <button
              onClick={closeModal}
              id="cancelButton"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              id="submitUrlButton"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-green-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-green-600"
            >
              Add Teacher
              <svg
                className="h-4 w-4 inline-block ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default TeacherPopupModal;
