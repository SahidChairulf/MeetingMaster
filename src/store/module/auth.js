import axios from "axios";
import router from "../../router/index";
import { baseURL } from "../config";

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || "" // Tambahkan role di state
  },
  getters: {
    isAuthenticated: (state) => !!state.token && state.token !== "undefined",
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(`${baseURL}/auth/login`, credentials);
        const { token, role } = response.data;

        if (!token) {
          router.push("/auth-login");
          return false;
        }

        // Simpan token dan role ke localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        
        // Commit token dan role ke Vuex store
        commit("SET_TOKEN", token);
        commit("SET_ROLE", role);
        
        // Redirect berdasarkan role
        if (role === "admin") {
          router.push("/admin-dashboard");
        } else if (role === "user") {
          router.push("/user-dashboard");
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async register({ commit }, userData) {
      try {
        // Coba melakukan registrasi pengguna dengan data yang diberikan
        const response = await axios.post(`${baseURL}/auth/register`, userData);
        const { token, role } = response.data;
    
        // Pastikan token dan role dari respons tidak kosong
        if (!token || !role) {
          throw new Error("Registrasi gagal. Token atau role tidak valid atau tidak ditemukan.");
        }
    
        // Simpan token dan role ke localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
    
        // Commit token dan role ke Vuex store
        commit("SET_TOKEN", token);
        commit("SET_ROLE", role);
    
        // Redirect pengguna ke halaman dashboard yang sesuai
        if (role === "admin") {
          router.push("/admin-dashboard");
        } else {
          router.push("/user-dashboard");
        }
    
        // Registrasi berhasil
        return { success: true };
      } catch (error) {
        // Tampilkan alert saat terjadi kegagalan registrasi
        if (error.response && error.response.status === 409) {
          alert("Email sudah digunakan. Coba email lain.");
        } else if (error.response && error.response.status === 422) {
          alert("Gagal melakukan registrasi. Periksa data yang Anda masukkan.");
        } else {
          alert("Registrasi gagal. Terjadi kesalahan saat komunikasi dengan server.");
        }
    
        console.error("Registrasi gagal:", error);
        return { success: false, error: error };
      }
    },    
    logout({ commit }) {
      localStorage.removeItem("token"); // Hapus token dari localStorage
      localStorage.removeItem("role"); // Hapus role dari localStorage
      commit("SET_TOKEN", null); // Setel token ke null dalam state
      commit("SET_ROLE", null); // Setel role ke null dalam state
      router.push("/"); // Redirect ke halaman login setelah logout
      console.log("User logged out."); // Log pesan ke konsol
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_ROLE(state, role) {
      state.role = role;
    },
  },
};

export default auth;

