import React from "react";
import RegisterForm from "../components/RegisterForm";

const Registration = () => {
  return (
    <div className="flex justify-around">
      <iframe
        width="600px"
        height="315"
        src="https://www.youtube.com/embed/YHxdhI5ZrHc?si=ZQvw0ZpIvKkH-3d5"
        title="YouTube video player"
        frameBorder="0"
        className="my-4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="mx-4 my-6 w-[700px]">
        <h1 class="text-3xl font-bold text-red-600 text-center mb-6">
          Blood Donor Registration
        </h1>

        <div class="bg-white rounded-lg p-6 mb-6">
          <p class="mb-4">
            Thank you for registering as a voluntary blood donor with Blood
            Bridge. Please fill out the following information to become part of
            our vision to help those in need.
          </p>

          <h2 class="text-2xl font-semibold mb-2">Important Guidelines:</h2>
          <ul class="list-disc list-inside mb-4">
            <li>
              <strong>Date of Donation:</strong> Update your date of donation
              after each time you donate blood. Your name will be hidden from
              the list for 3 months to ensure you have adequate recovery time.
            </li>
            <li>
              <strong>Profile Updates:</strong> If you relocate or your contact
              information changes, please update your profile to ensure our
              records are accurate and up-to-date.
            </li>
          </ul>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
