import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, X as XIcon } from 'lucide-react';
import { auth } from '../firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    availableTime: '',
    completionDate: '',
    hasDesign: '',
    referral: '',
    appointmentDate: '' // <-- add this line
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Store appointments per user in localStorage
  const [appointments, setAppointments] = useState(() => {
    const userId = auth.currentUser?.uid;
    if (!userId) return [];
    const stored = localStorage.getItem(`appointments_${userId}`);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // When user changes, update appointments from localStorage
    if (user) {
      const stored = localStorage.getItem(`appointments_${user.uid}`);
      setAppointments(stored ? JSON.parse(stored) : []);
    } else {
      setAppointments([]);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Check for internet connection before submitting
    if (!navigator.onLine) {
      setError('No internet connection. Please check your connection and try again.');
      return;
    }

    try {
      // Build FormData manually to include all fields
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });
      form.append('appointmentDateTime', new Date().toLocaleString());

      const response = await fetch('https://formspree.io/f/xyzjvpdb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: form
      });
      if (response.ok) {
        setSubmitted(true);
        // Save appointment locally for this user only
        if (user) {
          const newAppointment = {
            ...formData,
            date: new Date().toLocaleString()
          };
          const updatedAppointments = [newAppointment, ...appointments];
          setAppointments(updatedAppointments);
          localStorage.setItem(`appointments_${user.uid}`, JSON.stringify(updatedAppointments));
        }
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          streetAddress: '',
          city: '',
          province: '',
          postalCode: '',
          availableTime: '',
          completionDate: '',
          hasDesign: '',
          referral: '',
          appointmentDate: '' // <-- add this line
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Format date to dd/mm/yyyy if appointmentDate
    if (e.target.name === 'appointmentDate' && e.target.value) {
      const [yyyy, mm, dd] = e.target.value.split('-');
      setFormData({
        ...formData,
        [e.target.name]: `${dd}/${mm}/${yyyy}`
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  // Confirmation popup state
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);

  // Delete appointment by index (after confirmation)
  const handleDeleteAppointment = (index: number) => {
    setDeleteIdx(index);
  };

  const confirmDelete = () => {
    if (deleteIdx !== null) {
      const updatedAppointments = appointments.filter((_: any, idx: number) => idx !== deleteIdx);
      setAppointments(updatedAppointments);
      if (user) {
        localStorage.setItem(`appointments_${user.uid}`, JSON.stringify(updatedAppointments));
      }
      setDeleteIdx(null);
    }
  };

  const cancelDelete = () => {
    setDeleteIdx(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Social Media Widget (left side, same as Home page) */}
      <div className="fixed top-1/2 left-4 z-50 flex flex-col space-y-4 transform -translate-y-1/2">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
        </a>
        <a
          href="https://www.instagram.com/abhijeet_savaliya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
        </a>
        <a
          href="https://x.com/_abhijeet_0018"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-green-600" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Book Appointment</h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Get in touch for a free consultation and quote
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="px-4 md:px-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (365) 866-1119</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">reliablegreencare.service@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Green Street<br />Garden City, NY 11530</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - saturday: 8:00 AM - 8:00 PM<br />
                    
                    Sunday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Canada County</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Brampton</li>
                    <li>vaughan</li>
                    <li>Mississauga</li>
                    <li>Richmond hill</li>
                    <li>Caledon</li>
                    <li>barrie And surrounding areas!</li>
                    
                  </ul>
                </div>
              
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h2>
            {!user ? (
              <div className="text-center text-red-600 font-semibold py-8">
                Please <Link to="/auth" className="text-green-600 underline">sign in</Link> to book an appointment.
              </div>
            ) : submitted ? (
              <div className="text-green-600 font-semibold text-center py-8">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                // Remove action and method for SPA, let React handle submission
                className="space-y-6"
                autoComplete="on"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Street Address */}
                <div>
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* City & Province Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                      Province
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Postal Code */}
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="">Select a service</option>
                    <option value="lawn-mowing">Lawn Mowing</option>
                    <option value="aeration">Aeration</option>
                    <option value="sodding">Sodding</option>
                    <option value="mulching">Mulching</option>
                    <option value="garden-maintenance">Garden Maintenance</option>
                    <option value="fertilization">Fertilization</option>
                    <option value="driveway-wash">Driveway Wash</option>
                    <option value="fencing">Fencing</option>
                    <option value="interlocking">Interlocking</option>
                    <option value="pathways">Pathways & Walkways</option>
                    <option value="soft-landscaping">Soft Landscaping</option>
                    <option value="hard-landscaping">Hard Landscaping</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Available Time & Date Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="availableTime" className="block text-sm font-medium text-gray-700 mb-2">
                      What time are you available to meet? <span className="text-xs text-gray-500">(any day, 8am-8pm)</span>
                    </label>
                    <input
                      type="text"
                      id="availableTime"
                      name="availableTime"
                      value={formData.availableTime}
                      onChange={handleChange}
                      placeholder="e.g. Weekdays after 5pm, Saturday morning, etc."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Completion Date & Referral Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700 mb-2">
                      When were you hoping to have your project completed?
                    </label>
                    <input
                      type="text"
                      id="completionDate"
                      name="completionDate"
                      value={formData.completionDate}
                      onChange={handleChange}
                      placeholder="e.g. By end of June, ASAP, etc."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you find out about Reliablegreencare?
                    </label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      placeholder="e.g. Google, Friend, Social Media, etc."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Landscape Design */}
                <div>
                  <label htmlFor="hasDesign" className="block text-sm font-medium text-gray-700 mb-2">
                    Do you already have a landscape design?
                  </label>
                  <select
                    id="hasDesign"
                    name="hasDesign"
                    value={formData.hasDesign}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="In Progress">In Progress</option>
                  </select>
                </div>

                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Recent Appointments Section */}
      <section className="py-12 bg-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Appointments</h2>
          {!user ? (
            <div className="text-gray-500">Please sign in to view your appointments.</div>
          ) : appointments.length === 0 ? (
            <div className="text-gray-500">No appointments yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-green-600 text-white">
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">Service</th>
                    <th className="px-4 py-2 text-left">Message</th>
                    <th className="px-4 py-2 text-left">Street Address</th>
                    <th className="px-4 py-2 text-left">City</th>
                    <th className="px-4 py-2 text-left">Province</th>
                    <th className="px-4 py-2 text-left">Postal Code</th>
                    <th className="px-4 py-2 text-left">Available Time</th>
                    <th className="px-4 py-2 text-left">Completion Date</th>
                    <th className="px-4 py-2 text-left">Has Design</th>
                    <th className="px-4 py-2 text-left">Referral</th>
                    <th className="px-4 py-2 text-left">Selected Date</th>
                    <th className="px-4 py-2 text-left">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt: any, idx: number) => (
                    <tr key={idx} className="border-b last:border-b-0">
                      <td className="px-4 py-2">{appt.date}</td>
                      <td className="px-4 py-2">{appt.name}</td>
                      <td className="px-4 py-2">{appt.email}</td>
                      <td className="px-4 py-2">{appt.phone}</td>
                      <td className="px-4 py-2">
                        {/* Show formatted service name if possible */}
                        {(() => {
                          if (!appt.service) return <span className="text-gray-400 italic">N/A</span>;
                          // Format service value for display
                          const serviceMap: { [key: string]: string } = {
                            'lawn-mowing': 'Lawn Mowing',
                            'aeration': 'Aeration',
                            'sodding': 'Sodding',
                            'mulching': 'Mulching',
                            'garden-maintenance': 'Garden Maintenance',
                            'fertilization': 'Fertilization',
                            'driveway-wash': 'Driveway Wash',
                            'fencing': 'Fencing',
                            'interlocking': 'Interlocking',
                            'pathways': 'Pathways & Walkways',
                            'soft-landscaping': 'Soft Landscaping',
                            'hard-landscaping': 'Hard Landscaping'
                          };
                          return serviceMap[appt.service] || appt.service;
                        })()}
                      </td>
                      <td className="px-4 py-2">
                        <div style={{ maxHeight: 80, overflowY: 'auto', whiteSpace: 'pre-line' }}>
                          {appt.message}
                        </div>
                      </td>
                      <td className="px-4 py-2">{appt.streetAddress}</td>
                      <td className="px-4 py-2">{appt.city}</td>
                      <td className="px-4 py-2">{appt.province}</td>
                      <td className="px-4 py-2">{appt.postalCode}</td>
                      <td className="px-4 py-2">{appt.availableTime}</td>
                      <td className="px-4 py-2">{appt.completionDate}</td>
                      <td className="px-4 py-2">{appt.hasDesign}</td>
                      <td className="px-4 py-2">{appt.referral}</td>
                      <td className="px-4 py-2">{appt.appointmentDate}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDeleteAppointment(idx)}
                          className="text-red-600 hover:underline font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Delete Confirmation Popup */}
      {deleteIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Delete Appointment</h3>
            <p className="mb-6 text-gray-700">Are you sure you want to delete this appointment?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDelete}
                className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Emergency Contact */}
      <section className="py-16 bg-green-600" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Emergency Services</h2>
          <p className="text-xl text-white opacity-90 mb-6">
            Need immediate assistance? We offer 24/7 emergency landscaping services
          </p>
          <a
            href="tel:555-123-4567"
            className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now: +1 (365) 866-1119</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;