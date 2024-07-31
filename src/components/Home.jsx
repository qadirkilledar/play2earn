import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, DollarSign, Users, Trophy, Medal, Award, Crown } from 'lucide-react';
import { FaTwitter, FaInstagram, FaGithub, FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { CustomPrevArrow, CustomNextArrow } from './ui/CustomArrows';
import  LoginPopup  from './Login';

const Home = () => {
  const navigate = useNavigate();


  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setSignUpPopupOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginPopupOpen(true);
  };

  const handleSignUpClick = () => {
    setSignUpPopupOpen(true);
  };

  const closeLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const closeSignUpPopup = () => {
    setSignUpPopupOpen(false);
  };

  const taskTypes = useMemo(() => [
    { icon: DollarSign, title: "Staking Coins", description: "Increase volume by staking coins" },
    { icon: FaTwitter, title: "Twitter Growth", description: "Gain followers on Twitter" },
    { icon: FaDiscord, title: "Discord Engagement", description: "Participate in Discord communities" },
    { icon: FaTelegramPlane, title: "Telegram Tasks", description: "Engage with Telegram groups" },
  ], []);

  const [heroCards] = useState([
    {
      title: "Complete Tasks, Earn Reward",
      description: "Join our platform to tackle exciting tasks and get paid for your skills!",
      image: 'assets/pic2.jpg'
    },
    {
      title: "Another Company",
      description: "Description for another company.",
      reward: "0.05 ~ $0.05",
      image: "assets/pic1.png"
    },
    {
      title: "Another Company",
      description: "Description for another company.",
      reward: "0.05 ~ $0.05",
      image: ""
    },
  ]);

  const sliderSettings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  }), []);

  
  const partnerLogos = useMemo(() => [
    '/assets/new4.png',
    '/assets/new2.png',
    '/assets/new3.png',
    '/assets/new1.png',
    '/assets/new5.png',
    '/assets/new6.png',
  ], []);

  const players = [
    { rank: 1, user: { name: 'John Doe', profile: 'john_doe' }, points: 97.1238 },
    { rank: 2, user: { name: 'Jane Smith', profile: 'jane_smith' }, points: 62.73737 },
    { rank: 3, user: { name: 'Bob Johnson', profile: 'bob_johnson' }, points: 60.33707 },
    { rank: 4, user: { name: 'Alice Brown', profile: 'alice_brown' }, points: 55.09825 },
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Trophy className="h-6 w-6 text-yellow-400" />;
      case 2: return <Crown className="h-6 w-6 text-amber-600" />;
      case 3: return <Award className="h-6 w-6 text-amber-600" />;
      case 4: return <Medal className="h-6 w-6 text-grey-100" />;
      
      default: return null;
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        
        {/* Header */}
        <header className="relative overflow-hidden bg-gradient-to-b from-blue-500 to-blue-300 text-white p-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-white">Play2Earn</h1>
            <nav className="flex flex-wrap justify-center md:justify-end items-center">
              <Link to="#" className="text-white hover:text-blue-200 mx-2 my-1">Home</Link>
              <Link to="/earn" className="text-white hover:text-blue-200 mx-2 my-1">Earn</Link>
              {/*<Link to="#leaderboard" className="text-white hover:text-blue-200 mx-2 my-1">Leaderboard</Link> */}
              <Link to="/referrals" className="text-white hover:text-blue-200 mx-2 my-1">Referrals</Link>  
              <Button variant="outline" className="bg-transparent hover:bg-blue-400 text-white border-white hover:border-transparent mx-2 my-1" onClick={() => navigate('/login')}>Login</Button>
              <Button variant="default" className="bg-white hover:bg-blue-100 text-blue-500 mx-2 my-1">Sign Up</Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-10 md:py-20">
          <div className="container mx-auto px-4">
            <Slider {...sliderSettings}>
              {heroCards.map((card, index) => (
                <div key={index} className="relative h-[300px] md:h-[500px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="relative h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{card.title}</h2>
                    <p className="text-base md:text-xl mb-4 md:mb-8">{card.description}</p>
                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                      Learn More
                    </Button>
                    {card.reward && (
                      <div className="mt-2 md:mt-4 text-gray-200">{card.reward}</div>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Task Types Section */}
        <section className="py-10 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Tasks We Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {taskTypes.map((task, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg md:text-xl">
                        <task.icon className="mr-2 text-blue-500" />
                        {task.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm md:text-base">
                      {task.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Why Choose Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {[
                { icon: CheckCircle, title: "Diverse Tasks", description: "Find tasks that match your skills and interests." },
                { icon: DollarSign, title: "Fair Compensation", description: "Get paid competitively for your time and effort." },
                { icon: Users, title: "Growing Community", description: "Join a vibrant community of taskmasters." }
              ].map((feature, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg md:text-xl">
                        <feature.icon className="mr-2 text-blue-500" />
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm md:text-base">
                      {feature.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section id="leaderboard" className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 ">
          Leaderboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {players.map((player, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-blue-600">#{player.rank}</CardTitle>
                  {getRankIcon(player.rank)}
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">{player.user.name}</h3>
                    <p className="text-sm text-muted-foreground">@{player.user.profile}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-blue-800">Rewards Earned</p>
                    <p className="text-2xl font-bold text-blue-600">{player.points.toFixed(2)}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


        {/* Partner Companies Section */}
        <section className="py-10 md:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Trusted by Brands You Know
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {partnerLogos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-20 md:h-40 object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-20 bg-blue-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Ready to Start Earning?</h3>
            <p className="text-base md:text-xl mb-4 md:mb-8">Create your account today and dive into a world of opportunities.</p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Sign Up Now</Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-blue-300 to-blue-500 text-white py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl md:text-2xl font-bold mb-4">Play2Earn</h4>
                <p className="text-sm md:text-base">Empowering individuals to earn through meaningful tasks.</p>
              </div>
              <div>
                <h5 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h5>
                <ul className="text-sm md:text-base">                  
                  <li><Link to="/about" className="hover:text-blue-200">About Us</Link></li>
                  <li><Link to="/privacy" className="hover:text-blue-200">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-blue-200">Terms of Service</Link></li>
                  <li><Link to="/help-and-support" className="hover:text-blue-200">Help and Support</Link></li>
                  
                </ul>
              </div>
              <div>
                <h5 className="text-lg md:text-xl font-semibold mb-4">Connect With Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-200"><FaTwitter size={24} /></a>
                  <a href="#" className="hover:text-blue-200"><FaInstagram size={24} /></a>
                  <a href="#" className="hover:text-blue-200"><FaGithub size={24} /></a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400 text-center text-sm md:text-base">
              <p>&copy; 2024 Play2Earn. All rights reserved.</p>
            </div>
          </div>
        </footer>


        {/* Login and Sign Up Popups */}
      <LoginPopup isOpen={isLoginPopupOpen} onClose={closeLoginPopup} />
      {/* <SignUpPopup isOpen={isSignUpPopupOpen} onClose={closeSignUpPopup} /> */}
    </div>
  );
};
   
export default Home;