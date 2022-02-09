import React from 'react';

const Newsletter = () => {
    return (
        <div class='py-10'>
            <div className="py-1">
                <h2 class='text-5xl text-bold'>Get more updates from us</h2>
                <div>
                    <form class="m-4 flex justify-center">
                        <input
                            class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-80" placeholder="your@mail.com" />

                        <button
                            class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;