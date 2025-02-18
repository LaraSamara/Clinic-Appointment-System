# GSG Next.js Training - Clinic Appointment System

## 📌 Project Overview
The **Clinic Appointment System** is a web-based application designed to manage doctor appointments efficiently. Built using **Vite with React and TypeScript**, the system provides an intuitive UI for patients to book appointments, doctors to manage their schedules, and administrators to create clinic operations.

---

## 🚀 Features
### 🏥 **Appointment Booking & Management**
- Patients can book appointments.
- Doctors can view, accept, or complete appointments.
- Admins can manage all doctors and patients registrations.

### 🔐 **User Authentication & Authorization**
- Secure login and authentication for different user roles.
- Role-based access control (Doctors, Admins, Patients).
- Protected routes for authenticated users.

### 📊 **Dashboard & Reports**
- Doctor dashboard with an overview of schedules and appointments.
- Charts (Bar, Pie) for visual representation of appointment statistics.
- Report for clinic activities.

### 🎨 **UI & Components**
- Modular, reusable components for UI consistency.
- Custom navbar, form elements, charts, and alerts.
- Error handling using boundary components.

### 🌍 **Routing & Navigation**
- Public and private routes.
- Custom higher-order components (HOCs) for route protection.

---

## 📁 Project Structure
```
📂 gsg-next-js-training-clinic-appointment-system
├── 📜 README.md          # Project documentation
├── 📜 package.json       # Project dependencies
├── 📜 tsconfig.json      # TypeScript configuration
├── 📜 vite.config.ts     # Vite configuration
├── 📂 public/            # Static assets
├── 📂 src/
│   ├── 📂 component/     # Reusable UI components
│   ├── 📂 context/       # Global state management
│   ├── 📂 hooks/         # Custom hooks
│   ├── 📂 pages/         # App pages (Login, Booking, Dashboard, etc.)
│   ├── 📂 reducers/      # Reducer-like state management
│   ├── 📂 routes/        # Routing & Guards
│   ├── 📂 types/         # Type definitions
│   ├── 📂 utils/         # Utility functions
│   ├── 📜 App.tsx        # Main application entry point
│   ├── 📜 main.tsx       # ReactDOM rendering
│   ├── 📜 index.css      # Global styles
│   └── 📜 constant.ts    # Global constants
```

---

## 🛠️ Tech Stack
- **Framework**:  React with Vite
- **Language**: TypeScript
- **State Management**: Context API, Reducers
- **Styling**: CSS Modules
- **Routing**: React Router
- **Charts & Visuals**: Recharts

---

## 🏗️ Installation & Setup
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/GSG-Next-JS-Training/Clinic-Appointment-System.git
cd gsg-next-js-training-clinic-appointment-system
```

### 2️⃣ **Install Dependencies**
```sh
yarn install  # or npm install
```

### 3️⃣ **Run the Application**
```sh
yarn dev  # or npm run dev
```

### 4️⃣ **Build for Production**
```sh
yarn build  # or npm run build
```

---

## 📜 Usage Guide
1. **Login/Register** as a Doctor, Admin, or Patient.
2. **Book Appointments** (Patients) or **Manage Appointments** (Doctors/Admins).
3. **View Reports & Statistics** on the Dashboard.
4. **Admin Privileges** include user management.

---

## 🏆 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repo.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Open a Pull Request.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📩 Contact
For questions or suggestions, feel free to reach out at **larasamara2002@gmail.com**.

