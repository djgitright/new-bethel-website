
'use client';
import { CalendarDays, Phone, MapPin, Mail, Facebook, Youtube, ChevronDown, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [submittedForm, setSubmittedForm] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);
  const handleFormSubmit = (formName) => {
    setSubmittedForm(formName);
    setTimeout(() => setSubmittedForm(null), 4000);
  };

  const events = [
    { date: "July 27, 2025", title: "Family & Friends Day" },
    { date: "August 3, 2025", title: "Northwest FL Ushers’ Union Anniversary" },
    { date: "August 9, 2025", title: "4th Quarterly Conference" },
    { date: "August 17, 2025", title: "Women’s Day Program" },
    { date: "August 24, 2025", title: "Pastor Appreciation" },
    { date: "September 28, 2025", title: "Steward & Trustee Day" },
    { date: "October 27, 2024", title: "Church Reorganization Meeting" },
    { date: "November 11–15, 2024", title: "Harvest Week Revival" },
    { date: "December 31, 2024", title: "Watch Night Service" },
    { date: "January 5, 2025", title: "Usher Union" },
    { date: "February 9, 2025", title: "Black History Program" },
    { date: "March 16, 2025", title: "Men’s Day Program" },
    { date: "April 20, 2025", title: "Easter Program" },
    { date: "May 25, 2025", title: "Church Anniversary" },
    { date: "June 15, 2025", title: "Father’s Day" }
  ];

  return (
    <div className="min-h-screen bg-purple-900 text-white font-sans">
      <header className="relative bg-purple-800 shadow-md">
        <img src="/NBAME Banner Logo.jpg" alt="New Bethel Banner" className="w-full object-cover h-52" />
        <nav className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-700 bg-opacity-90 w-full py-2 flex justify-center gap-6 text-white">
          <Link href="#">Home</Link>
          <Link href="#">Ministries</Link>
          <Link href="#">Sermons</Link>
          <Link href="#">Donations</Link>
          <Link href="#">Events</Link>
          <Link href="#">Photos</Link>
        </nav>
      </header>

      <main className="p-6 space-y-10">
        <section className="bg-purple-800 text-white p-6 flex flex-col md:flex-row items-center gap-6 rounded shadow-md">
          <img src="/Bio Pic For Church 1.jpg" alt="Rev. Chris T. Jordan" className="w-48 h-auto rounded shadow-md" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Meet Our Pastor</h3>
            <p>Rev. Chris T. Jordan is a graduate of James A. Shanks High School and a proud veteran of the United States Military. He currently serves as Electric Utility Engineering/Operations Manager for the City of Tallahassee.</p>
            <p className="mt-2">He is a devoted husband, father of three, and grandfather. Rev. Jordan began preaching in 2013 and now serves as the pastor of New Bethel AME Church in Port St. Joe, FL.</p>
            <a href="/Rev. Chris T. Jordan Bio.pdf" download className="inline-block mt-4 px-4 py-2 bg-white text-purple-800 font-bold rounded">Download Full Bio (PDF)</a>
          </div>
        </section>
      </main>

      <footer className="bg-purple-700 text-center p-4 mt-10">
        <p>&copy; 2026 New Bethel AME Church. All rights reserved.</p>
      </footer>
    </div>
  );
}
