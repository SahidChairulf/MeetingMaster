import { createRouter, createWebHistory } from 'vue-router'

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  var role = localStorage.getItem('role'); // Anda perlu menyimpan peran pengguna saat login

  if(localStorage.getItem('token')) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    // Jika pengguna sudah login
    if (role === 'admin') {
      // Jika pengguna adalah admin
      if (to.name === 'UserView' || to.name === 'Main' || to.name === 'Auth') {
        // Admin tidak boleh mengakses halaman User, Main, atau Auth
        next('/admin-dashboard'); // Redirect ke halaman admin
      } else {
        next(); // Izinkan akses ke halaman
      }
    } else {
      // Jika pengguna adalah user
      if (to.name === 'Admin' || to.name === 'Main' || to.name === 'Auth') {
        // User tidak boleh mengakses halaman Admin, Main, atau Auth
        next('/user-dashboard'); // Redirect ke halaman user
      } else {
        next(); // Izinkan akses ke halaman
      }
    }
  } else {
    // Jika pengguna belum login
    if (to.name === 'Admin' || to.name === 'UserView') {
      // Pengguna tidak boleh mengakses halaman Admin atau User
      next('/auth-login'); // Redirect ke halaman login
    } else {
      next(); // Izinkan akses ke halaman
    }
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '', // Ubah path untuk halaman Main
          name: 'HomeView',
          beforeEnter : guardMyroute,
          component: () => import('../views/mainView/HomeView.vue'),
        }
      ]
    }, 
    {
      path: '/',
      name: 'User',
      component: () => import('../layouts/UserLayout.vue'),
      children: [
        {
          path: '/user-dashboard', // Ubah path untuk halaman User
          name: 'UserView',
          beforeEnter : guardMyroute,
          component: () => import('../views/userView/HomeDashboard.vue'),
        },
        {
          path: '/user-dashboard-meeting', // Ubah path untuk halaman User
          name: 'UserMeetingView',
          component: () => import('../views/userView/MeetingDashboard.vue'),
        },
        {
          path: '/user-dashboard-meeting-details',
          name: 'UserMeetingDetailsView',
          component: () => import('../views/userView/MeetingDetailsDashboard.vue')
        },
        {
          path: '/user-dashboard-profile',
          name: 'UserMeetingProfile',
          component: () => import('../views/userView/ProfileDashboardView.vue')
        }
      ]
    }, 
    {
      path: '/',
      name: 'Admin',
      component: () => import('../layouts/AdminLayout.vue'),
      children: [
        {
          path: '/admin-dashboard', // Ubah path untuk halaman Admin
          name: 'AdminView',
          beforeEnter : guardMyroute,
          component: () => import('../views/adminView/HomeDashboardView.vue'),
        },
        {
          path: '/admin-dashboard-meeting', // Ubah path untuk halaman Admin
          name: 'AdminMeetingView',
          component: () => import('../views/adminView/MeetingDetailUser.vue'),
        },
        {
          path: '/admin-dashboard-add', // Ubah path untuk halaman Admin
          name: 'AdminAddView',
          component: () => import('../views/adminView/AddUserDashboardView.vue'),
        },
        {
          path: '/admin-dashboard-user', // Ubah path untuk halaman Admin
          name: 'AdminUserView',
          component: () => import('../views/adminView/UserDetailDashboard.vue'),
        }
      ]
    }, 
    {
      path: '/auth-login',
      name: 'Auth',
      component: () => import('../views/authView/loginView.vue'),
    },
    {
      path: '/auth-register',
      name: 'AuthSignup',
      component: () => import('../views/authView/SignupView.vue'),
    },       
  ]
})


export default router
