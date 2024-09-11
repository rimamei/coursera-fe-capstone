import { Button } from '@/components/ui/button';
import { HERO_IMAGE } from '@/configs/images';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onModal: () => void;
}

const Hero = ({ onModal }: HeroProps) => {
  return (
    <section className="pt-16 bg-[#347474] min-h-screen flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 px-4 md:px-12 justify-between">
      <div className="mt-8 md:mt-16 space-y-4">
        <h1 className="text-white text-5xl mb-4">
          The Number #One <br />
          <span className="font-bold">Healthy</span> Mediterania Food
        </h1>
        <p className="text-white font-regular">
          Lorem Ipsumis simply dummy text of the printing brand typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard.
        </p>
        <div className="flex space-x-2">
          <Button className="rounded-full" onClick={onModal}>
            Reserve
          </Button>
          <Button className="rounded-full">
            Delivery <ArrowRight />
          </Button>
        </div>
      </div>
      <div>
        <figure>
          <img
            src={HERO_IMAGE}
            alt="hero"
            className="rounded-lg md:h-[80vh] h-[30vh] "
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
