import React, { useState } from 'react';

// Define the credentials for the super admin
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'supersecret',
};

interface Credentials {
  username: string;
  password: string;
}

interface Doctor {
  name: string;
  email: string;
  role: string;
  credentials: Credentials;
}

interface User {
  name: string;
  email: string;
  role: string;
}

const SuperAdminPage: React.FC = () => {
  const [doctorName, setDoctorName] = useState<string>('');
  const [doctorEmail, setDoctorEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [role, setRole] = useState<string>('Doctor');
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [adminUsername, setAdminUsername] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  const handleGenerateDoctorCredentials = (): void => {
    const username = doctorEmail.split('@')[0];
    const password = Math.random().toString(36).slice(-8);
    const newDoctor: Doctor = {
      name: doctorName,
      email: doctorEmail,
      role: 'Doctor',
      credentials: { username, password },
    };

    setDoctors((prevDoctors) => [...prevDoctors, newDoctor]);

    console.log('Doctor Added:', newDoctor);
  };

  const handleAddUser = (): void => {
    const newUser: User = {
      name: userName,
      email: userEmail,
      role: role,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    console.log('User Added:', newUser);
  };

  const handleRemoveDoctor = (index: number): void => {
    setDoctors((prevDoctors) => prevDoctors.filter((_, i) => i !== index));
  };

  const handleRemoveUser = (index: number): void => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      adminUsername === ADMIN_CREDENTIALS.username &&
      adminPassword === ADMIN_CREDENTIALS.password
    ) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Username</label>
              <input
                type="text"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {loginError && <p className="text-red-500">{loginError}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center md:text-left">
          Super Admin Dashboard
        </h1>
      </header>

      <main className="flex-grow p-4 md:p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md lg:max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">Manage Doctors</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleGenerateDoctorCredentials();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block font-semibold mb-2">Doctor Name</label>
              <input
                type="text"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Doctor Email</label>
              <input
                type="email"
                value={doctorEmail}
                onChange={(e) => setDoctorEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add Doctor
            </button>
          </form>

          {doctors.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Doctors List:</h3>
              <ul className="space-y-2">
                {doctors.map((doctor, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 border border-gray-300 rounded"
                  >
                    <div>
                      <p>
                        <strong>Name:</strong> {doctor.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {doctor.email}
                      </p>
                      <p>
                        <strong>Role:</strong> {doctor.role}
                      </p>
                      <p>
                        <strong>Username:</strong> {doctor.credentials.username}
                      </p>
                      <p>
                        <strong>Password:</strong> {doctor.credentials.password}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveDoctor(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md lg:max-w-lg mx-auto mt-8">
          <h2 className="text-xl font-bold mb-4 text-center">Manage Users</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddUser();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block font-semibold mb-2">User Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">User Email</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Patient">Patient</option>
                <option value="Nurse">Nurse</option>
                {/* Add more roles if needed */}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add User
            </button>
          </form>

          {users.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Users List:</h3>
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 border border-gray-300 rounded"
                  >
                    <div>
                      <p>
                        <strong>Name:</strong> {user.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p>
                        <strong>Role:</strong> {user.role}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveUser(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SuperAdminPage;
