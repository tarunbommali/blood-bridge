import React, { useState, useEffect } from "react";
import { FormSelect } from "../components/FormSelect";
import { FormField } from "../components/FormField";
import { testData } from "../helper/testData";

const FindDonor = () => {
  const [pincode, setPincode] = useState("");
  const [selectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

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

  const handleSearch = () => {
    const filteredDonors = testData.filter(
      (donor) =>
        donor.bloodGroup === selectedBloodGroup &&
        donor.address.Country === selectedCountry &&
        donor.address.State === selectedState &&
        donor.address.City === selectedCity
    );
    console.log(filteredDonors);
  };

  return (
    <div className="flex justify-around">
      <iframe
        width="600"
        height="315"
        className="my-4"
        src="https://www.youtube.com/embed/rTZdFd8gbCA?si=XoeMBMMTMub7G-6R"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="mx-4 my-6 w-[700px]">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
          Find Donor
        </h1>

        <form
          id="infoForm"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
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
            value={selectedBloodGroup}
            onChange={(e) => setSelectedBloodGroup(e.target.value)}
          />

          <FormField
            label="Country"
            id="country"
            type="text"
            value={selectedCountry}
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

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-bold py-2 rounded mt-4"
          >
            Find
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindDonor;
