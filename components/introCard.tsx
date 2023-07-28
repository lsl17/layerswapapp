import CardContainer from './cardContainer';
import { ChevronRight, Fuel, Gift } from 'lucide-react';
import FooterComponent from './footerComponent';

function IntroCard(props) {
    return (
        <CardContainer {...props} >
            <div className="flex flex-col px-6 py-6 text-primary-text font-light">
                <div>
                    <a target="_blank" href="https://docs.layerswap.io/user-docs/using-layerswap/usdop-rewards" className="inline-flex group items-center rounded-lg border border-secondary-500  bg-secondary-600 p-1 pr-2 text-white sm:text-base lg:text-sm xl:text-base">
                        <span className="rounded-md bg-primary px-3 py-0.5 text-sm font-semibold leading-5 text-white"> New </span>
                        <span className="ml-2 md:text-sm text-xs font-medium flex items-center gap-2">Transfer to Avalanche with $AVAX refuel </span>
                        <ChevronRight className="ml-2 h-5 w-5 text-primary-text group-hover:text-primary-500" aria-hidden="true" />
                    </a>
                </div>
                <FooterComponent />
            </div>
        </CardContainer>
    );
}

export default IntroCard;