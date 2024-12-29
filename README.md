***********School Management Web Application***************

    #A comprehensive School Management System built with Next.js, designed to manage students, classes, teachers, and other school-related activities effectively.

*****************Features*****************
#Student Management: Add, update, delete, and view student records.
#Teacher Management: Manage teacher profiles and schedules.
#Class Management: Assign students to classes and manage class details.
#Authentication: Secure login and user roles (Admin, Teacher, Student).
#Interactive Dashboard: Overview of the school’s activities and statistics.
#Responsive Design: Optimized for desktops, tablets, and mobile devices.

********************Technologies Used**********************
#Frontend: Next.js, React, Tailwind CSS.
#Backend: Node.js, Prisma ORM.
#Database: PostgreSQL
#Authentication: Clerk

********************Getting Started******************
******************Prerequisites*******************
#Node.js (v20 or later)
#Yarn or npm
#Git installed on your machine
#Access to a database (PostgreSQL).

*********Installation***********
#Clone the Repository Just copy this link and paste in your Command prompt or Visual studio terminal
git clone https://github.com/developer-shahrukh/school-full-stack.git

************Install Dependencies***************

npm install
# or
yarn install

***********Setup Environment Variables Create a .env.local file in the root directory and add the following:************

DATABASE_URL="postgresql://developer_shahrukh:developer123456@localhost:5432/schooldb"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bWlnaHR5LXNxdWlkLTY5LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_ZmPe8c3XgBVSColnIXpMXulHdq5nKFwyQAmOzSiY8h
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=developer-shahrukh
NEXT_PUBLIC_CLOUDINARY_API_KEY=458378527766693 

*********Run Database Migrations************
npx prisma migrate dev --name init


**********Start the Development Server*************
npm run dev
# or
yarn dev

*********Open in Browser Visit http://localhost:3000 to see the application.*****


**********Project Structure*************

src/
├── app/
│   ├── (dashboard)/
│   │   ├── list/
│   │   │   ├── subjects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── ...
│   │   └── ...
│   ├── [...sign-in]/
│   │   ├──Login.tsx
│   │   │   
│   │   └── ...
│   └── ...
├── components/
│   ├── Layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── ...
│   ├── UI/
│   │   └── ...
│   └── ...
├── lib/
│   ├── actions.ts
│   └── prisma.ts
├── prisma/
│   └── schema.prisma
├── styles/
│   ├── globals.css
│   └── ...
├── public/
│   └── assets/
└── ...



********Contact************
***********If you have any questions or feedback, feel free to reach out:*************

Email: shahrukhm412@gmail.com
GitHub: https://github.com/developer-shahrukh
