import React, { useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../Utils/postService';
import Slider from 'react-slick';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full cursor-pointer"
            onClick={onClick}
        >
            <ChevronRightIcon className="h-6 w-6 text-white" />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
        </div>
    );
};

const PostGrid = ({ posts }) => {
    const sliderSettings = useMemo(() => ({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }), []);

    useEffect(() => {
        posts.data.slice(0, 3).forEach(post => {
            const img = new Image();
            img.src = `${API_BASE_URL}/storage/posts/${post.image}`;
        });
    }, [posts]);

    return (
        <div className="grid grid-cols-1 gap-4 mb-10">
            <div className="relative">
                <Slider {...sliderSettings}>
                    {posts.data.slice(0, 3).map((post, index) => {
                        const imageUrl = `${API_BASE_URL}/storage/posts/${post.image}`;
                        return (
                            <Link 
                                key={index}
                                to={`/posts/${post.slug}`} 
                                className="relative h-[250px] md:h-[500px] flex justify-center items-center rounded-lg overflow-hidden shadow-lg"
                            >
                                <img
                                    src={imageUrl}
                                    alt={post.title}
                                    className="object-cover w-full h-full"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 flex items-end justify-center p-4">
                                    <div className="bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0" />
                                    <div className="relative text-white text-lg md:text-2xl font-bold p-4">
                                        {post.title}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default PostGrid;
