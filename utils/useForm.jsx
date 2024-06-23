import { useState, useEffect } from 'react';

const useForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [position, setPosition] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [portfolioURL, setPortfolioURL] = useState('');
  const [managementExperience, setManagementExperience] = useState('');
  const [additionalSkills, setAdditionalSkills] = useState([]);
  const [interviewTime, setInterviewTime] = useState('');
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState({});

  const validation = (name, email, phone, pos, exp, url, manExp, skills, time) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const currentTime = new Date();
    const selectedTime = new Date(time);

    if (!name) {
      errors.name = "Name is required!";
    }

    if (!email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(email)) {
      errors.email = "Enter a valid email!";
    }

    if (!phone) {
      errors.phone = "Phone Number is required!";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Enter a valid mobile number!";
    }

    if (pos === 'Developer' || pos === 'Designer') {
      if (exp < 1) {
        errors.experience = "Please add more than 0!";
      }
    }

    if (pos === 'Designer' && !urlRegex.test(url)) {
      errors.url = "Please enter a valid URL!";
    }

    if (pos === 'Manager' && manExp < 1) {
      errors.manExp = "Please a valid duration(>0)!";
    }

    if (skills.length < 1) {
      errors.skills = "Please add at least one skill";
    }

    if (time === '') {
      errors.time = "Enter a time for the interview";
    }

    if (selectedTime < currentTime) {
      errors.time = "Please enter a valid time for the interview";
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setError(validation(fullName, email, phoneNumber, position, relevantExperience, portfolioURL, managementExperience, additionalSkills, interviewTime));
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && submit) {
      console.log("submitted");
    }
  }, [error]);

  return {
    fullName,
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
    error
  };
};

export default useForm;