import axios from "axios";
import { baseURL } from "../config";
import { data } from "autoprefixer";

const user = {
  namespaced: true,
  state: {
    users: [],
    userProfile: null,
  },
  getters: {
    getUserProfile: (state) => state.userProfile,
    getAllUser: (state) => state.users,
    getSelectedUser: (state) => state.selectedUser,
  },
  actions: {
    async fetchAllUser({ commit }) {
      try {
        const response = await axios.get(`${baseURL}/userProfile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const userProfile = response.data;

        commit("SET_USERS", userProfile);
        // console.log(userProfile);
        return userProfile;
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        throw error;
      }
    },
    async fetchUserProfile({ commit }) {
      try {
        const response = await axios.get(`${baseURL}/userProfile/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const userData = response.data;
        const userProfileData = userData.user_profiles[0];

        const userProfile = {
          id: userData.id,
          username: userData.username,
          fullname: userData.fullname,
          email: userData.email,
          role: userData.role,
          user_profiles: userProfileData,
        };

        commit("SET_USER_PROFILE", userProfile);
        return userProfile;
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        throw error;
      }
    },
    // Aksi (action) untuk membuat akun baru
    async createAccount({ commit }, userData) {
      try {
        // Buat permintaan HTTP POST ke endpoint API untuk membuat akun baru
        const response = await axios.post(`${baseURL}/userProfile/create`, userData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Jika permintaan berhasil, dapatkan data akun baru dari respons
        const newUser = response.data;

        // Anda bisa melakukan sesuatu dengan data akun baru yang diterima
        // Misalnya, menyimpan akun baru dalam state Vuex
        commit("ADD_USER", newUser);

        // Kembalikan data akun baru
        return newUser;
      } catch (error) {
        console.error("Failed to create new account:", error);
        throw error;
      }
    },
    async updateUserProfile({ commit }, updatedProfile) {
      try {
        const response = await axios.put(
          `${baseURL}/userProfile/me`,
          updatedProfile,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const userProfile = response.data;

        commit("SET_USER_PROFILE", userProfile);
        return userProfile;
      } catch (error) {
        console.error("Failed to update user profile:", error);
        throw error;
      }
    },
    async deleteUserById({ commit }, userId) {
      try {
        // Buat permintaan HTTP DELETE ke endpoint API
        await axios.delete(`${baseURL}/userProfile/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Panggil mutasi REMOVE_USER jika berhasil
        commit("REMOVE_USER", userId);
      } catch (error) {
        console.error("Failed to delete user:", error);
        throw error;
      }
    },
    // Action untuk mengambil data pengguna berdasarkan ID
    async fetchUserById({ commit }, userId) {
      try {
        const response = await axios.get(`${baseURL}/userProfile/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const user = response.data;

        // Perbarui state dengan data pengguna yang diambil
        commit("SET_SELECTED_USER", user);
        return user;
      } catch (error) {
        console.error("Failed to fetch user by ID:", error);
        throw error;
      }
    },
  },
  mutations: {
    SET_SELECTED_USER(state, user) {
      // Perbarui state.selectedUser dengan data pengguna yang diberikan
      state.selectedUser = user;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_USER(state, newUser) {
      // Periksa apakah state.users.rows adalah Proxy dan memiliki properti "rows"
      if (state.users && state.users.rows && Array.isArray(state.users.rows)) {
          // Tambahkan data pengguna baru ke dalam state.users.rows
          state.users.rows.push(newUser);
      } else {
          console.error("state.users.rows is not an array");
      }
  },
    SET_USER_PROFILE(state, userProfile) {
      state.userProfile = userProfile;
    },
    REMOVE_USER(state, userId) {
      // Periksa apakah state.users adalah Proxy dan memiliki properti "rows"
      if (state.users && state.users.rows && Array.isArray(state.users.rows)) {
        // Gunakan filter pada properti "rows" dari state.users
        state.users.rows = state.users.rows.filter(
          (user) => user.id !== userId
        );
      } else {
        console.error("state.users.rows is not an array");
        return;
      }
    },
  },
};

export default user;
