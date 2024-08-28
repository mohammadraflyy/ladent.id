import React, { useState } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import SEO from '../Components/SEO';
import ImageModal from '../Components/ImageModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faSpotify } from '@fortawesome/free-brands-svg-icons';

function Artist() {
    const artistsData = [
        {
            name: 'CAROL DE',
            birthdate: 'January 25th',
            images: [
                '/assets/images/artists/carol-1.jpg',
                '/assets/images/artists/carol-2.jpg',
                '/assets/images/artists/carol-3.jpg'
            ],
            discography: [
                '2024 Bahwa Cinta',
                '2023 Sebelum Terlanjur',
                '2021 Duhai Kekasihku',
                '2020 Walaupun Bukan Karena (WBK)',
                '2017 Album : Hanya Untukmu',
                'Java Ver. Leksa Taun, Katresnan, Ojo Takon Aku Iki Sapa, Tanpa Watesan, Tanpa Awakmu, Duhai Katresnan, Magnet Katresnan',
            ],
            filmography: [
                'Assalamulaikum Beijing',
                'Duel : The Last Choice',
            ],
            tvShows: [
                'Selebrita Trans7',
                'Rumpi Trans TV',
                'Klik ANTV',
                'MNC Sport',
                'Jakarta Bersepeda JakTV',
                'On Spot Light B-Channel',
                'Dakocan TVRI',
            ],
            ads: [
                'Kungfu Legacy',
                'FOE2',
                'Scarlett',
                'Polytron',
                'Life After',
                'Alfa Gift',
                'BCA',
                'Rinnai',
            ],
            socialLinks: {
                instagram: 'https://www.instagram.com/carollynedewi',
                youtube: 'https://www.youtube.com/@CAROLLYNEDEWI',
                tiktok: 'https://www.tiktok.com/@carollynedewi',
                spotify: 'https://open.spotify.com/artist/1HOwasQHQ9Ne8LRVJ0oQzj',
            },
        },
        {
            name: 'CAMELLIA',
            birthdate: 'March 20th',
            images: [
                '/assets/images/artists/camellia-1.jpg',
                '/assets/images/artists/camellia-2.jpg',
                '/assets/images/artists/camellia-3.jpg',
                '/assets/images/artists/camellia-4.jpg',
            ],
            discography: [],
            filmography: [],
            tvShows: [],
            ads: [],
            socialLinks: {
                instagram: 'https://www.instagram.com/camelliadw',
                youtube: 'https://www.youtube.com/@camelliadw',
                tiktok: 'https://www.tiktok.com/@camelliadewi',
            },
        },
    ];

    const [selectedArtist, setSelectedArtist] = useState(artistsData[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');
    const title = 'Artist';

    return (
        <AppLayouts title={null}>
            <SEO title={title} description='Choose artist to be shown' />
            <div className='flex flex-col lg:flex-row rounded-xl h-[750px] my-5'>
                <div className='w-full p-4 h-fit md:h-full lg:border-r border-b lg:border-b-0 lg:rounded-l-xl border-gray-300 dark:border-gray-700'>
                    <h2 className="text-sm text-gray-500 text-center mb-5">ARTISTS</h2>

                    <div className='flex justify-center items-center mt-20'>
                        <ul className='text-center'>
                            {artistsData.map((artist, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer p-2 ${selectedArtist.name === artist.name ? 'font-bold' : ''} hover:bg-gray-600 dark:text-gray-100 text-gray-700 hover:text-white rounded-xl`}
                                    onClick={() => setSelectedArtist(artist)}
                                >
                                    {artist.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='w-full p-4 my-5 overflow-y-auto h-full lg:border-r border-b lg:border-b-0 border-gray-300 dark:border-gray-700 scrollbar-hide'>
                    {selectedArtist ? (
                        <div className="flex flex-col gap-2">
                            {selectedArtist.images.map((imagePath, index) => (
                                <img
                                    key={index}
                                    src={imagePath}
                                    alt={`${selectedArtist.name} ${index + 1}`}
                                    className='w-full h-auto object-cover dark:text-gray-100 text-gray-700 rounded-xl cursor-pointer'
                                    onClick={() => {
                                        setModalImageSrc(imagePath);
                                        setIsModalOpen(true);
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className='dark:text-gray-100 text-gray-700'>Select an artist to see the pictures</p>
                    )}
                </div>

                <div className='w-full h-full p-4 my-5 rounded-r-xl border-gray-300 overflow-auto'>
                    {selectedArtist ? (
                        <>
                            <div className='flex justify-center items-center md:border-b border-gray-300 dark:border-gray-700'>
                                <div className='text-center mb-2'>
                                    <h2 className='text-xl font-bold dark:text-gray-100 text-gray-700'>{selectedArtist.name}</h2>
                                    <p className='font-light text-sm dark:text-gray-100 text-gray-700'>{selectedArtist.birthdate}</p>
                                    {selectedArtist.socialLinks && (
                                        <div className='flex justify-center space-x-4 mt-4'>
                                            {selectedArtist.socialLinks.instagram && (
                                                <a href={selectedArtist.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faInstagram} className="text-gray-700 dark:text-gray-100 hover:text-pink-600" />
                                                </a>
                                            )}
                                            {selectedArtist.socialLinks.youtube && (
                                                <a href={selectedArtist.socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faYoutube} className="text-gray-700 dark:text-gray-100 hover:text-red-600" />
                                                </a>
                                            )}
                                            {selectedArtist.socialLinks.tiktok && (
                                                <a href={selectedArtist.socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faTiktok} className="text-gray-700 dark:text-gray-100 hover:text-black" />
                                                </a>
                                            )}
                                            {selectedArtist.socialLinks.spotify && (
                                                <a href={selectedArtist.socialLinks.spotify} target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={faSpotify} className="text-gray-700 dark:text-gray-100 hover:text-green-600" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">DISCOGRAPHY</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.discography.length > 0 ? (
                                        selectedArtist.discography.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    ) : (
                                        <li>-</li>
                                    )}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">FILMOGRAPHY</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.filmography.length > 0 ? (
                                        selectedArtist.filmography.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    ) : (
                                        <li>-</li>
                                    )}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">TV SHOWS</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.tvShows.length > 0 ? (
                                        selectedArtist.tvShows.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    ) : (
                                        <li>-</li>
                                    )}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">ADS/ KOL</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.ads.length > 0 ? (
                                        selectedArtist.ads.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    ) : (
                                        <li>-</li>
                                    )}
                                </ul>
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
