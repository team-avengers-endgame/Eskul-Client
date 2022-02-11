import React from 'react';
import Featur from './Featur';

const Features = () => {
    const featuresData = [
        {
            title: 'Schools',
            img: 'https://i.ibb.co/VBg5t9V/pexels-photo-357271.jpg',
            description: 'Here you can find your faviroute schools.',

        },
        {
            title: 'Online tution',
            img: 'https://i.ibb.co/sjk9MtL/pexels-photo-5303549.jpg',
            description: 'Here you can find your online private tution.',

        },
        {
            title: 'Donation',
            img: 'https://i.ibb.co/6Wf0S3d/pexels-photo-271168.jpg',
            description: 'Here you can donate money to any institution through us.',

        },
        {
            title: 'Shopping',
            img: 'https://i.ibb.co/Q9yYdn7/hand-using-mobile-phone-online-shopping-business-ecommerce-concept-cart-icon-blue-background-8930399.jpg',
            description: 'Here you can buy books for you kids.',

        },
        {
            title: 'Transport',
            img: 'https://i.ibb.co/WzSyMyc/photo-1556504505-2ebcc8edf84a.jpg',
            description: 'Here you can see our own transport system.',

        },
        {
            title: 'Notes',
            img: 'https://i.ibb.co/jhNmYLr/photo-1517842645767-c639042777db.jpg',
            description: 'Here you can see how we provide school notes also.',

        },

    ]

    return (
        <div className=' p-3'>

            <h1 className="underline  decoration-orange-500/[.33] text-4xl text-orange-400 font-bold py-20">Our Features</h1>
            <div>
                <div className="grid gap-10 md:grid-cols-3">
                    {
                        featuresData.map((featur, index) =>
                            <Featur
                                key={index}
                                featur={featur}

                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Features;