import React, { useState } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import SEO from '../Components/SEO';
import ImageModal from '../Components/ImageModal';

function Artist() {
    const artistData = {
        name: 'CAROL DE',
        birthdate: 'January 25th',
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
    };

    const [selectedArtist, setSelectedArtist] = useState(artistData); // Set default artist
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
                            <li
                                className={`cursor-pointer p-2 ${selectedArtist ? 'font-bold' : ''} hover:bg-gray-600 dark:text-gray-100 text-gray-700 hover:text-white rounded-xl`}
                                onClick={() => setSelectedArtist(artistData)}
                            >
                                CAROL DE
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full p-4 overflow-y-auto h-full lg:border-r border-b lg:border-b-0 border-gray-300 dark:border-gray-700 scrollbar-hide'>
                    {selectedArtist ? (
                        <div className="flex flex-col gap-2">
                            {[...Array(4)].map((_, index) => (
                                <img
                                    key={index}
                                    src={`/assets/images/artists/carol-${index + 1}.jpg`}  // Update the path to match your public directory
                                    alt={`Carol De ${index + 1}`}
                                    className='w-full h-auto object-cover dark:text-gray-100 text-gray-700 rounded-xl cursor-pointer'
                                    onClick={() => {
                                        setModalImageSrc(`/assets/images/artists/carol-${index + 1}.jpg`);
                                        setIsModalOpen(true);
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className='dark:text-gray-100 text-gray-700'>Select an artist to see the pictures</p>
                    )}
                </div>

                <div className='w-full h-full p-4 rounded-r-xl border-gray-300 overflow-auto'>
                    {selectedArtist ? (
                        <>
                            <div className='flex justify-center items-center md:border-b border-gray-300 dark:border-gray-700'>
                                <div className='text-center mb-2'>
                                    <h2 className='text-xl font-bold dark:text-gray-100 text-gray-700'>{selectedArtist.name}</h2>
                                    <p className='font-light text-sm dark:text-gray-100 text-gray-700'>{selectedArtist.birthdate}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">DISCOGRAPHY</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.discography.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">FILMOGRAPHY</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.filmography.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">TV SHOW</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.tvShows.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-sm dark:text-gray-100 text-gray-700">AD/ KOL</h3>
                                <ul className="space-y-1 text-sm dark:text-gray-100 text-gray-700">
                                    {selectedArtist.ads.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
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
