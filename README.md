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

# .env

DATABASE_URL=                          <your-database-url>
API_KEY=                               <your-api-key>
SECRET_KEY=                            <your-secret-key>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=     <Key>
CLERK_SECRET_KEY=                      <Clerk secret key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=          /
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=     <cloudnary name>
NEXT_PUBLIC_CLOUDINARY_API_KEY=        <Cloudnary key>

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
