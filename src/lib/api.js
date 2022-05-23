import axiosInstance from "./axiosInstance";
import React, { useEffect } from "react";

export const Standings = async () => {
  try {
    const response = await axiosInstance.get(
      "/v3/lol/scores/json/Standings/100001485"
    );
    // console.log(response);
    return response.data;
  } catch (e) {}
};

export const Schedules = () => {
  useEffect(() => {
    axiosInstance.get("/v3/lol/scores/json/Schedule/100001485");
  });
};
