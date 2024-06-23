import React, { useEffect, useState } from 'react';
import useForm from '../utils/useForm';

const Page = () => {
  const { fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    position,
    setPosition,
    relevantExperience,
    setRelevantExperience,
    portfolioURL,
    setPortfolioURL,
    managementExperience,
    setManagementExperience,
    additionalSkills,
    setAdditionalSkills,
    interviewTime,
    setInterviewTime,
    submit,
    handleSubmit,
    error } = useForm();

  return (
    <section className='bg-black h-screen text-white flex justify-center items-center flex-col'>
      {
        Object.keys(error).length === 0 && submit ? (
          <div className="flex flex-col gap-4">
              <h2 className="text-3xl">Summary of Data Entered:</h2>
              <p className="text-[18px]">Full Name : <span className="text-white/60 text-[14px]">{fullName}</span></p>
              <p className="text-[18px]">Email : <span className="text-white/60 text-[14px]">{email}</span></p>
              <p className="text-[18px]">Phone Number : <span className="text-white/60 text-[14px]">{phoneNumber}</span></p>
              <p>Applying for Position: {position}</p>
              {position === 'Developer' || position === 'Designer' ? (
                <p>Experience (in years): {relevantExperience}</p>
              ) : null}
              {position === 'Designer' ? <p>Portfolio: {portfolioURL}</p> : null}
              {position === 'Manager' ? (
                <p>Management Experience (in years): {managementExperience}</p>
              ) : null}
              <p className="text-[18px]">Additional Skills :  <span className="text-white/60 text-[14px]">{additionalSkills.join(", ")}</span></p>
              <p className="text-[18px]">Preferred Interview Time : <span className="text-white/60 text-[14px]">{interviewTime}</span></p>
          </div>
        )
          :
          <>
            <h1 className="text-2xl mb-2">Job Application Form</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <label className="block mb-2">
                <div className="flex gap-2">
                  Full Name:<p className="text-red-700">{error.name}</p>
                </div>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}

                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                />
              </label>

              <label className="block mb-2">
                <div className="flex gap-2">
                  Email:<p className="text-red-700">{error.email}</p>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                />
              </label>

              <label className="block mb-2">
                <div className="flex gap-2">
                  Phone Number:<p className="text-red-700">{error.phone}</p>
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}

                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                />
              </label>

              <label className="block mb-2">
                Applying for Position:
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}

                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                >
                  <option value="">Select Position</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
              </label>

              {position === 'Developer' || position === 'Designer' ? (
                <label className="block mb-2">
                  <div className="flex gap-2">
                    Experience (in years):<p className="text-red-700">{error.experience}</p>
                  </div>
                  <input
                    type="number"
                    value={relevantExperience}
                    onChange={(e) => setRelevantExperience(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                  />
                </label>
              ) : null}

              {position === 'Designer' ? (
                <label className="block mb-2">
                  <div className="flex gap-2">
                    Portfolio:<p className="text-red-700">{error.url}</p>
                  </div>
                  <input
                    type="text"
                    value={portfolioURL}
                    onChange={(e) => setPortfolioURL(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                  />
                </label>
              ) : null}

              {position === 'Manager' ? (
                <label className="block mb-2">
                  <div className="flex gap-2">
                    Management Experience (in years):<p className="text-red-700">{error.manExp}</p>
                  </div>
                  <input
                    type="text"
                    value={managementExperience}
                    onChange={(e) => setManagementExperience(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                  />
                </label>
              ) : null}

              <label className="block mb-2">
                Additional Skills:
                <br />
                <input
                  type="checkbox"
                  value="JavaScript"
                  checked={additionalSkills.includes('JavaScript')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'JavaScript']);
                    } else {
                      setAdditionalSkills(
                        additionalSkills.filter((skill) => skill !== 'JavaScript')
                      );
                    }
                  }}
                  className="mr-1"
                />{' '}
                JavaScript
                <br />
                <input
                  type="checkbox"
                  value="CSS"
                  checked={additionalSkills.includes('CSS')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'CSS']);
                    } else {
                      setAdditionalSkills(
                        additionalSkills.filter((skill) => skill !== 'CSS')
                      );
                    }
                  }}
                  className="mr-1"
                />
                CSS
                <br />
                <input
                  type="checkbox"
                  value="Python"
                  checked={additionalSkills.includes('Python')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAdditionalSkills([...additionalSkills, 'Python']);
                    } else {
                      setAdditionalSkills(
                        additionalSkills.filter((skill) => skill !== 'Python')
                      );
                    }
                  }}
                  className="mr-1"
                />{' '}
                Python
              </label>
              <p className="text-red-700">{error.skills}</p>

              <label className="block mb-2">
                <div className="flex gap-2">
                  Preferred Interview Time:<p className="text-red-700">{error.time}</p>
                </div>
                <input
                  type="datetime-local"
                  value={interviewTime}
                  onChange={(e) => setInterviewTime(e.target.value)}

                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-black"
                />
              </label>

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                Submit
              </button>
            </form>
          </>
      }


    </section>
  );
};

export default Page;