import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { TESTIMONIAL_1 } from '@/configs/images';
import { StarFilledIcon } from '@radix-ui/react-icons';

const Testimonial = () => {
  const testimony = [
    {
      name: 'Mary',
      testimony:
        'Lorem ipsum dolor sit amet consectetur. Risus libero proin ut purus consequat integer nunc habitant.',
      img: TESTIMONIAL_1,
      occupation: 'Designer',
      rating: 4.6,
    },
    {
      name: 'Mary',
      testimony:
        'Lorem ipsum dolor sit amet consectetur. Risus libero proin ut purus consequat integer nunc habitant.',
      img: TESTIMONIAL_1,
      occupation: 'Designer',
      rating: 4.6,
    },
    {
      name: 'Mary',
      testimony:
        'Lorem ipsum dolor sit amet consectetur. Risus libero proin ut purus consequat integer nunc habitant.',
      img: TESTIMONIAL_1,
      occupation: 'Designer',
      rating: 4.6,
    },
  ];

  return (
    <section className="py-16 bg-[#FDF9ED] min-h-[60vh] px-4 md:px-12">
      <h1 className="text-4xl text-center mb-12 font-semibold">
        What Our Customer Says
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6">
        {testimony.map((item, index) => (
          <Card className="min-h-12" key={index}>
            <CardHeader className="flex items-center">
              <div className="h-6 relative">
                <img src={item.img} alt="menu" className="rounded-full" />
              </div>
            </CardHeader>
            <CardContent className="">
              <p className="text-sm mb-2 text-center mt-8 text-gray-700">
                "{item.testimony}"
              </p>
              <div className="flex justify-center mt-8">
                {Array(Math.floor(item.rating))
                  .fill('')
                  .map((_, index) => (
                    <StarFilledIcon
                      key={index}
                      className="text-yellow-primary"
                    />
                  ))}
              </div>
              <h3 className="text-xl font-bold text-center mt-4">
                {item.name}
              </h3>
              <p className="text-sm text-center text-gray-600">
                {item.occupation}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
