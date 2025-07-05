import Header from '../components/Header';
import Footer from '../components/Footer';

const founders = [
	{
		name: 'Abhijeet Savaliya',
		img: 'img/founder1.jpg',
		role: 'Founder & CEO'
	},
	{
		name: 'Priya Patel',
		img: 'img/founder2.jpg',
		role: 'Co-Founder & Operations'
	},
	{
		name: 'Rahul Sharma',
		img: 'img/founder3.jpg',
		role: 'Co-Founder & Design Lead'
	}
];

const About = () => (
	<>
		<Header />
		<div className="min-h-screen bg-gray-50">
			<section className="py-20 bg-green-600 text-white text-center">
				<div className="max-w-3xl mx-auto px-4">
					<h1 className="text-5xl font-bold mb-6">About Us</h1>
					<p className="text-xl opacity-90 mb-4">
						Reliable Landscaping & Yard Care was founded with a passion for
						transforming outdoor spaces into beautiful, functional, and sustainable
						environments. Our journey began with a small team and a big dream: to
						deliver exceptional landscaping services with a personal touch.
					</p>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="max-w-5xl mx-auto px-4">
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-green-700 mb-4">Our Story</h2>
						<p className="text-gray-700 text-lg">
							Since our inception, Reliable Landscaping & Yard Care has grown from a
							local business into a trusted name in the community. We believe every
							yard has a story, and we are dedicated to helping our clients write
							theirs. Our team combines years of experience, creativity, and a
							commitment to quality to ensure every project exceeds expectations.
						</p>
					</div>
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
						<p className="text-gray-700 text-lg">
							To enhance the beauty and value of every client’s property while
							exceeding their expectations every step of the way. We strive to
							provide reliable, eco-friendly, and innovative landscaping solutions
							tailored to each client’s unique needs.
						</p>
					</div>
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
						<p className="text-gray-700 text-lg">
							To be the leading landscaping company known for quality, integrity, and
							customer satisfaction. We envision greener communities and inspiring
							outdoor spaces for generations to come.
						</p>
					</div>
					<div>
						<h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
							Meet Our Founders
						</h2>
						<div className="flex flex-col md:flex-row justify-center items-center gap-8">
							{founders.map((f, idx) => (
								<div
									key={idx}
									className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center w-64"
								>
									<img
										src={f.img}
										alt={f.name}
										className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-600"
									/>
									<h3 className="text-xl font-semibold text-gray-900">
										{f.name}
									</h3>
									<p className="text-green-700 font-medium">{f.role}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
		<Footer />
	</>
);

export default About;
