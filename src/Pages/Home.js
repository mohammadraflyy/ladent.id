import React, { useState, useEffect } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
//import PostList from './Post/PostList';
//import { fetchAllPosts } from '../Utils/postService';
import PostLoading from './Post/PostLoading';
import SEO from '../Components/SEO';
//import PostGrid from './Post/PostGrid';
import PostLoadingGrid from './Post/PostLoadingGrid';
//import Sidebar from '../Layouts/Partials/Sidebar';
import { BriefcaseIcon, Cog8ToothIcon, GlobeAltIcon, HandThumbUpIcon, HeartIcon, LightBulbIcon, LinkIcon, MegaphoneIcon, ShieldCheckIcon, SparklesIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Timeline from '../Components/Timeline';

function Home() {
    //const [posts, setPosts] = useState([]);
    //const [postCountByYear, setPostCountByYear] = useState({});
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    const title = 'Home';

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                //const fetchedPosts = await fetchAllPosts();
                //setPosts(fetchedPosts);

                //const countByYear = fetchedPosts.data.reduce((acc, post) => {
                //    const year = new Date(post.created_at).getFullYear();
                //    acc[year] = (acc[year] || 0) + 1;
                //    return acc;
                //}, {});

                //setPostCountByYear(countByYear);
            } catch (error) {
                //setError("Failed to fetch posts.");
                //console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <AppLayouts title={'Home'}>
            <SEO title={title} description='Home page for ladent.id' />
            {loading ? (
                <>
                    <PostLoadingGrid />
                    <PostLoading />
                </>
            //) : error ? (
            //    <p>{error}</p>
            ) : (
                <>
                    <section id="profile" className="bg-purple-200 bg-opacity-30 p-5 md:px-32 lg:px-64 xl:px-96">
                        <h2 className="text-5xl md:text-6xl font-bold dark:text-white text-black md:mt-32 md:mb-10">Ladon Entertainment</h2>
                        <div className='text-lg mt-10'>
                            <p class="dark:text-white text-black leading-relaxed">
                                Ladon Entertainment Indonesia (LADENT) is a teamwork that operates in the creative industry including event service, brand activation, media planner, artist management, and KOL specialist. Founded in 2015, it focuses on artist management by collaborating in various television programs, radio, and production houses, which then expanded into digitalization such as music aggregators, creative content, and agencies.
                            </p>
                            <p class="dark:text-white text-black leading-relaxed mt-4">
                                The increasing number of Indonesian people who are aware of technology and social media is paying attention to foreign products to market their products in Indonesia. Ladon Entertainment (LADENT) not only helps local brands to promote their products but also answers the challenges of several products from abroad such as from America, China, and Singapore as brand activation.
                            </p>
                            <p class="dark:text-white text-black leading-relaxed mt-4">
                                Some local products that we have collaborated with include BCA, Bank Mandiri, Scarlett Whitening, Polytron, Smartfren, Xiaomi, and others. Meanwhile, foreign products are the Omi, Unicraft World, Holla, and Litmatch applications.
                            </p>
                        </div>

                        <section id="vision" class="mt-8">
                            <h2 class="text-3xl font-bold dark:text-white text-black mb-4">VISION</h2>
                            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-black dark:text-white">
                                <ul class="list-none space-y-4">
                                    <li class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                        <div class="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                            <SparklesIcon class="md:w-6 md:h-6 w-32 h-32 text-blue-500 dark:text-blue-400" />
                                        </div>
                                        <div class="text-gray-400">
                                            <strong class="block text-xl sm:text-2xl dark:text-white text-black">Becoming Innovation Leaders</strong>
                                            Realize themselves as pioneers of innovation in the creative industry by creating unique and highly competitive products and services.
                                        </div>
                                    </li>
                                    <li class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                        <div class="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                            <BriefcaseIcon class="md:w-6 md:h-6 w-32 h-32 text-green-500 dark:text-green-400" />
                                        </div>
                                        <div class="text-gray-400">
                                            <strong class="block text-xl sm:text-2xl dark:text-white text-black">Developing the Creative Economy</strong>
                                            Contribute significantly to economic growth through the sustainable development of creative businesses and the creation of new jobs.
                                        </div>
                                    </li>
                                    <li class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                        <div class="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                            <GlobeAltIcon class="md:w-6 md:h-6 w-32 h-32 text-red-500 dark:text-red-400" />
                                        </div>
                                        <div class="text-gray-400">
                                            <strong class="block text-xl sm:text-2xl dark:text-white text-black">Building Cultural Identity</strong>
                                            Strengthen and develop local cultural identity through world-class creative works.
                                        </div>
                                    </li>
                                    <li class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                        <div class="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                            <HeartIcon class="md:w-6 md:h-6 w-32 h-32 text-yellow-500 dark:text-yellow-400" />
                                        </div>
                                        <div class="text-gray-400">
                                            <strong class="block text-xl sm:text-2xl dark:text-white text-black">Improving Quality of Life</strong>
                                            Provide a positive impact on the quality of life of society through innovative and beneficial creative products and services.
                                        </div>
                                    </li>
                                    <li class="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4">
                                        <div class="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                            <StarIcon class="md:w-6 md:h-6 w-32 h-32 text-purple-200 dark:text-purple-200" />
                                        </div>
                                        <div class="text-gray-400">
                                            <strong class="block text-xl sm:text-2xl dark:text-white text-black">Becoming Global Inspiration</strong>
                                            Inspire and empower the global creative community through collaboration and exchange of ideas.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="mission" className="mt-10 mb-32">
                            <h2 className="text-3xl font-bold dark:text-white text-black mb-4">MISSION</h2>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-black dark:text-white">
                            <ul className="list-none space-y-4">
                                <li className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                    <LightBulbIcon className="md:w-6 md:h-6 w-32 h-32 text-blue-500 dark:text-blue-400" />
                                </div>
                                <div className="text-gray-400">
                                    <strong className="block text-xl sm:text-2xl dark:text-white text-black">Sustainable Innovation</strong>
                                    Continuously create and develop innovative products and services that are relevant to market needs.
                                </div>
                                </li>
                                <li className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                    <UserGroupIcon className="md:w-6 md:h-6 w-32 h-32 text-green-500 dark:text-green-400" />
                                </div>
                                <div className="text-gray-400">
                                    <strong className="block text-xl sm:text-2xl dark:text-white text-black">Human Resource Development</strong>
                                    Provide training and development to enhance the skills and creativity of the team, and foster an inspiring work environment.
                                </div>
                                </li>
                                <li className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                    <LinkIcon className="md:w-6 md:h-6 w-32 h-32 text-red-500 dark:text-red-400" />
                                </div>
                                <div className="text-gray-400">
                                    <strong className="block text-xl sm:text-2xl dark:text-white text-black">Collaboration and Networking</strong>
                                    Build collaborative networks with various parties, including the creative community, government, and the private sector, to create synergy and joint growth.
                                </div>
                                </li>
                                <li className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                    <MegaphoneIcon className="md:w-6 md:h-6 w-32 h-32 text-yellow-500 dark:text-yellow-400" />
                                </div>
                                <div className="text-gray-400">
                                    <strong className="block text-xl sm:text-2xl dark:text-white text-black">Effective Promotion and Marketing</strong>
                                    Develop effective promotion and marketing strategies to reach a wider market and increase brand awareness.
                                </div>
                                </li>
                                <li className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                    <HandThumbUpIcon className="md:w-6 md:h-6 w-32 h-32 text-purple-200 dark:text-purple-200" />
                                </div>
                                <div className="text-gray-400">
                                    <strong className="block text-xl sm:text-2xl dark:text-white text-black">Social Responsibility</strong>
                                    Contribute to community welfare through various social and environmental programs that support sustainability.
                                </div>
                                </li>
                                <li className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                    <Cog8ToothIcon className="md:w-6 md:h-6 w-32 h-32 text-teal-500 dark:text-teal-400" />
                                </div>
                                <div className="text-gray-400">
                                    <strong className="block text-xl sm:text-2xl dark:text-white text-black">Efficient Management</strong>
                                    Optimize resource management and operations to achieve high efficiency and productivity in creative businesses.
                                </div>
                                </li>
                                <li className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4">
                                <div className="flex justify-center items-center w-full md:block md:justify-normal md:w-fit">
                                    <ShieldCheckIcon className="md:w-6 md:h-6 w-32 h-32 text-indigo-500 dark:text-indigo-400" />
                                </div>
                                <div className="text-gray-400">
                                    <strong className="block text-xl sm:text-2xl dark:text-white text-black">Intellectual Property Protection</strong>
                                    Protect intellectual property rights through the registration and utilization of copyrights, trademarks, and patents, and support policies that safeguard these rights.
                                </div>
                                </li>
                            </ul>
                            </div>
                        </section>
                    </section>

                    <section id="executive-summary" className='p-5 md:px-32 lg:px-64 xl:px-96 dark:bg-gray-900 bg-white py-32'>
                        <h2 className="text-4xl font-bold dark:text-white text-black text-center mb-32">Executive Summary</h2>
                        <p class="dark:text-white text-black leading-relaxed mb-4">
                            The entertainment industry in Indonesia has experienced significant growth and transformation with a growing demand for innovative and comprehensive services. This period has been marked by several key developments and trends that have shaped the landscape of the industry, creating new opportunities and challenges.
                        </p>

                        <h2 class="text-2xl font-bold dark:text-white text-black mt-6 mb-4">Digital Transformation</h2>
                        <p class="dark:text-white text-black leading-relaxed mb-4">
                            The COVID-19 pandemic accelerated the digital transformation across various sectors, including entertainment. With social distancing measures and restrictions on large gatherings, there was a surge in demand for digital content and virtual experiences. Streaming services, online concerts, and digital media consumption saw unprecedented growth. As a result, businesses within the entertainment sector had to adapt quickly to leverage digital platforms and technologies to reach their audiences.
                        </p>

                        <h2 class="text-2xl font-bold dark:text-white text-black mt-6 mb-4">Rise of Influencer Marketing</h2>
                        <p class="dark:text-white text-black leading-relaxed mb-4">
                            The influence of social media continued to grow, and influencer marketing became a powerful tool for brands to engage with consumers. Influencers across platforms like Instagram, YouTube, and TikTok played a crucial role in shaping consumer behavior and trends. Companies increasingly invested in influencer partnerships to boost brand visibility and credibility, leading to the emergence of specialized influencer marketing agencies.
                        </p>

                        <h2 class="text-2xl font-bold dark:text-white text-black mt-6 mb-4">Government Initiatives and Support</h2>
                        <p class="dark:text-white text-black leading-relaxed mb-4">
                            The Indonesian government recognized the potential of the creative economy as a driver of growth and employment. Initiatives were launched to support the creative industry, including funding programs, training for creative professionals, and infrastructure development. The government also facilitated collaborations between local artists and international entities, fostering a more vibrant and dynamic creative landscape.
                        </p>

                        <h2 class="text-2xl font-bold dark:text-white text-black mt-6 mb-4">Diversification of Entertainment Offerings</h2>
                        <p class="dark:text-white text-black leading-relaxed mb-4">
                            The period saw a diversification of entertainment offerings, with a blend of traditional and contemporary formats. While live events and performances began to recover post-pandemic, there was also a growing emphasis on hybrid events that combined in-person and virtual elements. This hybrid model allowed for greater flexibility and wider audience reach, catering to evolving consumer preferences.
                        </p>

                        <h2 class="text-2xl font-bold dark:text-white text-black mt-6 mb-4">Increased Investment in Production Quality</h2>
                        <p class="dark:text-white text-black leading-relaxed mb-4">
                            As competition intensified, there was a noticeable increase in investment towards enhancing production quality. From high-definition video content to immersive audio-visual experiences, the emphasis on quality became a differentiating factor for entertainment providers. Production houses upgraded their equipment and adopted advanced technologies to meet the rising expectations of audiences.
                        </p>

                        <p class="dark:text-white text-black leading-relaxed mt-6">
                            In response to these industry developments, our proposed business aims to provide a comprehensive suite of services that cater to the diverse needs of the entertainment sector in Indonesia. Our goal is to offer a one-stop solution that integrates event planning and management, media planning, influencer marketing, artist management, production house services, and creative content development. By doing so, we intend to capitalize on the current trends and provide value-driven services that enhance our clients' brand presence and audience engagement.
                        </p>
                    </section>

                    <section id="milestones" className='p-5 md:px-32 lg:px-64 xl:px-96 bg-purple-200 bg-opacity-30 py-32'>
                        <h2 className="text-4xl font-bold dark:text-white text-black text-center mb-32">Milestones</h2>
                        <Timeline />
                    </section>

                    <section id="clients" className='p-5 py-32 bg-white dark:bg-gray-900'>
                        <h2 className="text-4xl font-bold my-5 dark:text-white text-black text-center">Clients</h2>
                        <div className='flex justify-center items-center'>
                            <div className="block justify-center overflow-auto gap-5">
                                <div className='flex gap-5'>
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index}
                                            src={`/assets/images/clients/${index + 1}.png`}  // Update the path to match your public directory
                                            alt={`Clients ${index + 1}`}
                                            className="w-fit h-32 object-cover"
                                        />
                                    ))}
                                </div>
                                <div className='flex gap-5 mt-5'>
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index + 5}
                                            src={`/assets/images/clients/${index + 6}.png`}  // Update the path to match your public directory
                                            alt={`Clients ${index + 6}`}
                                            className="w-fit h-32 object-cover"
                                        />
                                    ))}
                                </div>
                                <div className='flex gap-5 mt-5'>
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index + 10}
                                            src={`/assets/images/clients/${index + 11}.png`}  // Update the path to match your public directory
                                            alt={`Clients ${index + 11}`}
                                            className="w-fit h-32 object-cover"
                                        />
                                    ))}
                                </div>
                                <div className='flex gap-5 mt-5'>
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index + 15}
                                            src={`/assets/images/clients/${index + 16}.png`}  // Update the path to match your public directory
                                            alt={`Clients ${index + 16}`}
                                            className="w-fit h-32 object-cover"
                                        />
                                    ))}
                                </div>
                                <div className='flex gap-5 mt-5'>
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index + 20}
                                            src={`/assets/images/clients/${index + 21}.png`}  // Update the path to match your public directory
                                            alt={`Clients ${index + 21}`}
                                            className="w-fit h-32 object-cover"
                                        />
                                    ))}
                                </div>
                                <div className='flex gap-5 mt-5'>
                                    {[...Array(4)].map((_, index) => (
                                        <img
                                            key={index + 25}
                                            src={`/assets/images/clients/${index + 26}.png`}  // Update the path to match your public directory
                                            alt={`Clients ${index + 26}`}
                                            className="w-fit h-32 object-cover"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*
                    <section id="article" className='p-5 md:px-32 lg:px-64 xl:px-96 py-32 bg-purple-200 bg-opacity-30'>
                        <h2 className="text-4xl font-bold my-5 dark:text-white text-black text-center mb-32">Article</h2>
                        <div className='flex flex-col xl:flex-row'>
                            <div>
                                <PostGrid posts={posts} />
                                <PostList posts={posts} />
                            </div>
                            <div className="md:px-5 xl:py-0">
                                <Sidebar postCountByYear={postCountByYear} posts={posts} />
                            </div>
                        </div>
                    </section>
                    */}
                </>
            )}
        </AppLayouts>
    );
}

export default Home;
