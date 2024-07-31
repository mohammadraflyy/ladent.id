import React, { useState, useEffect } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
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
                setArtists(data.data);
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

    const handleImageClick = (imageSrc) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    return (
        <AppLayouts title={title}>
            <SEO title={title} description='Choose artist to be shown' />
            <div className='flex flex-col lg:flex-row dark:bg-gray-800 bg-white rounded-xl shadow-lg h-[750px] my-5'>
                <div className='w-full overflow-auto lg:w-1/4 p-4 lg:border-r border-b lg:border-b-0 lg:rounded-l-xl border-gray-300 dark:border-gray-700'>
                    <div className='mb-4 flex items-center dark:bg-gray-700 bg-gray-200 rounded-xl'>
                        <MagnifyingGlassIcon className='h-5 w-5 dark:text-gray-400 text-gray-700 ml-3' />
                        <input
                            type='text'
                            placeholder='Find Artist...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='w-full px-3 py-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-700 placeholder-gray-400 rounded-xl focus:outline-none pl-2'
                        />
                    </div>
                    {loading && <p className='text-gray-100'>Loading artists...</p>}
                    {error && <p className='text-red-500'>Error: {error}</p>}
                    {!loading && !error && (
                    <ul className='mt-4'>
                        {filteredArtists.map(artist => (
                            <li
                                key={artist.id}
                                className='cursor-pointer p-2 hover:bg-gray-600 dark:text-gray-100 text-gray-700 hover:text-white rounded-xl'
                                onClick={() => setSelectedArtist(artist)}
                            >
                                • {artist.name}
                            </li>
                        ))}
                    </ul>
                    )}
                </div>

                <div className='w-full lg:w-1/4 p-4 overflow-auto lg:border-r border-b lg:border-b-0 border-gray-300 dark:border-gray-700'>
                    {selectedArtist ? (
                        <img
                            src={`${API_BASE_URL}/storage/artists/${selectedArtist.image}`}
                            alt={selectedArtist.name}
                            className='w-fit h-fit object-cover dark:text-gray-100 text-gray-700 rounded-xl cursor-pointer'
                            onClick={() => handleImageClick(`${API_BASE_URL}/storage/artists/${selectedArtist.image}`)}
                        />
                    ) : (
                        <p className='dark:text-gray-100 text-gray-700'>Select an artist to see the picture</p>
                    )}
                </div>

                <div className='w-full lg:w-1/2 p-4 rounded-r-xl border-gray-300 overflow-auto'>
                    {selectedArtist ? (
                        <>
                            <h2 className='text-xl font-bold dark:text-gray-100 text-gray-700'>{selectedArtist.name}</h2>
                            <p className='mt-2 dark:text-gray-100 text-gray-700'>{selectedArtist.bio}</p>
                            <p className='mt-2 dark:text-gray-100 text-gray-700'><strong>Birthdate:</strong> {selectedArtist.birthdate}</p>
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
