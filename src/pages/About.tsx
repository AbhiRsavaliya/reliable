import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Facebook, Instagram, X as XIcon } from 'lucide-react';

const founders = [
	{
		name: 'Heet Patel',
		image: '/img/heett.jpg',
		role: 'Founder & CEO',
		description:
			'Heet brings over a decade of hands-on landscaping expertise and a passion for sustainable outdoor design. He leads the team with a vision for quality and customer satisfaction.',
	},
	{
		name: 'Urvesh Patel',
		image: '/img/urvesh.jpg',
		role: 'Co-Founder & Operations Head',
		description:
			'Urvesh specializes in project management and operational excellence, ensuring every project is completed on time and exceeds client expectations.',
	},
];

const About = () => {
	useEffect(() => {
		AOS.init({ duration: 800, once: true });
	}, []);

	const [showTag, setShowTag] = React.useState(false);
	const [iconIdx, setIconIdx] = React.useState(0);

	const iconLinks = [
		{
			label: 'Click Here',
			link: 'https://www.facebook.com/share/1VgqM8UTSA/?mibextid=wwXIfr',
		},
		{
			label: 'Click Here',
			link: 'https://www.instagram.com/reliablegreencare.service?igsh=N3h5dW8xMDBuejNk&utm_source=qr',
		},
		{
			label: 'Click Here',
			link: 'https://x.com/_abhijeet_0018',
		},
	];

	React.useEffect(() => {
		let timeout: NodeJS.Timeout;
		let interval: NodeJS.Timeout;

		const showAndHide = () => {
			setShowTag(true);
			timeout = setTimeout(() => {
				setShowTag(false);
			}, 2000);
		};

		showAndHide();
		interval = setInterval(() => {
			setIconIdx((prev) => (prev + 1) % iconLinks.length);
			showAndHide();
		}, 10000);

		return () => {
			clearTimeout(timeout);
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<div className="min-h-screen bg-gray-50 flex flex-col">
				{/* Social Media Widget (left side) */}
				<div className="fixed top-1/2 left-4 z-50 flex flex-col items-center space-y-4 transform -translate-y-1/2">
					{/* Animated Click Here Tag */}
					<div
						className={`mb-4 transition-all duration-500 ${
							showTag
								? 'opacity-100 translate-x-0 pointer-events-auto'
								: 'opacity-0 -translate-x-8 pointer-events-none'
						} bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full shadow-xl text-xs font-bold border-2 border-yellow-500 zigzag-border`}
						style={{
							minHeight: '28px',
							boxShadow: '0 4px 24px 0 rgba(255, 193, 7, 0.15)',
							transitionProperty: 'opacity, transform',
							position: 'relative'
						}}
					>
						{showTag && (
							<a
								href={iconLinks[iconIdx].link}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline"
								style={{
									color: '#7c5c00',
									fontWeight: 700,
									letterSpacing: '0.5px',
									textShadow: '0 1px 2px #fff7cc'
								}}
							>
								{iconLinks[iconIdx].label}
							</a>
						)}
						<style>
							{`
								.zigzag-border {
									clip-path: polygon(
										0% 10%, 5% 0%, 10% 10%, 15% 0%, 20% 10%, 25% 0%, 30% 10%, 35% 0%, 40% 10%, 45% 0%,
										50% 10%, 55% 0%, 60% 10%, 65% 0%, 70% 10%, 75% 0%, 80% 10%, 85% 0%, 90% 10%, 95% 0%,
										100% 10%, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%,
										55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0% 90%
									);
								}
							`}
						</style>
					</div>
					<a
						href="https://www.facebook.com/share/1VgqM8UTSA/?mibextid=wwXIfr"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Facebook className="h-7 w-7 text-gray-400 hover:text-green-600 cursor-pointer transition-colors" />
					</a>
					<a
						href="https://www.instagram.com/reliablegreencare.service?igsh=N3h5dW8xMDBuejNk&utm_source=qr"
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
				{/* Cinematic Hero Section with background image and description above image */}
				<section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black" data-aos="fade-up">
					<img
						src="/img/hero.webp"
						alt="About Reliable Landscaping"
						className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
						style={{ zIndex: 1 }}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>
					<div className="relative z-20 max-w-3xl mx-auto px-4 text-center">
						<h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg text-white">
							About Us
						</h1>
						<p className="text-xl opacity-90 mb-0 text-white font-medium drop-shadow-lg">
							Reliable Landscaping & Yard Care was founded with a passion for
							transforming outdoor spaces into beautiful, functional, and sustainable
							environments. Our journey began with a small team and a big dream: to
							deliver exceptional landscaping services with a personal touch.
						</p>
					</div>
				</section>

				<section className="py-16 bg-white">
					<div className="max-w-5xl mx-auto px-4">
						<div className="mb-12" data-aos="fade-up">
							<h2 className="text-3xl font-bold text-green-700 mb-4 flex items-center gap-2">
								<span role="img" aria-label="Story">
									🌱
								</span>{' '}
								Our Story
							</h2>
							<p className="text-gray-700 text-lg leading-relaxed">
								Since our inception, Reliable Landscaping & Yard Care has grown from a
								local business into a trusted name in the community. We believe every
								yard has a story, and we are dedicated to helping our clients write
								theirs. Our team combines years of experience, creativity, and a
								commitment to quality to ensure every project exceeds expectations.
							</p>
						</div>
						<div className="mb-12 grid md:grid-cols-2 gap-8">
							<div
								className="bg-green-50 rounded-xl shadow p-8 flex flex-col items-center"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2">
									<span role="img" aria-label="Mission"></span> Our Mission
								</h2>
								<p className="text-gray-700 text-lg text-center">
									To enhance the beauty and value of every client’s property while
									exceeding their expectations every step of the way. We strive to
									provide reliable, eco-friendly, and innovative landscaping solutions
									tailored to each client’s unique needs.
								</p>
							</div>
							<div
								className="bg-green-50 rounded-xl shadow p-8 flex flex-col items-center"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2">
									<span role="img" aria-label="Vision"></span> Our Vision
								</h2>
								<p className="text-gray-700 text-lg text-center">
									To be the leading landscaping company known for quality, integrity, and
									customer satisfaction. We envision greener communities and inspiring
									outdoor spaces for generations to come.
								</p>
							</div>
						</div>
						<div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
							<h3 className="text-2xl font-bold text-green-700 mb-4">
								Why Choose Us?
							</h3>
							<ul className="flex flex-col md:flex-row justify-center gap-8 text-lg">
								<li className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
									<span className="font-bold text-green-700">Experienced Team:</span>{' '}
									Our professionals are passionate and skilled in all aspects of
									landscaping.
								</li>
								<li className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
									<span className="font-bold text-green-700">Customer Focused:</span>{' '}
									We listen, advise, and deliver on your vision.
								</li>
								<li className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
									<span className="font-bold text-green-700">Sustainable Practices:</span>{' '}
									We care for your yard and the environment.
								</li>
							</ul>
						</div>
						<div className="mt-20 mb-8" data-aos="fade-up" data-aos-delay="400">
							<h3 className="text-3xl font-bold text-green-700 mb-8 text-center">
								Meet Our Founders
							</h3>
							<div className="flex flex-col md:flex-row justify-center items-center gap-12">
								{founders.map((founder, idx) => (
									<div
										key={idx}
										className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full md:w-96 border border-green-100"
										style={{ minHeight: 420, width: 320, maxWidth: 320 }}
										data-aos="fade-up"
										data-aos-delay={500 + idx * 100}
									>
										<img
											src={founder.image}
											alt={founder.name}
											className="w-40 h-40 rounded-full object-cover border-4 border-green-600 mb-4 shadow"
										/>
										<h4 className="text-xl font-bold text-green-700 mb-1">
											{founder.name}
										</h4>
										<p className="text-green-800 font-semibold mb-1">
											{founder.role}
										</p>
										<p className="text-gray-700 text-center">
											{founder.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default About;
