import React, { useState, useEffect } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
//eslint-disable-next-line
import { API_BASE_URL, fetchArtists } from '../Utils/postService';
import SEO from '../Components/SEO';
import ImageModal from '../Components/ImageModal';

function Artist() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedArtist, setSelectedArtist] = useState(null);
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [modalImageSrc, setModalImageSrc] = useState(''); // State for modal image source
    const title = 'Artist';

    useEffect(() => {
        const getArtists = async () => {
            try {
                const data = await fetchArtists();
                // Add dummy filmography and ads to each artist
                const updatedArtists = data.data.map(artist => ({
                    ...artist,
                    filmography: ['Film 1', 'Film 2', 'Film 3'],
                    ads: 'Featured in XYZ Advertisement',
                }));
                setArtists(updatedArtists);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getArtists();
    }, []);

    const filteredArtists = artists.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //eslint-disable-next-line
    const handleImageClick = (imageSrc) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        const artist = artists.find(artist => artist.id === parseInt(selectedId));
        setSelectedArtist(artist);
    };

    return (
        <AppLayouts title={null}>
            <SEO title={title} description='Choose artist to be shown' />
            <div className='flex flex-col lg:flex-row rounded-xl h-[750px] my-5'>
                {/* Left Sidebar - Artist Names */}
                <div className='w-full overflow-auto p-4 h-full lg:border-r border-b lg:border-b-0 lg:rounded-l-xl border-gray-300 dark:border-gray-700'>
                    <h2 className="text-sm text-gray-500 text-left mb-5">ARTISTS</h2>

                    {/* Mobile View: Select Dropdown */}
                    <div className='block lg:hidden mb-4'>
                        <select
                            value={selectedArtist?.id || ''}
                            onChange={handleSelectChange}
                            className='w-full px-3 py-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-700 placeholder-gray-400 rounded-xl focus:outline-none'
                        >
                            <option value="">Select an Artist</option>
                            {filteredArtists.map(artist => (
                                <option key={artist.id} value={artist.id}>
                                    {artist.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Desktop View: List */}
                    <div className='hidden lg:block'>
                        <div className='mb-4 flex items-center dark:bg-gray-700 bg-gray-200 rounded-xl'>
                            <MagnifyingGlassIcon className='h-5 w-5 dark:text-gray-400 text-gray-700 ml-3' />
                            <input
                                type='text'
                                placeholder='Find Artist'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='w-full px-3 py-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-700 placeholder-gray-400 rounded-xl focus:outline-none pl-2'
                            />
                        </div>
                        {loading && <p className='text-gray-100'>Loading artists...</p>}
                        {error && <p className='text-red-500'>Error: {error}</p>}
                        {!loading && !error && (
                            <ul className='text-left space-y-2'>
                                {filteredArtists.map(artist => (
                                    <li
                                        key={artist.id}
                                        className={`cursor-pointer p-2 ${selectedArtist?.id === artist.id ? 'font-bold' : ''} hover:bg-gray-600 dark:text-gray-100 text-gray-700 hover:text-white rounded-xl`}
                                        onClick={() => setSelectedArtist(artist)}
                                    >
                                        • {artist.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Center Section - Artist Image */}
                <div className='w-full p-4 overflow-y-auto h-full lg:border-r border-b lg:border-b-0 border-gray-300 dark:border-gray-700 scrollbar-hide'>
                    {selectedArtist ? (
                        <div className="flex flex-col gap-2">
                            {/* Placeholder image from an online source */}
                            {[...Array(10)].map((_, index) => (
                                <img
                                    key={index}
                                    src={`https://via.placeholder.com/300x200.png?text=Artist+Image+${index + 1}`}
                                    alt={`Placeholder ${index + 1}`}
                                    className='w-full h-auto object-cover dark:text-gray-100 text-gray-700 rounded-xl cursor-pointer'
                                />
                            ))}
                        </div>
                    ) : (
                        <p className='dark:text-gray-100 text-gray-700'>Select an artist to see the pictures</p>
                    )}
                </div>

                {/* Right Sidebar - Artist Details and Filmography */}
                <div className='w-full h-full p-4 rounded-r-xl border-gray-300 overflow-auto'>
                    {selectedArtist ? (
                        <>
                            <div className='flex justify-center items-center'>
                                <div className='text-center mb-2'>
                                    <h2 className='text-xl font-bold dark:text-gray-100 text-gray-700'>{selectedArtist.name}</h2>
                                    <p className='font-light text-sm dark:text-gray-100 text-gray-700'>{selectedArtist.birthdate}</p>
                                </div>
                            </div>
                            <p className='mt-2 dark:text-gray-100 text-gray-700 font-light text-sm'>{selectedArtist.bio}</p>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">FILMOGRAPHY</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.filmography && selectedArtist.filmography.length > 0 ? (
                                        selectedArtist.filmography.map((film, index) => (
                                            <li key={index}>{film}</li>
                                        ))
                                    ) : (
                                        <li>No filmography available</li>
                                    )}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">AD</h3>
                                <p className="text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.ads || 'No ad information available'}
                                </p>
                            </div>
                        </>
                    ) : (
                        <p className='dark:text-gray-100 text-gray-700'>Select an artist to see details</p>
                    )}
                </div>
            </div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageSrc={modalImageSrc}
            />
        </AppLayouts>
    );
}

export default Artist;
