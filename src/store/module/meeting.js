// Import Axios dan baseURL jika diperlukan
import axios from "axios";
import { baseURL } from "../config";

const meeting = {
  namespaced: true,
  state: {
    dataMeetings: [],
    error: null,
  },
  getters: {
    getMeetings: (state) => state.dataMeetings,
    getError: (state) => state.error,
  },
  actions: {
    async fetchAllMeetings({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${baseURL}/userMeeting/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_MEETINGS", response.data);
        // console.log(response.data)
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async fetchMeetings({ commit }) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${baseURL}/userMeeting/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        commit("SET_MEETINGS", response.data);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async addMeeting({ commit }, meetingData) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${baseURL}/meeting/add`,
          meetingData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        commit("ADD_MEETING", response.data);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async updateMeeting({ commit }, { id, meetingData }) {
      try {
        await axios.put(`${baseURL}/meeting/${id}`, meetingData,);
        commit("UPDATE_MEETING", { id, meetingData });
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async deleteMeeting({ commit }, id) {
      try {
        await axios.delete(`${baseURL}/meeting/${id}`);
        commit("DELETE_MEETING", id);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
  },
  mutations: {
    SET_MEETINGS(state, meetings) {
      state.dataMeetings = meetings;
    },
    ADD_MEETING(state, newMeeting) {
      state.dataMeetings.push(newMeeting);
    },
    UPDATE_MEETING(state, { id, meetingData }) {
      const index = state.dataMeetings.findIndex(
        (meeting) => meeting.id === id
      );
      if (index !== -1) {
        state.dataMeetings.splice(index, 1, meetingData);
      }
    },
    DELETE_MEETING(state, id) {
      state.dataMeetings = state.dataMeetings.filter(
        (meeting) => meeting.id !== id
      );
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
};

export default meeting;
