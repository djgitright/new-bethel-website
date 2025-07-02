
import { CalendarDays, Phone, MapPin, Mail, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="bg-gray-100 p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">New Bethel AME Church</h1>
        <p className="text-center text-lg">Where Hope Meets Healing</p>
        <nav className="mt-4 flex justify-center gap-6 text-blue-600">
          <Link href="#">Home</Link>
          <Link href="#">Ministries</Link>
          <Link href="#">Sermons</Link>
          <Link href="#">Donations</Link>
          <Link href="#">Events</Link>
          <Link href="#">Photos</Link>
        </nav>
      </header>

      <main className="p-6 space-y-10">
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Join Us for Worship</h2>
          <p>Sunday Service: 11:00 AM | Bible Study: Wednesday 6:30 PM</p>
          <p>Location: 123 Avenue, Port St. Joe, FL</p>
        </section>

        <section className="text-center bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p>
            New Bethel AME Church is a place where God’s presence is felt, lives are transformed,
            and healing begins. Under the leadership of Pastor Chris Jordan, our mission is to
            walk in faith that heals and show love that restores.
          </p>
        </section>

        <section className="text-center bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
          <ul className="space-y-2">
            <li><CalendarDays className="inline-block mr-2" />Spiritual Rededication Service - June 30, 2025</li>
            <li><CalendarDays className="inline-block mr-2" />Bible Discovery Convention - July 6, 2025</li>
          </ul>
        </section>

        <section className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Connect With Us</h3>
          <div className="flex justify-center gap-4">
            <a href="tel:1234567890" className="flex items-center gap-1"><Phone />Call</a>
            <a href="mailto:info@newbethelame.com" className="flex items-center gap-1"><Mail />Email</a>
            <a href="#" className="flex items-center gap-1"><MapPin />Visit</a>
          </div>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com" target="_blank" className="flex items-center gap-1"><Facebook />Facebook</a>
            <a href="https://youtube.com" target="_blank" className="flex items-center gap-1"><Youtube />YouTube</a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-10">
        <p>&copy; 2025 New Bethel AME Church. All rights reserved.</p>
      </footer>
    </div>
  );
}
