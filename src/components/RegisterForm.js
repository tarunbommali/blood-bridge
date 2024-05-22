import React, { useState, useEffect } from "react";
import { FormField } from "./FormField";
import { FormSelect } from "./FormSelect";

const RegisterForm = ({onChangeStatus}) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (pincode.length === 6) {
      const fetchLocationData = async () => {
        const url = "https://pincode.p.rapidapi.com/";
        const options = {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "bedd7c7f8dmshb6d949308656552p1d5f5ajsn147efcb1d39c",
            "X-RapidAPI-Host": "pincode.p.rapidapi.com",
          },
          body: JSON.stringify({
            searchBy: "pincode",
            value: pincode,
          }),
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          const uniqueStates = [
            ...new Set(result.map((item) => item.state_id)),
          ];
          const stateObjects = uniqueStates.map((stateId) => ({
            state_id: stateId,
            state_name: result.find((item) => item.state_id === stateId).circle,
          }));
          setStates(stateObjects);

          const cityObjects = result.map((item) => ({
            city_name: item.office,
            state_id: item.state_id,
            district: item.district,
          }));
          setCities(cityObjects);
        } catch (error) {
          console.error(error);
        }
      };

      fetchLocationData();
    }
  }, [pincode]);

  return (
    <div className="flex justify-center border bg-white mx-4 my-6 px-2 py-6 rounded-lg border-[#cfd8dc]">
      
    <form className="w-[90%] md:w-[400px]">
    <div className="flex text-[11px] ">
          <p onClick={onChangeStatus} className="text-red-500 cursor-pointer">Find Donar </p>  / <p className="font-semibold">Register as Donar</p>
        </div>
        <div>

        <h1 class="text-3xl font-bold text-red-600 text-center mb-6">
          Register as Donar
        </h1>

        <div class="bg-white rounded-lg py-6 px-2 mb-6">
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

        </div>
      </div>
      <FormField
        label="Full Name"
        id="name"
        type="text"
        placeholder="Enter your full name"
      />
      <FormField
        label="Phone Number"
        id="phone"
        type="tel"
        placeholder="Enter your phone number Ex. 95XXXXXX26"
      />

      <FormField label="Date of Last Donation" id="last_donation" type="date" />

      <FormSelect
        label="Blood Group"
        id="blood_group"
        options={[
          { value: "", label: "Select your blood group", disabled: true },
          { value: "A+", label: "A+" },
          { value: "A-", label: "A-" },
          { value: "B+", label: "B+" },
          { value: "B-", label: "B-" },
          { value: "AB+", label: "AB+" },
          { value: "AB-", label: "AB-" },
          { value: "O+", label: "O+" },
          { value: "O-", label: "O-" },
        ]}
      />
      <FormField
        label="Country"
        id="country"
        type="text"
        value="India"
        disabled
      />
      <FormField
        label="Pincode"
        id="pincode"
        type="text"
        placeholder="Enter your pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <FormSelect
        label="State"
        id="state"
        options={[
          { value: "", label: "Select your state", disabled: true },
          ...states.map((state) => ({
            value: state.state_name,
            label: state.state_name,
          })),
        ]}
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      />
      <FormSelect
        label="City"
        id="city"
        options={[
          { value: "", label: "Select your city", disabled: true },
          ...cities
            .filter(
              (city) =>
                city.state_id ===
                states.find((state) => state.state_name === selectedState)
                  ?.state_id
            )
            .map((city) => ({
              value: city.city_name,
              label: city.city_name,
            })),
        ]}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!selectedState}
      />

      <TermsAndConditions />

      <button
        type="submit"
        className="w-full bg-red-600 text-white font-bold py-2 rounded mt-4"
      >
        Register
      </button>
    </form>
    </div>
  );
};

const TermsAndConditions = () => (
  <div className="bg-white rounded-lg py-4 mt-6">
    <h2 className="text-2xl font-semibold mb-2">
      <input type="checkbox" className="mr-2" required />
      Terms & Conditions
    </h2>

    <div className="h-[50px] overflow-y-scroll">
      <p className="mb-2">
        <strong>Confidentiality:</strong> Your personal information will be kept
        confidential and used solely for the purpose of connecting blood donors
        with recipients.
      </p>
      <p className="mb-2">
        <strong>Consent to Contact:</strong> You agree to be contacted by
        individuals in need of blood during emergencies.
      </p>
      <p className="mb-2">
        <strong>Health and Safety:</strong> You confirm that you meet the health
        requirements for blood donation and will inform us of any changes in
        your health status that might affect your eligibility.
      </p>
      <p>
        <strong>Voluntary Participation:</strong> Your participation as a donor
        is voluntary, and you can withdraw your consent at any time by updating
        your profile.
      </p>
    </div>
  </div>
);

export default RegisterForm;
