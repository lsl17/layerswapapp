import CardContainer from './cardContainer';
import { ChevronRightIcon } from '@heroicons/react/solid';
import FooterComponent from './footerComponent';
import { useState } from 'react';
import Modal from './modalComponent';
import { DocIframe } from './docInIframe';

function IntroCard(props) {
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    return (
        <CardContainer {...props} >
            <div className="flex flex-col px-4 md:px-8 py-6 text-primary-text font-light">
                <div>
                    <h1 className="text-xl font-light text-white">About Layerswap</h1>
                    <p className="text-base mt-2">
                        Move crypto from Coinbase, Binance or Kraken to zkSync, Loopring, StarkNet and other L2s. <span className='underline hover:no-underline cursor-pointer' onClick={handleOpenModal}>Read more</span>
                    </p>
                    <a target="_blank" href="https://twitter.com/layerswap/status/1593259469722423299?s=20&t=QSWDB8kg8z2-wywDemHk-w" className="mt-3 inline-flex group items-center rounded-lg border border-darkblue-400  bg-darkblue-600 p-1 pr-2 text-white sm:text-base lg:text-sm xl:text-base">
                        <span className="rounded-md bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white"> New </span>
                        <span className="ml-4 text-sm font-medium">BNB Chain (BSC) 🤯 <span className='hidden sm:inline'>and a new feature.</span></span>
                        <ChevronRightIcon className="ml-2 h-5 w-5 text-primary-text group-hover:text-primary-500" aria-hidden="true" />
                    </a>
                </div>
                <FooterComponent />
                <Modal className="bg-[#181c1f] sm:!pb-6 !pb-0" showModal={openModal} setShowModal={setOpenModal}>
                    <DocIframe URl={'https://docs.layerswap.io/user-docs/'} onConfirm={handleCloseModal} className='md:min-h-[calc(100vh-170px)]' />
                </Modal>
            </div>
        </CardContainer>
    );
}

export default IntroCard;
